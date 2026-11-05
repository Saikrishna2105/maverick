import { CFG, DIRS, rightOf, dirFromVec, roadCoord } from './config.js';

/** Watches the player's driving and hands out penalties like a driving examiner. */
export class Rules {
  constructor(game) { this.g = game; this.reset(); }
  reset() {
    this.score = 100; this.log = []; this.prev = { type: 'none' };
    this.entry = null; this.speedT = 0; this.wrongT = 0; this.walkT = 0;
    this.last = {}; this.indOn = { L: -99, R: -99 }; this.lastHit = -99;
  }
  penalty(key, text, pts, every = 0) {
    const t = this.g.t;
    if (every && this.last[key] !== undefined && t - this.last[key] < every) return;
    this.last[key] = t;
    this.score -= pts;
    this.log.push({ text, pts, t });
    this.g.onPenalty(text, pts);
  }
  collision(kind, impact) {
    const t = this.g.t;
    if (t - this.lastHit < 1.0) return;
    this.lastHit = t;
    if (impact < 1.2) { this.penalty('touch', 'Touched an obstacle', 2); return; }
    if (kind === 'ai') this.penalty('crash', 'Collision with a vehicle', 15);
    else if (kind === 'car') this.penalty('crash', 'Hit a parked car', 10);
    else this.penalty('crash', 'Crashed into an obstacle', 10);
  }
  update(dt) {
    const g = this.g, car = g.car, W = g.world, t = g.t;
    if (g.indicator === 'L' || g.hazard) this.indOn.L = t;
    if (g.indicator === 'R' || g.hazard) this.indOn.R = t;
    const loc = W.locate(car.x, car.z);
    const [wx, wz] = car.worldVel();
    const speed = Math.hypot(wx, wz);
    const kmh = Math.abs(car.vx) * 3.6;

    // speeding
    if (kmh > CFG.SPEED_LIMIT + 4) {
      this.speedT += dt;
      if (this.speedT > 2) this.penalty('speed', `Speeding (${Math.round(kmh)} km/h in a ${CFG.SPEED_LIMIT} zone)`, 5, 6);
    } else this.speedT = 0;

    // junctions: red lights and indicators
    if (loc.type === 'junction' && this.prev.type !== 'junction') {
      if (speed > 0.3) {
        const d = dirFromVec(wx, wz);
        this.entry = { ix: loc.ix, iz: loc.iz, d, t };
        const st = W.lightState(loc.ix, loc.iz, d % 2, t);
        if (st.s === 'R' && st.since > 1.0 && car.vx > 0) this.penalty('red' + loc.ix + loc.iz, 'Ran a red light', 20, 5);
      } else this.entry = null;
    }
    if (loc.type !== 'junction' && this.prev.type === 'junction' && this.entry) {
      const jx = roadCoord(this.entry.ix), jz = roadCoord(this.entry.iz);
      const ex = dirFromVec(car.x - jx, car.z - jz);
      const en = this.entry.d;
      if (ex !== en && ex !== (en + 2) % 4 && loc.type === 'road') {
        const cross = DIRS[en][0] * DIRS[ex][1] - DIRS[en][1] * DIRS[ex][0];
        const need = cross < 0 ? 'L' : 'R';
        if (t - this.indOn[need] > 6) this.penalty('signal', `Turned ${need === 'L' ? 'left' : 'right'} without signalling`, 5);
        g.cancelIndicator();
      }
      this.entry = null;
    }

    // keep to the correct side of the road
    if (loc.type === 'road' && speed > 2 && car.vx > 0) {
      const along = loc.axis === 0 ? wx : wz;
      const d = loc.axis === 0 ? (along > 0 ? 0 : 2) : (along > 0 ? 1 : 3);
      const r = rightOf(d);
      const lat = loc.axis === 0 ? (car.z - loc.rc) * r[1] : (car.x - loc.rc) * r[0];
      if (lat * W.side < -0.6) {
        this.wrongT += dt;
        if (this.wrongT > 1.2) this.penalty('wrong', 'Driving on the wrong side of the road', 15, 6);
      } else this.wrongT = 0;
    } else this.wrongT = 0;

    // pavement
    const onWalk = (loc.type === 'block' && loc.block.type !== 'lot') || loc.type === 'outside';
    if (onWalk && speed > 0.5) {
      this.walkT += dt;
      if (this.walkT > 0.4) this.penalty('walk', 'Driving on the pavement', 10, 5);
    } else this.walkT = 0;
    this.prev = loc;
  }
}
