import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Procedural car bodies built by lofting rounded cross-sections along the car.
// Every type is described by side-profile keyframes [z, value] (metres).
// ---------------------------------------------------------------------------

const TYPES = {
  gt: { L: 4.5, n: 5, tumble: 0.2,
    top: [[-2.25, 0.78], [-2.12, 0.93], [-1.6, 0.99], [-0.9, 0.98], [0.6, 0.9], [1.35, 0.82], [1.95, 0.7], [2.25, 0.52]],
    bottom: [[-2.25, 0.34], [-1.95, 0.2], [1.95, 0.16], [2.25, 0.26]],
    width: [[-2.25, 0.76], [-2.05, 0.92], [-1.35, 1.0], [-0.5, 0.95], [0.6, 0.95], [1.35, 0.98], [1.95, 0.9], [2.25, 0.7]],
    cabin: { zf: 0.72, zf2: -0.02, zr2: -0.68, zr: -1.78, roof: 1.23, cw: 0.83, ct: 0.68 },
    wheels: { zf: 1.38, zr: -1.33, r: 0.345, tw: 0.27, track: 0.81, arch: 0.43 }, wing: 'lip', rim: 7 },
  super: { L: 4.6, n: 6, tumble: 0.24,
    top: [[-2.3, 0.8], [-2.15, 0.95], [-1.4, 0.98], [-0.6, 0.93], [0.8, 0.8], [1.6, 0.68], [2.05, 0.6], [2.3, 0.44]],
    bottom: [[-2.3, 0.32], [-2.0, 0.17], [2.0, 0.13], [2.3, 0.2]],
    width: [[-2.3, 0.82], [-2.05, 0.97], [-1.3, 1.03], [-0.4, 0.96], [0.6, 0.96], [1.4, 1.0], [2.0, 0.9], [2.3, 0.7]],
    cabin: { zf: 1.05, zf2: 0.18, zr2: -0.48, zr: -1.45, roof: 1.13, cw: 0.8, ct: 0.62 },
    wheels: { zf: 1.48, zr: -1.38, r: 0.35, tw: 0.3, track: 0.84, arch: 0.44 }, wing: 'big', rim: 10 },
  muscle: { L: 4.8, n: 8, tumble: 0.1,
    top: [[-2.4, 0.86], [-2.3, 0.98], [-1.5, 1.0], [-0.8, 1.0], [0.4, 0.96], [1.6, 0.94], [2.2, 0.88], [2.4, 0.7]],
    bottom: [[-2.4, 0.36], [-2.1, 0.22], [2.1, 0.2], [2.4, 0.3]],
    width: [[-2.4, 0.86], [-2.2, 0.95], [-1.4, 0.99], [0, 0.95], [1.4, 0.97], [2.2, 0.93], [2.4, 0.85]],
    cabin: { zf: 0.35, zf2: -0.3, zr2: -0.92, zr: -1.55, roof: 1.33, cw: 0.84, ct: 0.72 },
    wheels: { zf: 1.5, zr: -1.4, r: 0.35, tw: 0.3, track: 0.82, arch: 0.44 }, wing: 'duck', scoop: true, rim: 5 },
  tuner: { L: 4.4, n: 5, tumble: 0.16,
    top: [[-2.2, 0.85], [-2.1, 0.98], [-1.7, 1.0], [-0.8, 0.98], [0.6, 0.92], [1.4, 0.85], [1.95, 0.76], [2.2, 0.6]],
    bottom: [[-2.2, 0.34], [-1.95, 0.2], [1.95, 0.18], [2.2, 0.26]],
    width: [[-2.2, 0.78], [-2.0, 0.9], [-1.3, 0.94], [0, 0.9], [1.3, 0.93], [1.95, 0.87], [2.2, 0.72]],
    cabin: { zf: 0.78, zf2: 0.05, zr2: -0.85, zr: -1.88, roof: 1.36, cw: 0.83, ct: 0.7 },
    wheels: { zf: 1.33, zr: -1.3, r: 0.34, tw: 0.25, track: 0.78, arch: 0.42 }, wing: 'big', rim: 6 },
  sedan: { L: 4.7, n: 5, tumble: 0.14,
    top: [[-2.35, 0.86], [-2.25, 0.98], [-1.6, 1.02], [-1.2, 1.0], [0.8, 0.95], [1.5, 0.9], [2.1, 0.82], [2.35, 0.66]],
    bottom: [[-2.35, 0.38], [-2.1, 0.26], [2.1, 0.24], [2.35, 0.32]],
    width: [[-2.35, 0.78], [-2.15, 0.9], [-1.2, 0.93], [0, 0.92], [1.2, 0.92], [2.1, 0.86], [2.35, 0.72]],
    cabin: { zf: 0.85, zf2: 0.12, zr2: -0.85, zr: -1.5, roof: 1.46, cw: 0.84, ct: 0.72 },
    wheels: { zf: 1.42, zr: -1.4, r: 0.33, tw: 0.22, track: 0.78, arch: 0.41 }, rim: 5 },
  hatch: { L: 4.15, n: 5, tumble: 0.12,
    top: [[-2.07, 0.9], [-2.0, 1.02], [-1.6, 1.03], [0.8, 0.97], [1.5, 0.9], [1.9, 0.82], [2.07, 0.68]],
    bottom: [[-2.07, 0.38], [-1.85, 0.25], [1.85, 0.24], [2.07, 0.32]],
    width: [[-2.07, 0.76], [-1.9, 0.86], [0, 0.88], [1.6, 0.86], [2.07, 0.72]],
    cabin: { zf: 0.9, zf2: 0.28, zr2: -1.45, zr: -2.02, roof: 1.5, cw: 0.85, ct: 0.74 },
    wheels: { zf: 1.28, zr: -1.3, r: 0.31, tw: 0.2, track: 0.75, arch: 0.39 }, rim: 4 },
  suv: { L: 4.7, n: 6, tumble: 0.1,
    top: [[-2.35, 1.0], [-2.28, 1.14], [-1.5, 1.16], [0.8, 1.12], [1.6, 1.06], [2.15, 0.98], [2.35, 0.82]],
    bottom: [[-2.35, 0.5], [-2.05, 0.38], [2.05, 0.38], [2.35, 0.48]],
    width: [[-2.35, 0.84], [-2.15, 0.95], [0, 0.96], [1.8, 0.94], [2.35, 0.8]],
    cabin: { zf: 0.95, zf2: 0.35, zr2: -1.95, zr: -2.3, roof: 1.78, cw: 0.88, ct: 0.8 },
    wheels: { zf: 1.45, zr: -1.42, r: 0.38, tw: 0.25, track: 0.82, arch: 0.47 }, rim: 6 },
};
TYPES.police = { ...TYPES.sedan, lightbar: true, livery: true, rim: 5 };
export const CAR_TYPES = TYPES;

