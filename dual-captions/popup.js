/*
 * Dual Captions – popup.
 * Reads/writes settings in chrome.storage.sync; content scripts react to the
 * changes live. Also shows (and can start) the on-device model download.
 */
'use strict';

const DEFAULTS = {
  enabled: true,
  sourceLang: 'en',
  targetLang: 'fr',
  fontSize: 22,
  debug: false,
};

const LANGUAGES = [
  ['en', 'English'], ['fr', 'French'], ['es', 'Spanish'], ['de', 'German'],
  ['it', 'Italian'], ['pt', 'Portuguese'], ['nl', 'Dutch'], ['pl', 'Polish'],
  ['tr', 'Turkish'], ['ru', 'Russian'], ['uk', 'Ukrainian'], ['ar', 'Arabic'],
  ['hi', 'Hindi'], ['ja', 'Japanese'], ['ko', 'Korean'], ['zh', 'Chinese'],
];

const $ = (id) => document.getElementById(id);
const els = {
  enabled: $('enabled'),
  sourceLang: $('sourceLang'),
  targetLang: $('targetLang'),
  fontSize: $('fontSize'),
  fontSizeValue: $('fontSizeValue'),
  debug: $('debug'),
  status: $('status'),
  download: $('download'),
  modelStatus: $('model-status'),
};

// Fill both language dropdowns.
for (const select of [els.sourceLang, els.targetLang]) {
  for (const [code, name] of LANGUAGES) select.add(new Option(name, code));
}

function save(values) {
  chrome.storage.sync.set(values);
}

/* ---- Load settings into the UI ---- */
chrome.storage.sync.get(DEFAULTS, (s) => {
  els.enabled.checked = s.enabled;
  els.sourceLang.value = s.sourceLang;
  els.targetLang.value = s.targetLang;
  els.fontSize.value = s.fontSize;
  els.fontSizeValue.textContent = s.fontSize;
  els.debug.checked = s.debug;
  checkOnDevice();
});

/* ---- Save on change ---- */
els.enabled.addEventListener('change', () => save({ enabled: els.enabled.checked }));
els.debug.addEventListener('change', () => save({ debug: els.debug.checked }));
for (const key of ['sourceLang', 'targetLang']) {
  els[key].addEventListener('change', () => {
    save({ [key]: els[key].value });
    checkOnDevice();
  });
}

// The slider fires many events; storage.sync has a write quota, so debounce.
let fontTimer = null;
els.fontSize.addEventListener('input', () => {
  els.fontSizeValue.textContent = els.fontSize.value;
  clearTimeout(fontTimer);
  fontTimer = setTimeout(() => save({ fontSize: Number(els.fontSize.value) }), 150);
});

/* ---- On-device Translator status ---- */
async function checkOnDevice() {
  const src = els.sourceLang.value;
  const tgt = els.targetLang.value;
  els.download.hidden = true;

  if (src === tgt) {
    els.status.textContent = 'Source and target are the same language.';
    return;
  }
  if (typeof self.Translator === 'undefined') {
    els.status.textContent = 'On-device translator not available in this Chrome; using web translation.';
    return;
  }
  try {
    const a = await self.Translator.availability({ sourceLanguage: src, targetLanguage: tgt });
    const text = {
      available: 'On-device translator ready ✓',
      downloadable: 'On-device model not downloaded yet (web translation is used meanwhile).',
      downloading: 'On-device model is downloading…',
      unavailable: 'On-device translator does not support this pair; using web translation.',
    };
    els.status.textContent = text[a] || `On-device translator: ${a}`;
    els.download.hidden = !(a === 'downloadable' || a === 'downloading');
  } catch (e) {
    els.status.textContent = `On-device translator error: ${e.message}`;
  }
}

// Clicking the button is the user gesture Chrome needs to start the download.
els.download.addEventListener('click', async () => {
  const src = els.sourceLang.value;
  const tgt = els.targetLang.value;
  els.download.disabled = true;
  els.status.textContent = 'Starting download…';
  try {
    const translator = await self.Translator.create({
      sourceLanguage: src,
      targetLanguage: tgt,
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          els.status.textContent = `Downloading model: ${Math.round((e.loaded || 0) * 100)}%`;
        });
      },
    });
    translator.destroy?.();
    await checkOnDevice();
  } catch (e) {
    els.status.textContent = `Download failed: ${e.message}`;
  } finally {
    els.download.disabled = false;
  }
});

/* ---- Model status reported by content scripts ---- */
function showModelStatus(ms) {
  els.modelStatus.textContent = ms && Date.now() - ms.ts < 10 * 60 * 1000 ? `Page: ${ms.text}` : '';
}
chrome.storage.local.get('modelStatus', (r) => showModelStatus(r.modelStatus));
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.modelStatus) showModelStatus(changes.modelStatus.newValue);
});
