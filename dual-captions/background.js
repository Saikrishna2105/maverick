/*
 * Dual Captions – background service worker.
 *
 * Handles translation requests that the content script could not do with the
 * on-device Translator API:
 *   1. If the request comes from an iframe, ask the tab's top frame first:
 *      the on-device API is often blocked inside cross-origin iframes
 *      (Permissions-Policy) but works in the top-level page.
 *   2. Otherwise use free, keyless web endpoints (Google "gtx", then MyMemory)
 *      with a small cache, request spacing and back-off on rate limits.
 */
'use strict';

const DEFAULTS = {
  enabled: true,
  sourceLang: 'en',
  targetLang: 'fr',
  fontSize: 22,
  debug: false,
};

// Fill in missing settings on install/update (keeps the user's choices).
chrome.runtime.onInstalled.addListener(async () => {
  const stored = await chrome.storage.sync.get(null);
  const missing = {};
  for (const [k, v] of Object.entries(DEFAULTS)) if (!(k in stored)) missing[k] = v;
  if (Object.keys(missing).length) await chrome.storage.sync.set(missing);
});

/* ---------------------------------------------------------------------- */
/* Small LRU cache (lives as long as the service worker)                   */
/* ---------------------------------------------------------------------- */

const CACHE_MAX = 1000;
const cache = new Map();

function cacheGet(key) {
  if (!cache.has(key)) return undefined;
  const v = cache.get(key);
  cache.delete(key);
  cache.set(key, v);
  return v;
}

function cacheSet(key, value) {
  cache.set(key, value);
  if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
}

/* ---------------------------------------------------------------------- */
/* Web providers                                                           */
/* ---------------------------------------------------------------------- */

const REQUEST_TIMEOUT_MS = 8000;
const MIN_GAP_MS = 150;     // spacing between web requests
const MAX_QUEUE = 20;       // drop requests beyond this backlog

class RateLimitError extends Error {}

// Web services expect region codes for Chinese.
const webLang = (code) => (code === 'zh' ? 'zh-CN' : code);

async function fetchWithTimeout(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { signal: ctrl.signal, credentials: 'omit' });
  } finally {
    clearTimeout(timer);
  }
}

const PROVIDERS = [
  {
    name: 'google',
    async translate(text, src, tgt) {
      const url =
        'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t' +
        `&sl=${encodeURIComponent(webLang(src))}&tl=${encodeURIComponent(webLang(tgt))}` +
        `&q=${encodeURIComponent(text)}`;
      const res = await fetchWithTimeout(url);
      if (res.status === 429 || res.status === 503) throw new RateLimitError(`HTTP ${res.status}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      // data[0] = [[translatedChunk, originalChunk, ...], ...]
      if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error('Unexpected response');
      return data[0].map((seg) => (seg && seg[0]) || '').join('');
    },
  },
  {
    name: 'mymemory',
    async translate(text, src, tgt) {
      const url =
        'https://api.mymemory.translated.net/get' +
        `?q=${encodeURIComponent(text.slice(0, 500))}` + // MyMemory limit: 500 chars
        `&langpair=${encodeURIComponent(`${webLang(src)}|${webLang(tgt)}`)}`;
      const res = await fetchWithTimeout(url);
      if (res.status === 429) throw new RateLimitError('HTTP 429');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const out = data && data.responseData && data.responseData.translatedText;
      if (Number(data.responseStatus) === 429 || /MYMEMORY WARNING/i.test(out || '')) {
        throw new RateLimitError('Daily quota reached');
      }
      if (Number(data.responseStatus) !== 200 || typeof out !== 'string') {
        throw new Error(data.responseDetails || 'Unexpected response');
      }
      return out;
    },
  },
];

// Per-provider back-off after a rate limit: 5s, 10s, 20s ... up to 5 min.
const cooldownUntil = {};
const backoffMs = {};

// Serialize web requests with a minimum gap between them.
let queue = Promise.resolve();
let queued = 0;
let lastRequestAt = 0;

function schedule(fn) {
  if (queued >= MAX_QUEUE) return Promise.reject(new Error('Too many pending requests'));
  queued++;
  const run = queue.then(async () => {
    const wait = lastRequestAt + MIN_GAP_MS - Date.now();
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastRequestAt = Date.now();
    return fn();
  });
  queue = run.catch(() => {}).finally(() => { queued--; });
  return run;
}

async function webTranslate(text, src, tgt) {
  const errors = [];
  for (const p of PROVIDERS) {
    if (Date.now() < (cooldownUntil[p.name] || 0)) {
      errors.push(`${p.name}: cooling down`);
      continue;
    }
    try {
      const out = await schedule(() => p.translate(text, src, tgt));
      backoffMs[p.name] = 0;
      return { text: out, engine: p.name };
    } catch (e) {
      if (e instanceof RateLimitError) {
        backoffMs[p.name] = Math.min(Math.max(5000, (backoffMs[p.name] || 0) * 2), 300000);
        cooldownUntil[p.name] = Date.now() + backoffMs[p.name];
      }
      errors.push(`${p.name}: ${e.message}`);
    }
  }
  throw new Error(errors.join('; '));
}

/* ---------------------------------------------------------------------- */
/* Top-frame relay for the on-device API                                   */
/* ---------------------------------------------------------------------- */

const RELAY_TIMEOUT_MS = 5000;
const relayMissUntil = new Map(); // tabId -> time until which we skip the relay

async function topFrameTranslate(tabId, text, src, tgt) {
  if (Date.now() < (relayMissUntil.get(tabId) || 0)) return null;
  try {
    const res = await Promise.race([
      chrome.tabs.sendMessage(tabId, { type: 'nativeTranslate', text, source: src, target: tgt }, { frameId: 0 }),
      new Promise((resolve) => setTimeout(() => resolve(null), RELAY_TIMEOUT_MS)),
    ]);
    if (res && typeof res.text === 'string') return res.text;
  } catch { /* no content script in the top frame */ }
  // Not usable right now; don't ask again for a minute.
  relayMissUntil.set(tabId, Date.now() + 60000);
  return null;
}

chrome.tabs.onRemoved.addListener((tabId) => relayMissUntil.delete(tabId));

/* ---------------------------------------------------------------------- */
/* Messages from content scripts                                           */
/* ---------------------------------------------------------------------- */

async function handleTranslate({ text, source, target }, sender) {
  if (typeof text !== 'string' || !text.trim()) return { text: '' };
  const key = `${source}|${target}|${text}`;
  const hit = cacheGet(key);
  if (hit) return hit;

  let result = null;
  if (sender.tab && sender.frameId) {
    const out = await topFrameTranslate(sender.tab.id, text, source, target);
    if (out != null) result = { text: out, engine: 'on-device (top frame)' };
  }
  if (!result) result = await webTranslate(text, source, target);
  cacheSet(key, result);
  return result;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || msg.type !== 'translate') return undefined;
  handleTranslate(msg, sender).then(sendResponse, (e) => sendResponse({ error: String(e.message || e) }));
  return true; // async response
});