// cosine-smoothed keyframe interpolation
function interp(keys, z) {
  if (z <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (z <= keys[i][0]) {
      const t = (z - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]);
      const s = (1 - Math.cos(Math.PI * t)) / 2;
      return keys[i - 1][1] + (keys[i][1] - keys[i - 1][1]) * s;
    }
  }
  return keys[keys.length - 1][1];
}
const spow = (v, e) => Math.sign(v) * Math.pow(Math.abs(v), e);

/** Lofts rings (arrays of [x,y]) placed at z stations into a smooth mesh with UVs (u = along, v = around). */
function loft(zs, ringAt, M, { closed = true, caps = true } = {}) {
  const pos = [], uv = [], idx = [];
  const K = zs.length;
  const z0 = zs[0], z1 = zs[K - 1];
  const rings = zs.map((z) => ringAt(z));
  for (let i = 0; i < K; i++) for (let j = 0; j < M; j++) {
    pos.push(rings[i][j][0], rings[i][j][1], zs[i]);
    uv.push((zs[i] - z0) / (z1 - z0 || 1), j / (closed ? M : M - 1));
  }
  const segs = closed ? M : M - 1;
  for (let i = 0; i < K - 1; i++) for (let j = 0; j < segs; j++) {
    const a = i * M + j, b = i * M + ((j + 1) % M), c = (i + 1) * M + j, d = (i + 1) * M + ((j + 1) % M);
    idx.push(a, b, c, b, d, c);
  }
  if (caps && closed) {
    for (const [ri, dir] of [[0, -1], [K - 1, 1]]) {
      const base = pos.length / 3;
      let cx = 0, cy = 0;
      for (let j = 0; j < M; j++) { cx += rings[ri][j][0]; cy += rings[ri][j][1]; }
      for (let j = 0; j < M; j++) { pos.push(rings[ri][j][0], rings[ri][j][1], zs[ri]); uv.push(0.5, 0.5); }
      pos.push(cx / M, cy / M, zs[ri] + dir * 0.0); uv.push(0.5, 0.5);
      const c = base + M;
      for (let j = 0; j < M; j++) {
        const a = base + j, b = base + ((j + 1) % M);
        if (dir > 0) idx.push(a, c, b); else idx.push(a, b, c);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // make sure normals face outward: the top-most vertex should point up
  const p = g.attributes.position, n = g.attributes.normal;
  let top = 0;
  for (let i = 0; i < p.count; i++) if (p.getY(i) > p.getY(top)) top = i;
  if (n.getY(top) < 0) {
    for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
    g.setIndex(idx); g.computeVertexNormals();
  }
  return g;
}

function stations(z0, z1, n, ends = 0.18) {
  // denser near the ends for rounded nose/tail
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const s = t < ends ? Math.sin((t / ends) * Math.PI / 2) * ends : t;
    out.push(z0 + (z1 - z0) * (i === n ? 1 : s));
  }
  // also refine the far end symmetrically
  const res = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    let s;
    if (t < ends) s = (1 - Math.cos((t / ends) * Math.PI / 2)) * ends;
    else if (t > 1 - ends) s = 1 - (1 - Math.cos(((1 - t) / ends) * Math.PI / 2)) * ends;
    else s = t;
    res.push(z0 + (z1 - z0) * s);
  }
  return res;
}

function box(w, h, d, x, y, z, rx = 0, ry = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rx) g.rotateX(rx);
  if (ry) g.rotateY(ry);
  g.translate(x, y, z);
  return g;
}

