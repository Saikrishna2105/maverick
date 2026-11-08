import { CFG, clamp, smoothstep, roadCoord, DIRS, wrapAngle } from './config.js';

const G = 9.81;

/** A drivable path sampled every ~2 m with curvature-limited speeds. */
export class Path {
  constructor(points, closed) {
    // points: [[x,z],...] corner points (junction centres); build filleted polyline
    const pts = [];
    const n = points.length;
    const R = 14;
    for (let i = 0; i < n; i++) {
      const p = points[i];
      const hasPrev = closed || i > 0, hasNext = closed || i < n - 1;
      if (!hasPrev || !hasNext) { pts.push(p); continue; }
      const a = points[(i - 1 + n) % n], b = points[(i + 1) % n];
      const d1 = norm(p[0] - a[0], p[1] - a[1]), d2 = norm(b[0] - p[0], b[1] - p[1]);
      if (Math.abs(d1[0] * d2[0] + d1[1] * d2[1]) > 0.99) { pts.push(p); continue; }
      const P0 = [p[0] - d1[0] * R, p[1] - d1[1] * R], P2 = [p[0] + d2[0] * R, p[1] + d2[1] * R];
      for (let k = 0; k <= 12; k++) {
        const t = k / 12, u = 1 - t;
        pts.push([u * u * P0[0] + 2 * u * t * p[0] + t * t * P2[0], u * u * P0[1] + 2 * u * t * p[1] + t * t * P2[1]]);
      }
    }
    if (closed) pts.push(pts[0]);
    // resample every 2 m
    const xs = [], zs = [];
    let carry = 0;
    xs.push(pts[0][0]); zs.push(pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      const ax = pts[i - 1][0], az = pts[i - 1][1], bx = pts[i][0], bz = pts[i][1];
      const L = Math.hypot(bx - ax, bz - az);
      let d = 2 - carry;
      while (d <= L) { xs.push(ax + (bx - ax) * (d / L)); zs.push(az + (bz - az) * (d / L)); d += 2; }
      carry = L - (d - 2);
    }
    this.closed = closed;
    this.x = xs; this.z = zs; this.n = xs.length; this.step = 2; this.len = (this.n - 1) * 2;
    this.h = []; this.k = [];
    for (let i = 0; i < this.n; i++) {
      const a = this.idx(i - 1), b = this.idx(i + 1);
      this.h.push(Math.atan2(xs[b] - xs[a], zs[b] - zs[a]));
    }
    for (let i = 0; i < this.n; i++) {
      const a = this.idx(i - 2), b = this.idx(i + 2);
      const dh = wrapAngle(this.h[b] - this.h[a]);
      this.k.push(Math.abs(dh) / 8);
    }
  }
  idx(i) { return this.closed ? ((i % (this.n - 1)) + (this.n - 1)) % (this.n - 1) : clamp(i, 0, this.n - 1); }
  at(s) { const f = s / 2; const i = Math.floor(f); const t = f - i; const a = this.idx(i), b = this.idx(i + 1); return [this.x[a] + (this.x[b] - this.x[a]) * t, this.z[a] + (this.z[b] - this.z[a]) * t, this.h[a]]; }
  /** Nearest arc-length to (x,z), searching around a previous guess. */
  project(x, z, guess, window = 40) {
    let best = guess, bd = Infinity;
    const gi = Math.round(guess / 2);
    for (let k = -window; k <= window; k++) {
      const i = this.idx(gi + k);
      const d = (this.x[i] - x) ** 2 + (this.z[i] - z) ** 2;
      if (d < bd) { bd = d; best = i * 2; }
    }
    return { s: best, d: Math.sqrt(bd) };
  }
}
function norm(x, z) { const l = Math.hypot(x, z) || 1; return [x / l, z / l]; }

