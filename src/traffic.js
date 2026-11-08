import { CFG, roadCoord, DIRS, rightOf, headingOfDir, clamp, wrapAngle } from './config.js';
import { CAR_COLORS } from './models.js';

const { N, ROAD_HALF: RH, STOP_C } = CFG;

function bez(p0, p1, p2, t) {
  const u = 1 - t;
  return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
}

export class Traffic {
  constructor(world, count, rand, side) {
    this.W = world; this.rand = rand; this.side = side; this.cars = [];
    this.lo = side * CFG.LANE_OFF;
    this.count = count;
  }

  validDirs(ix, iz, from) {
    const out = [];
    for (let d = 0; d < 4; d++) {
      if (from !== undefined && d === (from + 2) % 4) continue;
      const nx = ix + DIRS[d][0], nz = iz + DIRS[d][1];
      if (nx >= 0 && nx <= N && nz >= 0 && nz <= N) out.push(d);
    }
    return out;
  }

  /** Builds the path from junction (ix,iz) heading d, through the next junction, turning into d2. */
  makeLeg(car, ix, iz, d) {
    const bx = ix + DIRS[d][0], bz = iz + DIRS[d][1];
    const opts = this.validDirs(bx, bz, d);
    // prefer going straight a bit more often
    let d2 = opts[(this.rand() * opts.length) | 0];
    if (opts.includes(d) && this.rand() < 0.35) d2 = d;
    const lo = this.lo;
    const A = [roadCoord(ix), roadCoord(iz)], B = [roadCoord(bx), roadCoord(bz)];
    const r1 = rightOf(d), r2 = rightOf(d2), v = DIRS[d], v2 = DIRS[d2];
    const pts = [];
    pts.push([A[0] + v[0] * RH + r1[0] * lo, A[1] + v[1] * RH + r1[1] * lo]);
    pts.push([B[0] - v[0] * STOP_C + r1[0] * lo, B[1] - v[1] * STOP_C + r1[1] * lo]);
    const E = [B[0] - v[0] * RH + r1[0] * lo, B[1] - v[1] * RH + r1[1] * lo];
    pts.push(E);
    const X = [B[0] + v2[0] * RH + r2[0] * lo, B[1] + v2[1] * RH + r2[1] * lo];
    if (d2 !== d) {
      const P = [B[0] + lo * (r1[0] + r2[0]), B[1] + lo * (r1[1] + r2[1])];
      for (let k = 1; k <= 10; k++) pts.push(bez(E, P, X, k / 10));
    } else pts.push(X);
    const cum = [0];
    for (let k = 1; k < pts.length; k++) cum.push(cum[k - 1] + Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]));
    const cross = v[0] * v2[1] - v[1] * v2[0];
    car.leg = { pts, cum, len: cum[cum.length - 1], stopS: cum[1], entryS: cum[2], bx, bz, d, d2, axis: d % 2, turn: d2 === d ? 0 : cross < 0 ? -1 : 1 };
    car.committed = false;
  }

  posAt(leg, s) {
    const { pts, cum } = leg;
    s = clamp(s, 0, leg.len);
    let k = 1;
    while (k < cum.length - 1 && cum[k] < s) k++;
    const seg = cum[k] - cum[k - 1] || 1;
    const t = (s - cum[k - 1]) / seg;
    return [pts[k - 1][0] + (pts[k][0] - pts[k - 1][0]) * t, pts[k - 1][1] + (pts[k][1] - pts[k - 1][1]) * t];
  }

  spawn(player, avoid = 35) {
    for (let tries = 0; tries < 60; tries++) {
      const ix = (this.rand() * (N + 1)) | 0, iz = (this.rand() * (N + 1)) | 0;
      const ds = this.validDirs(ix, iz);
      const d = ds[(this.rand() * ds.length) | 0];
      const car = { v: 0, cruise: 9.5 + this.rand() * 4, stun: 0, wait: 0, ghost: 0, blink: 0, brake: false, steer: 0, spin: 0 };
      this.makeLeg(car, ix, iz, d);
      car.s = this.rand() * (car.leg.stopS - 4);
      const p = this.posAt(car.leg, car.s);
      if (player && Math.hypot(p[0] - player.x, p[1] - player.z) < avoid) continue;
      if (this.cars.some((c) => Math.hypot(c.x - p[0], c.z - p[1]) < 12)) continue;
      car.x = p[0]; car.z = p[1]; car.h = headingOfDir(d);
      car.v = car.cruise * 0.6;
      car.idx = this.W.cars.add(this.rand() < 0.5 ? 0 : this.rand() < 0.6 ? 1 : 2);
      this.W.cars.setColor(car.idx, CAR_COLORS[(this.rand() * CAR_COLORS.length) | 0]);
      this.cars.push(car);
      return car;
    }
    return null;
  }

  init(player) { for (let i = 0; i < this.count; i++) this.spawn(player); }

  /** Is there a vehicle coming the other way that a crossing turn must give way to? */
  oncoming(car, player) {
    const leg = car.leg, B = [roadCoord(leg.bx), roadCoord(leg.bz)];
    const od = (leg.d + 2) % 4; // direction of oncoming traffic
    const check = (x, z, h, v) => {
      const relx = x - B[0], relz = z - B[1];
      const inJ = Math.abs(relx) < RH + 1 && Math.abs(relz) < RH + 1;
      const dir = DIRS[od];
      const fwd = [Math.sin(h), Math.cos(h)];
      const movingOd = fwd[0] * dir[0] + fwd[1] * dir[1] > 0.7;
      // distance before the junction along oncoming approach
      const along = -(relx * dir[0] + relz * dir[1]);
      const lat = Math.abs(relx * dir[1] - relz * dir[0]);
      if (inJ && v > 0.5 && movingOd) return true;
      return movingOd && along > RH - 1 && along < RH + 30 && lat < RH && v > 1.0;
    };
    for (const o of this.cars) if (o !== car && check(o.x, o.z, o.h, o.v)) return true;
    if (player && check(player.x, player.z, player.h, player.vx)) return true;
    return false;
  }

  update(dt, t, player, playerOBBHalf) {
    const W = this.W;
    for (const car of this.cars) {
      const leg = car.leg;
      let target = car.cruise;
      if (car.stun > 0) { car.stun -= dt; target = 0; }
      // slow for turns
      if (leg.turn !== 0) {
        const dE = leg.entryS - car.s;
        if (dE < 28) target = Math.min(target, 5.2 + Math.max(0, dE) * 0.25);
      }
      // traffic lights
      const distStop = leg.stopS - car.s;
      if (car.s < leg.entryS && !car.committed) {
        const st = W.lightState(leg.bx, leg.bz, leg.axis, t);
        const brakeDist = (car.v * car.v) / (2 * 4.0);
        let mustStop = st.s === 'R' || (st.s === 'Y' && distStop > brakeDist + 1.5);
        if (st.s === 'G' && st.remain < 1.0 && distStop > 25) mustStop = false;
        if (distStop < -0.8) { car.committed = true; mustStop = false; }
        if (mustStop) target = Math.min(target, Math.sqrt(Math.max(0, 2 * 3.2 * (distStop - 0.3))));
        else if (distStop < 2) car.committed = true;
      }
      // give way to oncoming traffic when turning across it
      const crossing = this.side === 1 ? leg.turn === -1 : leg.turn === 1;
      if (crossing && car.s < leg.entryS + 3 && car.s > leg.stopS - 12) {
        if (this.oncoming(car, player)) {
          const holdS = leg.entryS + 1.5;
          target = Math.min(target, Math.sqrt(Math.max(0, 2 * 3.5 * (holdS - car.s - 0.2))));
        }
      }
      // vehicles ahead
      const fx = Math.sin(car.h), fz = Math.cos(car.h);
      const look = 7 + car.v * 2.4;
      let blocked = false;
      const consider = (ox, oz, isPlayer) => {
        const rx = ox - car.x, rz = oz - car.z;
        const f = rx * fx + rz * fz;
        if (f <= 0 || f > look) return;
        const l = Math.abs(rx * fz - rz * fx);
        if (l > (isPlayer ? 2.4 : 2.1)) return;
        const gap = f - 4.6;
        const tv = Math.max(0, (gap - 1.8) / 1.1);
        if (tv < target) { target = tv; blocked = true; }
      };
      if (car.ghost <= 0) for (const o of this.cars) if (o !== car) consider(o.x, o.z, false);
      if (player) consider(player.x, player.z, true);
      // anti-deadlock
      if (blocked && car.v < 0.3) { car.wait += dt; if (car.wait > 6) { car.ghost = 2.5; car.wait = 0; } } else car.wait = 0;
      if (car.ghost > 0) car.ghost -= dt;

      const acc = target > car.v ? Math.min(2.6, (target - car.v) * 1.6) : Math.max(-8, (target - car.v) * 3.5);
      car.v = Math.max(0, car.v + acc * dt);
      car.brake = acc < -0.6 || car.v < 0.2;
      car.s += car.v * dt;
      if (car.s >= leg.len) {
        const over = car.s - leg.len;
        this.makeLeg(car, leg.bx, leg.bz, leg.d2);
        car.s = over;
      }
      const p = this.posAt(car.leg, car.s);
      const pa = this.posAt(car.leg, car.s + 1.3), pb = this.posAt(car.leg, car.s - 1.3);
      const nh = Math.atan2(pa[0] - pb[0], pa[1] - pb[1]);
      car.steer = clamp(wrapAngle(nh - car.h) * 6, -0.5, 0.5);
      car.x = p[0]; car.z = p[1]; car.h = nh;
      car.spin += (car.v / 0.31) * dt;
      // indicators
      const L = car.leg;
      car.blink = L.turn !== 0 && car.s > L.stopS - 30 ? L.turn : 0;
    }
  }

  render(t, night) {
    const blinkOn = (t * 1.5) % 1 < 0.5;
    for (const car of this.cars) {
      const hazard = car.stun > 0;
      this.W.cars.set(car.idx, car.x, 0, car.z, car.h, car.steer, car.spin, {
        head: night, brake: car.brake, reverse: false,
        left: blinkOn && (hazard || car.blink === -1), right: blinkOn && (hazard || car.blink === 1),
      });
    }
    this.W.cars.flush();
  }
}