/** Builds all geometry pieces for a car type (cached). */
const cache = new Map();
export function carParts(typeName, lo = false) {
  const key = typeName + (lo ? ':lo' : '');
  if (cache.has(key)) return cache.get(key);
  const T = TYPES[typeName];
  const H = T.L / 2;
  const W = T.wheels;
  const M = lo ? 14 : 30;

  // ---------- body ----------
  const bodyRing = (z) => {
    const y1 = interp(T.top, z);
    let y0 = interp(T.bottom, z);
    for (const zc of [W.zf, W.zr]) {
      const dz = z - zc;
      if (Math.abs(dz) < W.arch) y0 = Math.max(y0, W.r + Math.sqrt(W.arch * W.arch - dz * dz) * 0.93);
    }
    y0 = Math.min(y0, y1 - 0.13);
    let w = interp(T.width, z);
    // rounded nose and tail
    const e = Math.max(0, Math.abs(z) - (H - 0.12)) / 0.12;
    w *= 1 - 0.18 * e * e;
    const yc = (y0 + y1) / 2, hh = (y1 - y0) / 2;
    const ring = [];
    for (let j = 0; j < M; j++) {
      const th = (j / M) * Math.PI * 2 - Math.PI / 2;
      const c = Math.cos(th), s = Math.sin(th);
      const nn = s < 0 ? 10 : T.n;
      const yN = spow(s, 2 / nn);
      let x = w * spow(c, 2 / nn);
      x *= 1 - T.tumble * Math.pow(Math.max(0, yN), 2);
      ring.push([x, yc + hh * yN]);
    }
    return ring;
  };
  const body = loft(stations(-H, H, lo ? 20 : 64), bodyRing, M);

  // ---------- cabin (glass) and roof ----------
  const C = T.cabin;
  const cabTop = [[C.zr, 0], [C.zr2, 1], [C.zf2, 1], [C.zf, 0]];
  const cabinRing = (z, inflate = 0, from = 0, to = 1) => {
    const yb = interp(T.top, z) - 0.03;
    const k = interp(cabTop, z);
    const yt = yb + (C.roof - yb) * k;
    const wb = interp(T.width, z) * C.cw, wt = wb * C.ct / C.cw * 0.98;
    const ring = [];
    const n = 4;
    const cnt = from === 0 && to === 1 ? M : (lo ? 5 : 12);
    for (let j = 0; j < cnt; j++) {
      const u = from === 0 && to === 1 ? j / M : from + (to - from) * (j / (cnt - 1));
      const th = u * Math.PI * 2 - Math.PI / 2;
      const c = Math.cos(th), s = Math.sin(th);
      const yN = spow(s, 2 / n);
      const up = Math.max(0, yN);
      const x = spow(c, 2 / n) * (wb + (wt - wb) * up) * (1 + inflate);
      const y = yN > 0 ? yb + (yt - yb) * yN : yb + yN * 0.05;
      ring.push([x, y + inflate * 0.6]);
    }
    return ring;
  };
  const glass = loft(stations(C.zr, C.zf, lo ? 10 : 40, 0.1), (z) => cabinRing(z), M);
  const roof = loft(stations(C.zr2 + 0.02, C.zf2 - 0.02, lo ? 2 : 12, 0.01), (z) => cabinRing(z, 0.012, 0.36, 0.64), lo ? 5 : 12, { closed: false, caps: false });

  // ---------- trim, chrome, extras ----------
  const trim = [], chrome = [], paintExtra = [];
  const wF = interp(T.width, H - 0.05);
  const noseY = interp(T.top, H - 0.05);
  // front grille / intake and rear diffuser
  trim.push(box(wF * 1.1, Math.max(0.08, noseY - 0.3) * 0.55, 0.1, 0, 0.3 + (noseY - 0.3) * 0.3, H - 0.1));
  trim.push(box(interp(T.width, -H + 0.1) * 1.5, 0.12, 0.2, 0, interp(T.bottom, -H + 0.2) + 0.06, -H + 0.1));
  // side skirts
  for (const s of [-1, 1]) {
    const len = (W.zf - W.arch) - (W.zr + W.arch);
    const zc = (W.zf - W.arch + W.zr + W.arch) / 2;
    const wx = interp(T.width, zc) * 0.97;
    trim.push(box(0.06, 0.1, len, s * wx, interp(T.bottom, zc) + 0.07, zc));
    // mirrors
    const mz = C.zf - 0.15, my = interp(T.top, mz) + 0.07, mx = interp(T.width, mz) * (1 - T.tumble) + 0.1;
    paintExtra.push(box(0.17, 0.1, 0.12, s * mx, my, mz));
    trim.push(box(0.14, 0.03, 0.05, s * (mx - 0.1), my - 0.03, mz));
    // exhaust tips
    const ex = interp(T.width, -H) * 0.55;
    const tip = new THREE.CylinderGeometry(0.05, 0.05, 0.16, 12); tip.rotateX(Math.PI / 2); tip.translate(s * ex, interp(T.bottom, -H + 0.2) + 0.05, -H - 0.02);
    chrome.push(tip);
  }
  // underbody to hide the inside of the wheel arches
  const ubLen = (W.zf - W.zr) + W.arch * 1.4;
  const ub = new THREE.BoxGeometry((W.track - W.tw / 2 - 0.05) * 2, 0.34, ubLen); ub.translate(0, 0.27 + 0.17 + 0.05, (W.zf + W.zr) / 2);
  trim.push(ub);
  // wings
  const deckZ = -H + 0.25, deckY = interp(T.top, deckZ);
  const ww = interp(T.width, deckZ) * 1.8;
  if (T.wing === 'lip') paintExtra.push(box(ww * 0.9, 0.04, 0.16, 0, deckY + 0.03, deckZ - 0.05, -0.15));
  if (T.wing === 'duck') paintExtra.push(box(ww * 0.95, 0.07, 0.22, 0, deckY + 0.04, deckZ, -0.25));
  if (T.wing === 'big') {
    paintExtra.push(box(ww * 0.98, 0.04, 0.34, 0, deckY + 0.32, deckZ - 0.05, -0.08));
    for (const s of [-1, 1]) trim.push(box(0.04, 0.3, 0.16, s * ww * 0.3, deckY + 0.16, deckZ));
    for (const s of [-1, 1]) paintExtra.push(box(0.03, 0.14, 0.38, s * ww * 0.49, deckY + 0.34, deckZ - 0.05));
  }
  if (T.scoop) { const sz = 0.9, sy = interp(T.top, sz); paintExtra.push(box(0.6, 0.12, 0.8, 0, sy + 0.04, sz)); trim.push(box(0.48, 0.07, 0.04, 0, sy + 0.06, sz + 0.41)); }
  if (T.lightbar) trim.push(box(1.1, 0.08, 0.26, 0, C.roof + 0.05, (C.zf2 + C.zr2) / 2));

  // ---------- lamps: [w, h, d, x, y, z, rx, kind] kind: head, tail, ind, rev, bar ----------
  const lamps = [];
  const hz = H - 0.22, hy = interp(T.top, hz) - 0.06;
  const hw = interp(T.width, hz);
  const slope = Math.atan2(interp(T.top, hz - 0.2) - interp(T.top, hz + 0.1), 0.3);
  for (const s of [-1, 1]) {
    lamps.push([0.4, 0.035, 0.22, s * hw * 0.6, hy + 0.02, hz, slope, 'head']);
    lamps.push([0.08, 0.03, 0.1, s * hw * 0.86, hy + 0.01, hz - 0.08, slope, s > 0 ? 'indL' : 'indR']);
    const tz = -H + 0.04, ty = interp(T.top, -H + 0.12) - 0.09, tw = interp(T.width, -H + 0.12);
    lamps.push([tw * 0.62, 0.06, 0.06, s * tw * 0.42, ty, tz, 0, 'tail']);
    lamps.push([0.12, 0.05, 0.05, s * tw * 0.8, ty - 0.08, tz + 0.01, 0, s > 0 ? 'indL' : 'indR']);
    lamps.push([0.14, 0.05, 0.05, s * tw * 0.3, ty - 0.1, tz + 0.01, 0, 'rev']);
    if (T.lightbar) lamps.push([0.5, 0.07, 0.24, s * 0.27, C.roof + 0.1, (C.zf2 + C.zr2) / 2, 0, s > 0 ? 'barR' : 'barB']);
  }

  // ---------- wheel ----------
  const tyreProfile = [];
  const R = W.r, tw = W.tw, rr = R * 0.66;
  const tp = lo ? 4 : 12;
  for (let i = 0; i <= tp; i++) {
    const a = (i / tp) * Math.PI;
    tyreProfile.push(new THREE.Vector2(R - 0.035 + Math.sin(a) * 0.035 - (i === 0 || i === tp ? 0.04 : 0), -tw / 2 + (1 - Math.cos(a)) / 2 * tw));
  }
  tyreProfile.unshift(new THREE.Vector2(rr, -tw / 2 + 0.01));
  tyreProfile.push(new THREE.Vector2(rr, tw / 2 - 0.01));
  const tyre = new THREE.LatheGeometry(tyreProfile, lo ? 12 : 28); tyre.rotateZ(Math.PI / 2);
  const rimParts = [];
  const barrel = new THREE.CylinderGeometry(rr, rr, tw * 0.9, lo ? 8 : 24, 1, true); barrel.rotateZ(Math.PI / 2);
  rimParts.push(barrel);
  const face = new THREE.CylinderGeometry(rr * 0.98, rr * 0.98, 0.02, 24); face.rotateZ(Math.PI / 2); face.translate(tw * 0.44, 0, 0);
  rimParts.push(new THREE.RingGeometry(rr * 0.86, rr, 24).rotateY(Math.PI / 2).translate(tw * 0.46, 0, 0));
  const spokes = lo ? 0 : T.rim || 5;
  if (lo) { const f = new THREE.CylinderGeometry(rr, rr, 0.02, 10); f.rotateZ(Math.PI / 2); f.translate(tw * 0.42, 0, 0); rimParts.length = 0; rimParts.push(f); }
  for (let k = 0; k < spokes; k++) {
    const sp = new THREE.BoxGeometry(0.035, rr * 0.9, 0.06);
    sp.translate(0, rr * 0.45, 0); sp.rotateX((k / spokes) * Math.PI * 2); sp.translate(tw * 0.42, 0, 0);
    rimParts.push(sp);
  }
  const hub = new THREE.CylinderGeometry(rr * 0.22, rr * 0.25, 0.08, 12); hub.rotateZ(Math.PI / 2); hub.translate(tw * 0.42, 0, 0);
  rimParts.push(hub);
  const rim = mergeGeometries(rimParts.map((g) => (g.index ? g.toNonIndexed() : g)).map((g) => { g.deleteAttribute('uv'); return g; }));
  const disc = new THREE.CylinderGeometry(rr * 0.85, rr * 0.85, 0.03, 20); disc.rotateZ(Math.PI / 2); disc.translate(tw * 0.25, 0, 0);
  const caliper = box(0.07, rr * 0.55, rr * 0.4, tw * 0.33, rr * 0.45, 0);
  const wheelPos = [[W.track, W.zf], [-W.track, W.zf], [W.track, W.zr], [-W.track, W.zr]];

  const parts = {
    T, body, glass, roof, wheelPos, R, tyre, rim, disc, caliper, lamps,
    trim: mergeGeometries(trim.map((g) => g.toNonIndexed())),
    chrome: mergeGeometries(chrome.map((g) => g.toNonIndexed())),
    paintExtra: paintExtra.length ? mergeGeometries(paintExtra.map((g) => g.toNonIndexed())) : null,
  };
  // body + extras + roof share the paint material: merge for instancing
  const nonIdx = (g) => { const x = g.index ? g.toNonIndexed() : g.clone(); for (const k of Object.keys(x.attributes)) if (!['position', 'normal', 'uv'].includes(k)) x.deleteAttribute(k); if (!x.attributes.uv) x.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(x.attributes.position.count * 2), 2)); return x; };
  parts.paint = mergeGeometries([body, roof, ...(parts.paintExtra ? [parts.paintExtra] : [])].map(nonIdx));
  parts.wheel = mergeGeometries([nonIdx(tyre), nonIdx(rim)], true); // groups: 0 tyre, 1 rim
  cache.set(key, parts);
  return parts;
}

