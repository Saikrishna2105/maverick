# Dual Captions

A Chrome extension (Manifest V3) that shows a translation of each caption
line right below the original caption on any video site. By default it
translates English captions into French.

- Finds captions automatically, with no selectors written for a specific site.
  It also works when the player is inside an iframe and in fullscreen.
- Uses Chrome's built-in on-device **Translator API** first. If that is not
  available, it uses free web translation that needs no API key.
- The popup has an ON/OFF switch, source and target language menus, a font
  size slider, and a debug mode.

## Install (load unpacked)

1. Open `chrome://extensions` in Chrome.
2. Turn on **Developer mode** (top-right switch).
3. Click **Load unpacked** and select this `dual-captions` folder.
4. Optional: pin the extension from the puzzle-piece menu so the popup is easy to reach.
5. **Reload any video tab that was already open.** Chrome only injects the
   extension into pages loaded after you install it.

After you edit the code, click the reload icon on the extension's card in
`chrome://extensions`, then reload the video page.

## Use

1. Start a video and turn on English captions in the player.
2. The French line appears under each English line and disappears when the
   English caption disappears.
3. Use the popup to turn translation off and on, change languages, or change
   the font size. Changes apply right away.

### On-device translation (recommended)

Chrome 138+ includes an on-device translator. Its language model has to be
downloaded once, and Chrome only starts the download after a click.
Open the popup and click **Download on-device model** if the button is shown.
Until then the extension uses the web fallback, so captions still work.

When the player is in a cross-origin iframe (common on streaming sites), the
iframe is not allowed to use the on-device API. The extension then sends the
request to the top-level page, which can use it.

### Web fallback

If the on-device API can't be used, the background worker calls
`translate.googleapis.com` (the free "gtx" endpoint). If that fails or is
rate-limited, it calls `api.mymemory.translated.net`. Requests are cached,
spaced at least 150 ms apart, and a provider that returns a rate-limit error
is paused, with the pause growing from 5 s up to 5 min.
Neither service needs an account or a key.

## Debug mode (fix detection on NetMirror or other sites)

1. Turn on **Debug mode** in the popup.
2. On the video page, open DevTools (F12) and go to **Console**. Logs from
   iframes are listed there too. Filter by `DualCaptions`.
3. You will see lines such as:
   - `Caption element detected: div.player > div.jw-captions ...` shows the
     element the extension uses as the caption. It also gets a green dashed
     outline on the page.
   - `[google] "Hello" → "Bonjour"` shows each translation and which engine
     produced it (`on-device`, `on-device (top frame)`, `google`, `mymemory`).
   - `Native text track detected ...` means the captions come from a `<track>` element.
   - `Ignored caption-like candidate: ...` means other text near the bottom
     of the video was rejected.
4. If the wrong element is outlined, or nothing is detected, send me these log
   lines and the caption element's HTML (right-click the caption, choose
   Inspect, then copy the element).

## How detection works

- A `MutationObserver` on `document.body` (childList, subtree, characterData)
  checks every changed element. An element counts as a caption when:
  - it is visible,
  - its text is short and written in the source language's script,
  - it is not inside player controls (buttons, sliders, menus),
  - its text sits in the lower part of a `<video>` element on the page.
- From the changed node, the extension walks up to the largest ancestor that
  still passes these checks, so a two-line caption is read as one block.
- Elements whose text changes often are preferred over static labels.
- Native `<track>` captions: when a captions or subtitles track is
  **showing**, the extension switches it to `hidden` and listens to
  `cuechange`. It then draws both the original line and the translation
  itself. When you turn the extension off, the track is set back to
  `showing`. Tracks the player already keeps `hidden` are only used if no
  caption is found in the page.
- The overlay goes right below the caption. If there is no room inside the
  video, it goes right above the caption. If the caption's position is
  unknown, it goes at the bottom of the video. In fullscreen it is placed
  inside the fullscreen element so it stays visible.

## Known limitations

- Captions drawn on a `<canvas>`, or inside a closed shadow root, can't be read.
- If a site puts the bare `<video>` element itself in fullscreen (not its
  container), nothing can be drawn over it. Most players fullscreen a
  container, so this is rare.
- The language check only looks at the script (Latin, Cyrillic, and so on).
  For Latin-script languages it can't tell English from Spanish.

## Files

| File | Purpose |
| --- | --- |
| `manifest.json` | MV3 manifest: content script in all frames, background worker, popup |
| `content.js` | Caption detection, on-device translation, overlay |
| `background.js` | Web translation fallback, cache, rate limiting, top-frame relay |
| `popup.html` / `popup.js` | Settings UI |
| `styles.css` | Overlay styles |
