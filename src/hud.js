import { CFG, roadCoord, DIRS } from './config.js';

const { N, EDGE, SIDEWALK: SW } = CFG;
const SCALE = 2; // pixels per metre on the static map

/** Pre-rendered city map + rotating minimap drawing. */
export class Minimap {
  constructor(canvas, world) {
    this.c = canvas; this.ctx = canvas.getContext('2d');
    const size = Math.ceil((EDGE + SW + 10) * 2 * SCALE);
    this.half = size / 2;
    const m = document.createElement('canvas'); m.width = m.height = size;
    const g = m.getContext('2d');
    const P = (v) => this.half + v * SCALE;
    g.fillStyle = '#2c4a2a'; g.fillRect(0, 0, size, size);
    g.fillStyle = '#4a4d52'; g.fillRect(P(-EDGE), P(-EDGE), EDGE * 2 * SCALE, EDGE * 2 * SCALE);
    for (const B of world.blocks) {
      const x = P(B.x0), y = P(B.z0), w = (B.x1 - B.x0) * SCALE, h = (B.z1 - B.z0) * SCALE;
      if (B.type === 'lot') { g.fillStyle = '#5b5f66'; g.fillRect(x, y, w, h); g.fillStyle = '#ffffff'; g.font = `bold ${16 * SCALE}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('P', x + w / 2, y + h / 2); continue; }
      g.fillStyle = '#8d8a83'; g.fillRect(x, y, w, h);
      g.fillStyle = B.type === 'park' ? '#3f7a39' : '#6b6e75';
      g.fillRect(x + SW * SCALE, y + SW * SCALE, w - 2 * SW * SCALE, h - 2 * SW * SCALE);
    }
    for (const o of world.statics) if (o.kind === 'building') {
      g.fillStyle = '#2f3238';
      g.fillRect(P(o.minX), P(o.minZ), (o.maxX - o.minX) * SCALE, (o.maxZ - o.minZ) * SCALE);
    }
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 1; g.setLineDash([6, 8]);
    for (let i = 0; i <= N; i++) {
      const c = P(roadCoord(i));
      g.beginPath(); g.moveTo(P(-EDGE), c); g.lineTo(P(EDGE), c); g.stroke();
      g.beginPath(); g.moveTo(c, P(-EDGE)); g.lineTo(c, P(EDGE)); g.stroke();
    }
    this.map = m;
  }

  draw(car, cars, route, target, zoom = 1.3, extra = null) {
    const g = this.ctx, W = this.c.width, H = this.c.height;
    g.clearRect(0, 0, W, H);
    g.save();
    g.beginPath(); g.arc(W / 2, H / 2, W / 2, 0, Math.PI * 2); g.clip();
    g.fillStyle = '#1c2620'; g.fillRect(0, 0, W, H);
    g.translate(W / 2, H / 2);
    g.rotate(car.h + Math.PI);
    g.scale(zoom / SCALE * SCALE, zoom / SCALE * SCALE);
    g.translate(-car.x, -car.z);
    // static map: map pixel = half + world * SCALE  ->  world = (pixel - half) / SCALE
    g.drawImage(this.map, -this.half / SCALE, -this.half / SCALE, this.map.width / SCALE, this.map.height / SCALE);
    if (route && route.length > 1) {
      g.strokeStyle = '#2f9bff'; g.lineWidth = 3.5; g.lineJoin = 'round'; g.lineCap = 'round';
      g.beginPath(); g.moveTo(route[0][0], route[0][1]);
      for (let i = 1; i < route.length; i++) g.lineTo(route[i][0], route[i][1]);
      g.stroke();
    }
    for (const c of cars) { g.fillStyle = '#e8e8e8'; g.fillRect(c.x - 1.2, c.z - 1.2, 2.4, 2.4); }
    if (extra) for (const e of extra) { g.fillStyle = e.c; g.beginPath(); g.arc(e.x, e.z, e.big ? 4.5 : 3.5, 0, Math.PI * 2); g.fill(); }
    if (target) {
      g.fillStyle = '#35e07a'; g.strokeStyle = '#0b3'; g.lineWidth = 1;
      g.beginPath(); g.arc(target[0], target[1], 4.5, 0, Math.PI * 2); g.fill(); g.stroke();
    }
    g.restore();
    // player arrow (always pointing up)
    g.save(); g.translate(W / 2, H / 2);
    g.fillStyle = '#ff7a1a'; g.strokeStyle = '#fff'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(0, -9); g.lineTo(7, 8); g.lineTo(0, 4); g.lineTo(-7, 8); g.closePath(); g.fill(); g.stroke();
    g.restore();
  }
}

/** Breadth-first route over the junction grid. Returns junction index pairs. */
export function gridPath(a, b) {
  const key = (p) => p[0] * 100 + p[1];
  const prev = new Map([[key(a), null]]);
  const q = [a];
  while (q.length) {
    const p = q.shift();
    if (p[0] === b[0] && p[1] === b[1]) break;
    for (const d of DIRS) {
      const n = [p[0] + d[0], p[1] + d[1]];
      if (n[0] < 0 || n[1] < 0 || n[0] > N || n[1] > N || prev.has(key(n))) continue;
      prev.set(key(n), p); q.push(n);
    }
  }
  const out = [];
  let p = b;
  while (p) { out.unshift(p); p = prev.get(key(p)); }
  return out;
}