// ---------------- materials ----------------
let MATS = null;
function mats() {
  if (MATS) return MATS;
  MATS = {
    glass: new THREE.MeshPhysicalMaterial({ color: 0x0b1016, metalness: 0.4, roughness: 0.04, clearcoat: 1, envMapIntensity: 1.6 }),
    trim: new THREE.MeshStandardMaterial({ color: 0x111214, roughness: 0.55, metalness: 0.2 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xdddddd, roughness: 0.12, metalness: 1 }),
    tyre: new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.92 }),
    rim: new THREE.MeshStandardMaterial({ color: 0xb9bec4, roughness: 0.25, metalness: 0.95 }),
    rimDark: new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.3, metalness: 0.9 }),
    disc: new THREE.MeshStandardMaterial({ color: 0x6d6f72, roughness: 0.45, metalness: 0.9 }),
  };
  return MATS;
}
export function paintMaterial(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: opts.matte ? 0.1 : 0.55, roughness: opts.matte ? 0.6 : 0.32,
    clearcoat: opts.matte ? 0 : 1, clearcoatRoughness: 0.04, envMapIntensity: 1.2, map: opts.map || null,
  });
}
function policeLivery() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#0d0f12'; g.fillRect(0, 0, 256, 64);
  // u = along car (0 rear .. 1 front), v = around the section (0 bottom, .25 right side, .5 top, .75 left side)
  g.fillStyle = '#f2f2f2';
  g.fillRect(256 * 0.3, 64 * 0.08, 256 * 0.38, 64 * 0.3);
  g.fillRect(256 * 0.3, 64 * 0.62, 256 * 0.38, 64 * 0.3);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Full-detail car (player, racers, police). Returns a Group with .parts for animation. */