/** Pure-pursuit driver for a CarPhysics instance. */
export class Driver {
  constructor(car, skill = 1) {
    this.car = car; this.skill = skill; this.offset = 0; this.offT = 0;
    this.stuckT = 0; this.reverseT = 0; this.s = 0; this.lap = 0; this.prevS = 0;
    car.select('D');
  }
  steerTo(tx, tz) {
    const c = this.car;
    const sh = Math.sin(c.h), ch = Math.cos(c.h);
    const dx = tx - c.x, dz = tz - c.z;
    const fwd = dx * sh + dz * ch, left = dx * ch - dz * sh;
    const Ld2 = Math.max(4, dx * dx + dz * dz);
    const curv = (2 * left) / Ld2;
    const ang = Math.atan(curv * c.L);
    const eff = c.maxSteer * (1 - 0.72 * smoothstep(8, 55, Math.abs(c.vx)));
    return { steer: clamp(ang / eff, -1, 1), fwd };
  }
  /** Follow a Path; others = [{x,z,h,v}] obstacles to avoid (traffic). */
  followPath(path, dt, others, speedScale = 1) {
    const c = this.car;
    const v = Math.max(0, c.vx);
    const pr = path.project(c.x, c.z, this.s);
    if (path.closed) {
      if (pr.s < this.prevS - path.len / 2) this.lap++;
      if (pr.s > this.prevS + path.len / 2) this.lap--;
    }
    this.prevS = pr.s; this.s = pr.s;
    // obstacle avoidance: look for slow traffic ahead along the path
    const look = 12 + v * 1.4;
    let block = Infinity, blockLat = 0;
    const sh = Math.sin(c.h), ch = Math.cos(c.h);
    for (const o of others) {
      const dx = o.x - c.x, dz = o.z - c.z;
      const f = dx * sh + dz * ch;
      if (f < 2 || f > look) continue;
      const l = dx * ch - dz * sh;
      const rel = v - (o.v || 0) * Math.cos(wrapAngle(o.h - c.h));
      if (Math.abs(l - this.offset) < 2.3 && rel > -1) { if (f < block) { block = f; blockLat = l; } }
    }
    this.offT -= dt;
    if (block < Infinity && this.offT <= 0) { this.offset = blockLat > 0 ? blockLat - 3.0 : blockLat + 3.0; this.offset = clamp(this.offset, -3.6, 3.6); this.offT = 1.0; }
    if (block === Infinity && this.offT <= 0) this.offset *= Math.max(0, 1 - dt * 0.8);
    // no swerving close to corners (poles and kerbs on the inside)
    let kAhead = 0;
    for (let d = -6; d < 30; d += 4) kAhead = Math.max(kAhead, path.k[path.idx(Math.round((pr.s + d) / 2))]);
    if (kAhead > 0.025) this.offset *= Math.max(0, 1 - dt * 4);
    const Ld = 6 + v * 0.42;
    const [tx, tz, th] = path.at(path.closed ? (pr.s + Ld) % path.len : Math.min(path.len, pr.s + Ld));
    const ox = Math.cos(th) * this.offset, oz = -Math.sin(th) * this.offset;
    const st = this.steerTo(tx + ox, tz + oz);
    // speed planning
    const mu = c.mu * this.skill * 0.92;
    const decel = mu * G * 0.72;
    let vt = 200 * speedScale;
    for (let d = 0; d < 320; d += 4) {
      const i = path.idx(Math.round((pr.s + d) / 2));
      if (!path.closed && (pr.s + d) > path.len) break;
      const k = Math.max(path.k[i], 1e-4);
      const vc = Math.sqrt((mu * G) / k) * (1 + (c.spec.cl || 0) * 0.06);
      vt = Math.min(vt, Math.sqrt(vc * vc + 2 * decel * Math.max(0, d - 4)));
    }
    if (block < Infinity && Math.abs(this.offset) < 1) vt = Math.min(vt, Math.max(0, block - 7) * 1.2);
    vt *= speedScale;
    return this.drive(st.steer, vt, dt);
  }
  /** Drive toward a point with a target speed. */
  seek(tx, tz, vt, dt) { const st = this.steerTo(tx, tz); return this.drive(st.steer, st.fwd < 0 && Math.abs(this.car.vx) < 5 ? vt * 0.4 : vt, dt); }
  drive(steer, vt, dt) {
    const c = this.car, inp = c.inp;
    const v = c.vx;
    if (this.reverseT > 0) {
      this.reverseT -= dt;
      if (c.selector !== 'R' && Math.abs(v) < 1) c.select('R');
      inp.throttle = 0.6; inp.brake = 0; inp.steer = -steer; inp.nos = false; inp.handbrake = false;
      if (this.reverseT <= 0) c.select('D');
      return;
    }
    if (c.selector !== 'D' && Math.abs(v) < 1) c.select('D');
    inp.steer = steer;
    const err = vt - v;
    inp.throttle = clamp(err * 0.35 + 0.15, 0, 1) * (Math.abs(steer) > 0.9 && v > 12 ? 0.6 : 1);
    inp.brake = clamp(-err * 0.25, 0, 1);
    inp.handbrake = false;
    inp.nos = this.skill > 0.95 && err > 12 && Math.abs(steer) < 0.2 && v > 15;
    // stuck detection
    if (inp.throttle > 0.5 && Math.abs(v) < 1.2) this.stuckT += dt; else this.stuckT = Math.max(0, this.stuckT - dt);
    if (this.stuckT > 1.6) { this.stuckT = 0; this.reverseT = 1.3; this.stuckCount = (this.stuckCount || 0) + 1; }
  }
}

/** Grid route for chasing: next junction to head for from (x,z) toward target. */
export function chaseWaypoint(W, x, z, h, tx, tz) {
  const N = CFG.N;
  const j = (v) => clamp(Math.round((v + CFG.OFF) / CFG.S), 0, N);
  const loc = W.locate(x, z);
  let ix = j(x), iz = j(z);
  if (loc.type === 'road') {
    // the junction ahead in our travel direction along this road
    const f = loc.axis === 0 ? Math.sin(h) : Math.cos(h);
    const ji = clamp(loc.si + (f >= 0 ? 1 : 0), 0, N);
    if (loc.axis === 0) { ix = ji; iz = loc.ri; } else { ix = loc.ri; iz = ji; }
  }
  const gx = j(tx), gz = j(tz);
  const jx = roadCoord(ix), jz = roadCoord(iz);
  const atJ = Math.hypot(x - jx, z - jz) < CFG.ROAD_HALF + 2;
  if (!atJ) return [jx, jz];
  // choose the axis with the larger remaining distance
  const dx = gx - ix, dz = gz - iz;
  if (dx === 0 && dz === 0) return [tx, tz];
  if (Math.abs(dx) >= Math.abs(dz)) return [roadCoord(ix + Math.sign(dx)), jz];
  return [jx, roadCoord(iz + Math.sign(dz))];
}

/** True if the straight line between two points stays on roads (no buildings in between). */
export function lineOfSight(W, ax, az, bx, bz) {
  const d = Math.hypot(bx - ax, bz - az);
  const n = Math.ceil(d / 5);
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const l = W.locate(ax + (bx - ax) * t, az + (bz - az) * t);
    if (l.type === 'block' && l.block.type === 'city') {
      const B = l.block, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      if (x > B.x0 + CFG.SIDEWALK && x < B.x1 - CFG.SIDEWALK && z > B.z0 + CFG.SIDEWALK && z < B.z1 - CFG.SIDEWALK) return false;
    }
  }
  return true;
}
export { DIRS };
