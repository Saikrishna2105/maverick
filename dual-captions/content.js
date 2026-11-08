/*
 * Dual Captions – content script.
 *
 * Runs in every frame (players are often inside iframes). For each frame it:
 *   1. Detects the caption text the player shows, with no site-specific
 *      selectors: a MutationObserver looks for short, visible, frequently
 *      changing text sitting in the lower part of a <video>.
 *      Native <track> captions are also read through `cuechange`.
 *   2. Translates each new caption line (on-device Translator API first,
 *      free web endpoint via the background worker as fallback).
 *   3. Draws the translation in an overlay right below the original caption.
 */
(() => {
  'use strict';

  // Guard against double injection (e.g. extension reloaded).
  if (window.__dualCaptionsLoaded) return;
  window.__dualCaptionsLoaded = true;

  /* ------------------------------------------------------------------ */
  /* Settings                                                            */
  /* ------------------------------------------------------------------ */

  const DEFAULTS = {
    enabled: true,
    sourceLang: 'en',
    targetLang: 'fr',
    fontSize: 22,
    debug: false,
  };
  let settings = { ...DEFAULTS };

  const IS_TOP = (() => {
    try { return window.top === window; } catch { return false; }
  })();

  const OWN_ATTR = 'data-dual-captions'; // marks every element we create
  const MAX_CAPTION_CHARS = 300;          // longer text is not a caption
  const DOM_DEBOUNCE_MS = 90;             // merge "clear + refill" DOM updates
  const TICK_MS = 200;                    // reposition / visibility check
  const VIDEO_SCAN_MS = 1500;             // look for new <video>/<track>

  function log(...args) {
    if (!settings.debug) return;
    const where = IS_TOP ? 'top' : `frame ${location.href.slice(0, 80)}`;
    console.log('%c[DualCaptions]', 'color:#4caf50;font-weight:bold', ...args, `(${where})`);
  }

  /* ------------------------------------------------------------------ */
  /* Small DOM helpers                                                   */
  /* ------------------------------------------------------------------ */

  const SKIP_TAGS = new Set([
    'SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'VIDEO', 'AUDIO', 'IFRAME',
    'CANVAS', 'SVG', 'IMG', 'HEAD', 'TITLE', 'META', 'LINK',
  ]);
  // Player controls: their text (time, menu items, tooltips) is never a caption.
  const INTERACTIVE =
    'button, a[href], input, select, textarea, label, [role="button"], ' +
    '[role="slider"], [role="menu"], [role="menuitem"], [role="tooltip"], [contenteditable="true"]';

  function isOwn(node) {
    const el = node && (node.nodeType === 1 ? node : node.parentElement);
    return !!(el && el.closest(`[${OWN_ATTR}]`));
  }

  function isVisible(el) {
    if (!el || !el.isConnected) return false;
    if (typeof el.checkVisibility === 'function') {
      return el.checkVisibility({ opacityProperty: true, visibilityProperty: true });
    }
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  /** Visible caption text, one trimmed line per rendered line. */
  function readText(el) {
    const raw = el.innerText || el.textContent || '';
    return raw
      .split('\n')
      .map((s) => s.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join('\n');
  }

  /** Bounding box of the rendered text (tighter than the element box). */
  function textRect(el) {
    try {
      const range = document.createRange();
      range.selectNodeContents(el);
      const r = range.getBoundingClientRect();
      if (r.width && r.height) return r;
    } catch { /* fall through */ }
    return el.getBoundingClientRect();
  }

  /** Short CSS-like path, for debug logs. */
  function describe(el) {
    const parts = [];
    for (let e = el, i = 0; e && e.nodeType === 1 && i < 5; e = e.parentElement, i++) {
      let s = e.tagName.toLowerCase();
      if (e.id) s += `#${e.id}`;
      if (typeof e.className === 'string' && e.className.trim()) {
        s += '.' + e.className.trim().split(/\s+/).slice(0, 3).join('.');
      }
      parts.unshift(s);
    }
    return parts.join(' > ');
  }

  /* ------------------------------------------------------------------ */
  /* Language check                                                      */
  /* ------------------------------------------------------------------ */

  // Languages that are not written in Latin script.
  const SCRIPT_RE = {
    ja: /[぀-ヿ一-鿿]/,
    zh: /[一-鿿]/,
    ko: /[가-힯ᄀ-ᇿ]/,
    ru: /[Ѐ-ӿ]/,
    uk: /[Ѐ-ӿ]/,
    ar: /[؀-ۿ]/,
    hi: /[ऀ-ॿ]/,
    el: /[Ͱ-Ͽ]/,
    he: /[֐-׿]/,
    th: /[฀-๿]/,
  };

  /** Rough check that `text` is written in the source language's script. */
  function looksLikeSource(text, lang = settings.sourceLang) {
    const letters = text.match(/\p{L}/gu);
    if (!letters || letters.length < 2) return false; // timers, numbers, "♪"
    const re = SCRIPT_RE[lang] || /\p{Script=Latin}/u;
    const hits = letters.filter((c) => re.test(c)).length;
    return hits / letters.length >= (SCRIPT_RE[lang] ? 0.5 : 0.7);
  }

  /* ------------------------------------------------------------------ */
  /* Translation: cache -> on-device Translator API -> background (web) */
  /* ------------------------------------------------------------------ */

  const CACHE_MAX = 500;
  const cache = new Map();     // "en|fr|text" -> translation (LRU order)
  const inflight = new Map();  // same key -> Promise, to avoid duplicate requests

  function cacheGet(key) {
    if (!cache.has(key)) return undefined;
    const v = cache.get(key);
    cache.delete(key); // refresh LRU position
    cache.set(key, v);
    return v;
  }

  function cacheSet(key, value) {
    cache.set(key, value);
    if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
  }

  // Per language pair state of Chrome's on-device translator.
  // { translator, ready: Promise, creating: Promise|null, dead, armed, failures }
  const nativeState = new Map();

  let lastModelReport = 0;
  /** Share download progress with the popup (throttled). */
  function reportModelStatus(text, force = false) {
    const now = Date.now();
    if (!force && now - lastModelReport < 500) return;
    lastModelReport = now;
    try { chrome.storage.local.set({ modelStatus: { text, ts: now } }); } catch { /* context gone */ }
  }

  function getNativeTranslator(src, tgt) {
    if (typeof self.Translator === 'undefined') return Promise.resolve(null);
    const pair = `${src}>${tgt}`;
    let st = nativeState.get(pair);
    if (!st) {
      st = { translator: null, creating: null, dead: false, armed: false, failures: 0 };
      nativeState.set(pair, st);
      st.ready = initNative(st, src, tgt);
    }
    if (st.translator) return Promise.resolve(st.translator);
    if (st.dead) return Promise.resolve(null);
    return st.ready; // translator, or null while the model is not ready yet
  }

  async function initNative(st, src, tgt) {
    let availability;
    try {
      availability = await self.Translator.availability({ sourceLanguage: src, targetLanguage: tgt });
    } catch (e) {
      // Typically: blocked by Permissions-Policy in a cross-origin iframe.
      log('On-device Translator availability() failed:', e.message || e);
      st.dead = true;
      return null;
    }
    log(`On-device Translator availability ${src}->${tgt}:`, availability);

    if (availability === 'unavailable') {
      st.dead = true;
      return null;
    }
    if (availability === 'available') return createNative(st, src, tgt);

    // 'downloadable' / 'downloading': create() needs a user gesture to start
    // the model download. Use the web fallback meanwhile.
    if (navigator.userActivation && navigator.userActivation.isActive) {
      createNative(st, src, tgt);
    } else {
      armActivation(st, src, tgt);
    }
    return null;
  }

  /** Start the model download on the next click/keypress in this frame. */
  function armActivation(st, src, tgt) {
    if (st.armed) return;
    st.armed = true;
    log('On-device model needs a download; it will start on your next click/keypress in the page.');
    reportModelStatus(`On-device ${src}→${tgt} model not downloaded (click the page or use the popup button)`, true);
    const go = () => {
      window.removeEventListener('pointerdown', go, true);
      window.removeEventListener('keydown', go, true);
      st.armed = false;
      createNative(st, src, tgt);
    };
    window.addEventListener('pointerdown', go, true);
    window.addEventListener('keydown', go, true);
  }

  function createNative(st, src, tgt) {
    if (st.creating) return st.creating;
    const hadActivation = !!(navigator.userActivation && navigator.userActivation.isActive);
    st.creating = (async () => {
      try {
        const translator = await self.Translator.create({
          sourceLanguage: src,
          targetLanguage: tgt,
          monitor(m) {
            m.addEventListener('downloadprogress', (e) => {
              const pct = Math.round((e.loaded || 0) * 100);
              log(`Downloading on-device ${src}->${tgt} model: ${pct}%`);
              reportModelStatus(`Downloading on-device ${src}→${tgt} model: ${pct}%`, pct >= 100);
            });
          },
        });
        st.translator = translator;
        log(`On-device translator ${src}->${tgt} ready.`);
        reportModelStatus(`On-device ${src}→${tgt} translator ready`, true);
        return translator;
      } catch (e) {
        log('Translator.create() failed:', e.name, e.message);
        // Missing user gesture -> try again on the next one. Anything else is final.
        if (e.name === 'NotAllowedError' && !hadActivation) armActivation(st, src, tgt);
        else st.dead = true;
        return null;
      } finally {
        st.creating = null;
      }
    })();
    return st.creating;
  }

  /** Translate with the on-device API. Resolves to null if not usable now. */
  async function nativeTranslate(text, src, tgt) {
    const translator = await getNativeTranslator(src, tgt);
    if (!translator) return null;
    const st = nativeState.get(`${src}>${tgt}`);
    try {
      const out = await translator.translate(text);
      st.failures = 0;
      return out;
    } catch (e) {
      log('On-device translate() failed:', e.message || e);
      if (++st.failures >= 3) { // keep failing -> stop using it for this page
        st.dead = true;
        st.translator = null;
      }
      return null;
    }
  }

  let contextAlive = true;
  async function sendToBackground(msg) {
    if (!contextAlive) return null;
    try {
      return await chrome.runtime.sendMessage(msg);
    } catch (e) {
      if (!chrome.runtime || !chrome.runtime.id) {
        // Extension was reloaded/removed: this old script must go quiet.
        contextAlive = false;
        stop();
      }
      log('Background request failed:', e.message || e);
      return null;
    }
  }

  /** Translate one caption block. Resolves to the translation or null. */
  function translate(text) {
    const src = settings.sourceLang;
    const tgt = settings.targetLang;
    if (src === tgt) return Promise.resolve(text);

    const key = `${src}|${tgt}|${text}`;
    const hit = cacheGet(key);
    if (hit !== undefined) return Promise.resolve(hit);
    if (inflight.has(key)) return inflight.get(key);

    const p = (async () => {
      let out = await nativeTranslate(text, src, tgt);
      let engine = 'on-device';
      if (out == null) {
        const res = await sendToBackground({ type: 'translate', text, source: src, target: tgt });
        if (res && typeof res.text === 'string') {
          out = res.text;
          engine = res.engine;
        } else if (res && res.error) {
          log('Web translation failed:', res.error);
        }
      }
      if (out != null) {
        cacheSet(key, out);
        log(`[${engine}]`, JSON.stringify(text), '→', JSON.stringify(out));
      }
      return out;
    })().finally(() => inflight.delete(key));

    inflight.set(key, p);
    return p;
  }

  // The top frame can use the on-device API even when a cross-origin iframe
  // can't (Permissions-Policy). The background worker relays such requests here.
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (!msg || msg.type !== 'nativeTranslate') return undefined;
    nativeTranslate(msg.text, msg.source, msg.target).then(
      (text) => sendResponse({ text }),
      () => sendResponse({ text: null }),
    );
    return true; // async response
  });

  /* ------------------------------------------------------------------ */
  /* Overlay                                                             */
  /* ------------------------------------------------------------------ */

  let overlay = null;
  let origLine = null;
  let transLine = null;
  let tickTimer = null;

  // What is currently displayed.
  // source: 'dom' | 'track' | null
  let current = { source: null, text: '', translated: null, anchor: null, video: null, showOriginal: false };
  let renderSeq = 0; // bumps on every change; stale translations are dropped

  function ensureOverlay() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'dual-captions-overlay';
      overlay.setAttribute(OWN_ATTR, '');
      overlay.hidden = true;
      origLine = document.createElement('div');
      origLine.className = 'dc-original';
      transLine = document.createElement('div');
      transLine.className = 'dc-translation';
      overlay.append(origLine, transLine);
    }
    // In fullscreen only the fullscreen element's subtree is painted, so the
    // overlay must live inside it.
    const parent = overlayParent();
    if (parent && overlay.parentNode !== parent) parent.appendChild(overlay);
    return overlay;
  }

  function overlayParent() {
    const fs = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs) {
      if (fs.tagName === 'VIDEO') {
        // A bare <video> can't host children; nothing we can draw on top of it.
        log('The <video> element itself is fullscreen; the overlay cannot be shown over it.');
      } else if (fs.tagName !== 'IFRAME') {
        return fs;
      }
    }
    return document.body || document.documentElement;
  }

  function render() {
    const o = ensureOverlay();
    origLine.textContent = current.showOriginal ? current.text : '';
    origLine.hidden = !current.showOriginal;
    transLine.textContent = current.translated || '';
    transLine.hidden = !current.translated;
    o.hidden = !(current.showOriginal || current.translated);
    if (o.hidden) {
      stopTick();
    } else {
      positionOverlay();
      startTick();
    }
  }

  function hideOverlay() {
    renderSeq++; // cancel pending translations
    current = { source: null, text: '', translated: null, anchor: null, video: null, showOriginal: false };
    if (overlay) overlay.hidden = true;
    stopTick();
  }

  /** Put the overlay just below the caption, or at the bottom of the video. */
  function positionOverlay() {
    if (!overlay || overlay.hidden) return;
    ensureOverlay();

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const video = current.video && current.video.isConnected ? current.video : null;
    const vr = video ? video.getBoundingClientRect() : null;

    let anchorRect = null;
    if (current.anchor && current.anchor.isConnected) {
      const r = textRect(current.anchor);
      if (r.width && r.height) anchorRect = r;
    }

    overlay.style.fontSize = `${settings.fontSize}px`;
    overlay.style.maxWidth = `${Math.round((vr && vr.width ? vr.width : vw) * 0.9)}px`;
    const ow = overlay.offsetWidth;
    const oh = overlay.offsetHeight;
    const gap = 4;

    let cx;
    let top;
    if (anchorRect) {
      cx = anchorRect.left + anchorRect.width / 2;
      top = anchorRect.bottom + gap;
      // Not enough room below the caption (inside the video / viewport)? Go above it.
      const limit = Math.min(vh, vr ? vr.bottom : vh);
      if (top + oh > limit) top = anchorRect.top - oh - gap;
    } else if (vr && vr.width) {
      cx = vr.left + vr.width / 2;
      top = vr.bottom - oh - vr.height * 0.06;
    } else {
      cx = vw / 2;
      top = vh - oh - 40;
    }

    const left = Math.max(gap, Math.min(cx - ow / 2, vw - ow - gap));
    top = Math.max(gap, Math.min(top, vh - oh - gap));
    overlay.style.left = `${Math.round(left)}px`;
    overlay.style.top = `${Math.round(top)}px`;
  }

  function startTick() {
    if (!tickTimer) tickTimer = setInterval(tick, TICK_MS);
  }

  function stopTick() {
    clearInterval(tickTimer);
    tickTimer = null;
  }

  /** Periodic check: keep position in sync and hide when the caption is gone. */
  function tick() {
    if (current.source === 'dom') {
      if (!domCaptionActive()) {
        log('Caption disappeared -> hiding translation.');
        hideOverlay();
        return;
      }
      // Catches changes the observer could not see (e.g. text inside shadow DOM).
      if (readText(captionEl) !== current.text) scheduleDomUpdate();
    } else if (current.source === 'track' && current.video && !current.video.isConnected) {
      hideOverlay();
      return;
    }
    positionOverlay();
  }

  /** Translate `text` and display it. opts: {source, anchor, video, showOriginal} */
  async function showTranslation(text, opts) {
    // Same line already shown (or being translated): just make sure it's visible.
    if (current.source === opts.source && current.text === text) {
      current.anchor = opts.anchor;
      current.video = opts.video;
      if (current.translated) render();
      return;
    }

    const seq = ++renderSeq;
    current = { ...opts, text, translated: null };
    // Hide the previous translation right away so it never sits under the
    // wrong line; in "showOriginal" mode the original is shown immediately.
    render();

    const translated = await translate(text);
    if (seq !== renderSeq) return; // a newer caption arrived meanwhile
    if (translated == null) return;
    current.translated = translated;
    render();
  }

  /* ------------------------------------------------------------------ */
  /* DOM caption detection                                               */
  /* ------------------------------------------------------------------ */

  let captionEl = null;     // element currently used as the caption
  let captionVideo = null;  // the <video> it belongs to
  const changeCount = new WeakMap(); // element -> number of distinct texts seen
  const lastSeen = new WeakMap();    // element -> last text seen
  const savedOutline = new WeakMap();
  let domTimer = null;

  /** Videos large enough to carry captions. */
  function getVideos() {
    const out = [];
    for (const v of document.getElementsByTagName('video')) {
      const r = v.getBoundingClientRect();
      if (r.width >= 160 && r.height >= 90) out.push(v);
    }
    return out;
  }

  /** Which video (if any) has this text box in its lower part. */
  function videoForRect(rect, videos) {
    for (const v of videos) {
      const vr = v.getBoundingClientRect();
      const overlapX = Math.min(rect.right, vr.right) - Math.max(rect.left, vr.left);
      if (overlapX < Math.min(rect.width, vr.width) * 0.5) continue;
      if (rect.height > vr.height * 0.4) continue; // too tall to be a caption
      const cy = rect.top + rect.height / 2;
      if (cy < vr.top + vr.height * 0.45) continue; // upper half -> not a caption
      if (cy > vr.bottom + vr.height * 0.1) continue; // far below the video
      return v;
    }
    return null;
  }

  /**
   * Is the element (or one of its 3 nearest ancestors) a control, e.g. the
   * text of a "Skip intro" button? Only a few levels are checked because some
   * players wrap the whole player in role="button" or a link.
   */
  function insideControl(el) {
    for (let e = el, i = 0; e && i < 4; e = e.parentElement, i++) {
      if (e.matches(INTERACTIVE)) return true;
    }
    return false;
  }

  /** Does this element look like a caption? Returns {el, video, text} or null. */
  function captionCheck(el, videos) {
    if (SKIP_TAGS.has(el.tagName.toUpperCase()) || isOwn(el)) return null;
    if (el.getElementsByTagName('video').length) return null; // a player wrapper
    if (insideControl(el) || el.querySelector(INTERACTIVE)) return null; // controls
    if (!isVisible(el)) return null;
    const text = readText(el);
    if (!text || text.length > MAX_CAPTION_CHARS || !looksLikeSource(text)) return null;
    const rect = textRect(el);
    if (!rect.width || !rect.height) return null;
    const video = videoForRect(rect, videos);
    return video ? { el, video, text } : null;
  }

  /**
   * From a changed node, find the caption "root": the highest ancestor that
   * still looks like a caption (so multi-line captions are read as one block).
   */
  function findCaptionRoot(node, videos) {
    const el = node.nodeType === 1 ? node : node.parentElement;
    if (!el || el === document.body || el === document.documentElement) return null;
    const tc = el.textContent;
    if (!tc || tc.length > MAX_CAPTION_CHARS * 2 || !/\p{L}/u.test(tc)) return null; // cheap pre-filter

    let best = captionCheck(el, videos);
    if (!best) return null;
    for (let i = 0; i < 4; i++) {
      const p = best.el.parentElement;
      if (!p || p === document.body || p === document.documentElement) break;
      const r = captionCheck(p, videos);
      if (!r || r.video !== best.video) break;
      best = r;
    }
    return best;
  }

  function domCaptionActive() {
    return !!(captionEl && captionEl.isConnected && isVisible(captionEl) && readText(captionEl));
  }

  function setCaptionEl(el, video) {
    if (captionEl === el) return;
    clearDebugOutline();
    captionEl = el;
    captionVideo = video || null;
    if (el) {
      log('Caption element detected:', describe(el), el, '| text:', JSON.stringify(readText(el)));
      applyDebugOutline();
    } else {
      log('Caption element lost.');
    }
  }

  // In debug mode the detected caption gets a dashed green outline.
  function applyDebugOutline() {
    if (!settings.debug || !captionEl) return;
    if (!savedOutline.has(captionEl)) savedOutline.set(captionEl, captionEl.style.outline);
    captionEl.style.outline = '2px dashed #4caf50';
  }

  function clearDebugOutline() {
    if (captionEl && savedOutline.has(captionEl)) {
      captionEl.style.outline = savedOutline.get(captionEl);
      savedOutline.delete(captionEl);
    }
  }

  function scheduleDomUpdate() {
    clearTimeout(domTimer);
    domTimer = setTimeout(updateFromDom, DOM_DEBOUNCE_MS);
  }

  /** Read the detected caption element and show its translation. */
  function updateFromDom() {
    if (!settings.enabled) return;
    if (!domCaptionActive()) {
      if (current.source === 'dom') hideOverlay();
      return;
    }
    const text = readText(captionEl);
    if (text.length > MAX_CAPTION_CHARS || !looksLikeSource(text)) {
      if (current.source === 'dom') hideOverlay();
      return;
    }
    showTranslation(text, { source: 'dom', anchor: captionEl, video: captionVideo, showOriginal: false });
  }

  function onMutations(mutations) {
    if (!settings.enabled) return;

    let touched = false;      // the current caption element changed
    const targets = new Set(); // other changed elements to evaluate

    for (const m of mutations) {
      const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
      if (!t || isOwn(t)) continue;
      if (captionEl && (captionEl.contains(t) || t.contains(captionEl))) {
        touched = true;
      } else {
        targets.add(t);
      }
      if (m.type === 'childList') {
        for (const n of m.addedNodes) {
          if (n.nodeType === 1 && !isOwn(n)) targets.add(n);
        }
      }
    }

    if (captionEl && !captionEl.isConnected) {
      setCaptionEl(null);
      touched = true;
    }

    const videos = getVideos();
    if (videos.length) {
      // Look for (new) caption candidates among the changed elements.
      let best = null;
      let bestCount = -1;
      let checked = 0;
      for (const t of targets) {
        if (++checked > 40) break; // protect against huge DOM rebuilds
        const res = findCaptionRoot(t, videos);
        if (!res) continue;
        if (lastSeen.get(res.el) !== res.text) {
          lastSeen.set(res.el, res.text);
          changeCount.set(res.el, (changeCount.get(res.el) || 0) + 1);
        }
        const count = changeCount.get(res.el);
        if (count > bestCount) {
          best = res;
          bestCount = count;
        }
      }

      // Switch to the new candidate if we have none, ours went quiet, or the
      // candidate has changed at least as often (captions change a lot,
      // static labels don't).
      if (best && best.el !== captionEl) {
        const curCount = captionEl ? changeCount.get(captionEl) || 0 : -1;
        if (!captionEl || !domCaptionActive() || bestCount >= curCount) {
          setCaptionEl(best.el, best.video);
          touched = true;
        } else {
          log('Ignored caption-like candidate:', describe(best.el), JSON.stringify(best.text));
        }
      }
    }

    if (touched) scheduleDomUpdate();
  }

  const observer = new MutationObserver(onMutations);

  /* ------------------------------------------------------------------ */
  /* Native <track> captions                                             */
  /* ------------------------------------------------------------------ */

  const boundVideos = new WeakSet();
  const boundTracks = new WeakSet();
  const hijacked = new Set();          // tracks we switched from "showing" to "hidden"
  const fightCount = new WeakMap();    // track -> times the page re-enabled it
  const gaveUp = new WeakSet();        // tracks the page keeps re-showing

  function trackLangOk(track) {
    const lang = (track.language || '').toLowerCase();
    return !lang || lang.startsWith(settings.sourceLang);
  }

  function scanVideos() {
    for (const v of document.getElementsByTagName('video')) bindVideo(v);
  }

  function bindVideo(video) {
    if (boundVideos.has(video) || !video.textTracks) return;
    boundVideos.add(video);
    const list = video.textTracks;
    const refresh = () => {
      for (const t of list) bindTrack(t, video);
    };
    list.addEventListener('addtrack', refresh);
    list.addEventListener('change', refresh); // user picked another track
    refresh();
  }

  function bindTrack(track, video) {
    if (track.kind !== 'subtitles' && track.kind !== 'captions') return;
    if (!boundTracks.has(track)) {
      boundTracks.add(track);
      track.addEventListener('cuechange', () => onCueChange(track, video));
    }
    if (!settings.enabled || track.mode !== 'showing' || !trackLangOk(track) || gaveUp.has(track)) return;

    // Hide the browser's own rendering and draw original + translation ourselves.
    if (hijacked.has(track)) {
      const n = (fightCount.get(track) || 0) + 1; // the page turned it back on
      fightCount.set(track, n);
      if (n > 3) {
        log('Page keeps re-showing native track; leaving it alone:', track.label || track.language);
        gaveUp.add(track);
        hijacked.delete(track);
        return;
      }
    }
    track.mode = 'hidden';
    hijacked.add(track);
    log('Native text track detected and set to "hidden":', track.label || '(no label)', track.language || '');
    onCueChange(track, video);
  }

  /** Plain text of the active cues (VTT tags stripped). */
  function cueText(track) {
    const cues = track.activeCues;
    if (!cues || !cues.length) return '';
    const lines = [];
    for (const c of cues) {
      const raw = typeof c.text === 'string' ? c.text : '';
      const plain = raw
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');
      lines.push(plain);
    }
    return lines.join('\n').split('\n').map((s) => s.trim()).filter(Boolean).join('\n');
  }

  function onCueChange(track, video) {
    if (!settings.enabled || track.mode === 'disabled' || !trackLangOk(track)) return;

    if (hijacked.has(track)) {
      applyTrackText(cueText(track), video, true);
      return;
    }
    // A track the page/player manages itself (mode "hidden", or "showing" that
    // we gave up on). If the player renders it in the DOM, DOM detection
    // handles it; give that a moment and only fall back to the cue text.
    setTimeout(() => {
      if (domCaptionActive()) return;
      applyTrackText(cueText(track), video, false);
    }, 200);
  }

  function applyTrackText(text, video, showOriginal) {
    if (!text || !looksLikeSource(text)) {
      if (current.source === 'track') hideOverlay();
      return;
    }
    showTranslation(text, { source: 'track', anchor: null, video, showOriginal });
  }

  function restoreTracks() {
    for (const t of hijacked) {
      try { t.mode = 'showing'; } catch { /* track gone */ }
    }
    hijacked.clear();
  }

  /* ------------------------------------------------------------------ */
  /* Start / stop                                                        */
  /* ------------------------------------------------------------------ */

  let running = false;
  let scanTimer = null;

  function start() {
    if (running || !contextAlive) return;
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', start, { once: true });
      return;
    }
    running = true;
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    scanVideos();
    scanTimer = setInterval(scanVideos, VIDEO_SCAN_MS);
    log('Started.');
  }

  function stop() {
    if (!running) return;
    running = false;
    observer.disconnect();
    clearInterval(scanTimer);
    clearTimeout(domTimer);
    hideOverlay();
    restoreTracks();
    setCaptionEl(null);
    log('Stopped.');
  }

  // Keep the overlay in place when the layout changes.
  const reposition = () => { if (overlay && !overlay.hidden) positionOverlay(); };
  window.addEventListener('resize', reposition, { passive: true });
  window.addEventListener('scroll', reposition, { passive: true, capture: true });
  document.addEventListener('fullscreenchange', reposition);
  document.addEventListener('webkitfullscreenchange', reposition);

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'sync') return;
    for (const [k, { newValue }] of Object.entries(changes)) {
      if (k in DEFAULTS) settings[k] = newValue === undefined ? DEFAULTS[k] : newValue;
    }

    if ('debug' in changes) {
      if (settings.debug) applyDebugOutline(); else clearDebugOutline();
    }
    if ('enabled' in changes) {
      if (settings.enabled) start(); else stop();
      return;
    }
    if ('sourceLang' in changes || 'targetLang' in changes) {
      // Re-translate the current line with the new languages.
      hideOverlay();
      restoreTracks();
      if (captionEl) scheduleDomUpdate();
      return;
    }
    if ('fontSize' in changes) reposition();
  });

  chrome.storage.sync.get(DEFAULTS, (stored) => {
    settings = { ...DEFAULTS, ...stored };
    if (settings.enabled) start();
  });
})();