export function buildCar(type, color, opts = {}) {
  const P = carParts(type), Mt = mats();
  const g = new THREE.Group();
  const shell = new THREE.Group(); g.add(shell);
  const paint = paintMaterial(P.T.livery ? 0xffffff : color, { map: P.T.livery ? policeLivery() : null });
  const body = new THREE.Mesh(P.body, paint);
  const add = (geo, mat, cast = true) => { if (!geo) return null; const m = new THREE.Mesh(geo, mat); m.castShadow = cast; shell.add(m); return m; };
  add(P.body, paint); add(P.roof, P.T.livery ? paintMaterial(0x0d0f12) : paint);
  if (P.paintExtra) add(P.paintExtra, P.T.livery ? paintMaterial(0x0d0f12) : paint);
  add(P.glass, Mt.glass); add(P.trim, Mt.trim, false); add(P.chrome, Mt.chrome, false);
  void body;
  // lamps
  const lm = {};
  const mk = (base, em) => new THREE.MeshStandardMaterial({ color: base, emissive: em, emissiveIntensity: 0, roughness: 0.2, metalness: 0.1 });
  lm.head = mk(0x3a4048, 0xf2f6ff); lm.tail = mk(0x4a0606, 0xff1208); lm.rev = mk(0xbbbbbb, 0xffffff);
  lm.indL = mk(0x6a3a00, 0xff9a00); lm.indR = mk(0x6a3a00, 0xff9a00); lm.barR = mk(0x500000, 0xff1010); lm.barB = mk(0x000a50, 0x1040ff);
  for (const l of P.lamps) { const m = new THREE.Mesh(box(l[0], l[1], l[2], 0, 0, 0, l[6]), lm[l[7]]); m.position.set(l[3], l[4], l[5]); shell.add(m); }
  // wheels
  const wheels = [];
  const rimMat = opts.darkRims ? Mt.rimDark : Mt.rim;
  const calMat = new THREE.MeshStandardMaterial({ color: opts.caliper || 0xc81d1d, roughness: 0.4, metalness: 0.3 });
  P.wheelPos.forEach(([x, z], i) => {
    const pivot = new THREE.Group(); pivot.position.set(x, P.R, z);
    const side = x > 0 ? 1 : -1;
    const spin = new THREE.Group();
    const w = new THREE.Mesh(P.wheel, [Mt.tyre, rimMat]); w.castShadow = true;
    if (side < 0) w.rotation.y = Math.PI;
    spin.add(w);
    const disc = new THREE.Mesh(P.disc, Mt.disc); if (side < 0) disc.rotation.y = Math.PI;
    spin.add(disc);
    const cal = new THREE.Mesh(P.caliper, calMat); if (side < 0) cal.rotation.y = Math.PI;
    pivot.add(spin, cal);
    g.add(pivot);
    wheels.push({ pivot, spin, front: i < 2 });
  });
  g.parts = { shell, wheels, lm, paint, type, P };
  return g;
}

export function animateCar(car, steer, spin, L, t = 0) {
  const p = car.parts;
  for (const w of p.wheels) { if (w.front) w.pivot.rotation.y = steer; w.spin.rotation.x = spin; }
  const lm = p.lm;
  lm.head.emissiveIntensity = L.head ? 6 : 0.6;
  lm.tail.emissiveIntensity = L.brake ? 7 : L.head ? 2.2 : 0.4;
  lm.rev.emissiveIntensity = L.reverse ? 4 : 0;
  lm.indL.emissiveIntensity = L.left ? 6 : 0;
  lm.indR.emissiveIntensity = L.right ? 6 : 0;
  if (L.siren) {
    const ph = Math.floor(t * 8) % 4;
    lm.barR.emissiveIntensity = ph < 2 && ph % 2 === 0 ? 14 : 0;
    lm.barB.emissiveIntensity = ph >= 2 && ph % 2 === 0 ? 14 : 0;
  } else { lm.barR.emissiveIntensity = 0; lm.barB.emissiveIntensity = 0; }
}

// ---------------- instanced cars (traffic & parked) ----------------
const _m = new THREE.Matrix4(), _m2 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _c = new THREE.Color();
const LAMP_COL = {
  head: [[0.75, 0.78, 0.8], [6, 6, 5.6]], tail: [[0.35, 0.02, 0.02], [7, 0.3, 0.15]], tailNight: [[2.2, 0.08, 0.05]],
  rev: [[0.5, 0.5, 0.5], [4, 4, 4]], indL: [[0.4, 0.2, 0], [6, 3.4, 0]], indR: [[0.4, 0.2, 0], [6, 3.4, 0]], barR: [[0.3, 0, 0], [10, 0.3, 0.3]], barB: [[0, 0, 0.3], [0.3, 0.6, 10]],
};

export class TypeInstancer {
  constructor(scene, type, capacity, beamTex) {
    const P = (this.P = carParts(type, true)), Mt = mats();
    this.cap = capacity; this.n = 0;
    const mk = (geo, mat, n, shadow) => {
      const im = new THREE.InstancedMesh(geo, mat, n);
      im.castShadow = shadow; im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); im.frustumCulled = false; im.count = 0;
      scene.add(im); return im;
    };
    this.paint = mk(P.paint, paintMaterial(0xffffff), capacity, true);
    this.paint.setColorAt(0, _c.set(0xffffff));
    this.glass = mk(P.glass, Mt.glass, capacity, false);
    this.trim = mk(P.trim, Mt.trim, capacity, false);
    this.wheels = mk(P.wheel, [Mt.tyre, Mt.rim], capacity * 4, false);
    this.nl = P.lamps.length;
    this.lamps = mk(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff }), capacity * this.nl, false);
    this.lamps.setColorAt(0, _c.set(0xffffff));
    const beamGeo = new THREE.PlaneGeometry(5, 14); beamGeo.rotateX(-Math.PI / 2); beamGeo.translate(0, 0.04, P.T.L / 2 + 7);
    this.beams = mk(beamGeo, new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 }), capacity, false);
    this.beams.visible = false;
    this.meshes = [this.paint, this.glass, this.trim, this.wheels, this.lamps, this.beams];
  }
  reset() { this.n = 0; for (const im of this.meshes) im.count = 0; }
  add() {
    const i = this.n++;
    for (const im of this.meshes) im.count = this.n * (im === this.wheels ? 4 : im === this.lamps ? this.nl : 1);
    return i;
  }
  setColor(i, hex) { this.paint.setColorAt(i, _c.set(hex)); this.paint.instanceColor.needsUpdate = true; }
  hide(i) { _m.makeScale(0, 0, 0); for (const im of [this.paint, this.glass, this.trim, this.beams]) im.setMatrixAt(i, _m); for (let w = 0; w < 4; w++) this.wheels.setMatrixAt(i * 4 + w, _m); for (let k = 0; k < this.nl; k++) this.lamps.setMatrixAt(i * this.nl + k, _m); }
  set(i, x, y, z, heading, steer, spin, L) {
    const P = this.P;
    _e.set(0, heading, 0, 'XYZ'); _q.setFromEuler(_e);
    _m.compose(_v.set(x, y, z), _q, _s);
    this.paint.setMatrixAt(i, _m); this.glass.setMatrixAt(i, _m); this.trim.setMatrixAt(i, _m); this.beams.setMatrixAt(i, _m);
    for (let w = 0; w < 4; w++) {
      const wp = P.wheelPos[w];
      _e.set(spin * (wp[0] > 0 ? 1 : 1), (w < 2 ? steer : 0) + (wp[0] > 0 ? 0 : Math.PI), 0, 'YXZ');
      if (wp[0] < 0) _e.x = -spin;
      _q.setFromEuler(_e);
      _m2.compose(_v.set(wp[0], P.R, wp[1]), _q, _s); _m2.premultiply(_m);
      this.wheels.setMatrixAt(i * 4 + w, _m2);
    }
    for (let k = 0; k < this.nl; k++) {
      const l = P.lamps[k];
      _e.set(l[6], 0, 0, 'XYZ'); _q.setFromEuler(_e);
      _m2.compose(_v.set(l[3], l[4], l[5]), _q, _s.set(l[0], l[1], l[2])); _s.set(1, 1, 1);
      _m2.premultiply(_m);
      const idx = i * this.nl + k;
      this.lamps.setMatrixAt(idx, _m2);
      const kind = l[7];
      let on = false;
      if (L) on = kind === 'head' ? L.head : kind === 'tail' ? L.brake : kind === 'rev' ? L.reverse : kind === 'indL' ? L.left : kind === 'indR' ? L.right : false;
      let col = LAMP_COL[kind][on ? 1 : 0];
      if (kind === 'tail' && !on && L && L.head) col = LAMP_COL.tailNight[0];
      this.lamps.setColorAt(idx, _c.setRGB(col[0], col[1], col[2]));
    }
  }
  flush() {
    for (const im of this.meshes) im.instanceMatrix.needsUpdate = true;
    if (this.lamps.instanceColor) this.lamps.instanceColor.needsUpdate = true;
  }
  setNight(on) { this.beams.visible = on; }
}

/** Several instancers (one per body type) behind one interface. Handles are {k, i}. */
export class Fleet {
  constructor(scene, types, capacity, beamTex) {
    this.types = types;
    this.inst = types.map((t) => new TypeInstancer(scene, t, capacity, beamTex));
  }
  add(k) { return { k, i: this.inst[k].add() }; }
  reset() { for (const x of this.inst) x.reset(); }
  setColor(h, hex) { this.inst[h.k].setColor(h.i, hex); }
  set(h, ...a) { this.inst[h.k].set(h.i, ...a); }
  hide(h) { this.inst[h.k].hide(h.i); }
  flush() { for (const x of this.inst) x.flush(); }
  setNight(on) { for (const x of this.inst) x.setNight(on); }
  halfLen(k) { return this.inst[k].P.T.L / 2; }
}
