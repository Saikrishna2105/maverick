import * as THREE from 'three';
import { CFG, roadCoord, clamp, wrapAngle, mulberry32 } from './config.js';
import { CarPhysics, SPECS } from './car.js';
import { Path, Driver, chaseWaypoint, lineOfSight } from './ai.js';
import { buildCar } from './carfactory.js';
import { makeOBB, obbOverlap, resolveDynamic, resolveStatic, collideWorld } from './collision.js';

export const CARS = [
  { id: 'kestrel', type: 'tuner', name: 'Kestrel RS', desc: 'AWD turbo tuner. Grippy and forgiving.', unlock: 0, color: 0x1d5fe0 },
  { id: 'raptor', type: 'muscle', name: 'Raptor V8', desc: 'RWD muscle. Huge torque, loves to slide.', unlock: 0, color: 0xc0181f },
  { id: 'vortex', type: 'gt', name: 'Vortex GT', desc: 'RWD grand tourer with downforce. Fast and precise.', unlock: 2, color: 0xff6a00 },
  { id: 'phantom', type: 'super', name: 'Phantom S', desc: 'AWD hypercar. 0–100 in 2.3 s.', unlock: 4, color: 0xe8e8e8 },
];
export const PAINTS = [0x1d5fe0, 0xc0181f, 0xff6a00, 0xe8e8e8, 0x16181c, 0xf2c200, 0x1f9e55, 0x7a2fd0, 0x8a9198];
const RIVAL_NAMES = ['Viper', 'Ghost', 'Blaze', 'Nova', 'Jinx', 'Rook'];

// Routes use junction indices (fractions allowed, e.g. 6.6 = 60% of the way from junction 6 to 7).
export const EVENTS = [
  { id: 'harbor', kind: 'sprint', name: 'Harbor Run', tod: 'sunset', rivals: 3, skill: 0.9, traffic: 14, route: [[0, 6.6], [0, 4], [3, 4], [3, 1], [7, 1], [7, 0.4]], desc: 'Point-to-point sprint at golden hour. Beat 3 rivals to the finish.' },
  { id: 'neon', kind: 'circuit', name: 'Neon Loop', tod: 'night', rivals: 3, skill: 0.93, traffic: 12, laps: 2, route: [[1, 1], [5, 1], [5, 3], [3, 3], [3, 6], [1, 6]], desc: 'Two laps through downtown after dark.' },
  { id: 'slide', kind: 'drift', name: 'Slide Zone', tod: 'sunset', rivals: 0, traffic: 0, laps: 3, target: 25000, time: 200, route: [[2, 2], [4, 2], [4, 4], [2, 4]], desc: 'Drift for points. Hold long, fast slides to build your multiplier. Handbrake starts a drift.' },
  { id: 'radar', kind: 'speedtrap', name: 'Radar Alley', tod: 'day', rivals: 0, traffic: 10, target: 620, route: [[7, 6.5], [7, 3], [4, 3], [4, 0], [0.4, 0]], desc: 'Hit the 4 speed cameras as fast as you can. Total must beat 620 km/h.' },
  { id: 'pursuit', kind: 'pursuit', name: 'Hot Pursuit', tod: 'day', rivals: 0, traffic: 14, cops: 2, time: 240, start: [3, 3.5], desc: 'The police are already on you. Break line of sight and lose them.' },
  { id: 'downtown', kind: 'sprint', name: 'Downtown Rush', tod: 'day', rivals: 3, skill: 1.0, traffic: 22, heat: true, route: [[7, 0.5], [7, 2], [2, 2], [2, 5], [5, 5], [5, 7], [0.5, 7]], desc: 'Heavy traffic, hard rivals, and the police are patrolling.' },
  { id: 'grandprix', kind: 'circuit', name: 'Midnight Ring', tod: 'night', rivals: 3, skill: 1.04, traffic: 10, laps: 2, route: [[0, 0], [7, 0], [7, 7], [0, 7]], desc: 'Flat-out laps of the outer ring road. Top speed matters.' },
  { id: 'roam', kind: 'roam', name: 'Free Roam', tod: 'sunset', rivals: 0, traffic: 22, cops: 2, start: [3, 3.5], desc: 'Cruise the city. Speed past a patrol car and you will have company.' },
];

const routePts = (r) => r.map(([i, j]) => [roadCoord(i), roadCoord(j)]);

function gateMesh() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xff7a1a, emissiveIntensity: 4 });
  const w = CFG.ROAD_HALF * 2 + 1;
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.25, 5, 0.25), mat); p.position.set(s * w / 2, 2.5, 0); g.add(p); }
  const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.25, 0.25), mat); top.position.y = 5; g.add(top);
  g.mat = mat;
  return g;
}

/** Runs a street-racing event: grid, AI rivals, police, scoring. */
export class RaceManager {
  constructor(ctx, ev) {
    this.ctx = ctx; this.ev = ev; this.rand = mulberry32(99 + ev.id.length * 13);
    this.t = -3; // countdown
    this.state = 'countdown';
    this.rivals = []; this.cops = [];
    this.path = ev.route ? new Path(routePts(ev.route), ev.kind === 'circuit' || ev.kind === 'drift') : null;
    this.laps = ev.laps || 1;
    this.player = { s: 0, lap: 0, prevS: 0, finished: false, time: 0 };
    this.drift = { score: 0, combo: 0, mult: 1, active: 0, idle: 0 };
    this.traps = []; this.trapTotal = 0;
    this.heat = { on: false, level: 0, cool: 0, bust: 0, seen: 0, spawnT: 0, evaded: 0 };
    this.lapTimes = []; this.lapStart = 0;
    this.messages = [];
  }
  gridPose(slot) {
    const P = this.path;
    const row = Math.floor(slot / 2), col = slot % 2;
    const s = 26 - row * 9;
    const [x, z, h] = P.at(s);
    const lat = col ? -2.2 : 2.2;
    return { x: x + Math.cos(h) * lat, z: z - Math.sin(h) * lat, h, s };
  }
  setup(playerCar) {
    const { scene } = this.ctx; const ev = this.ev;
    if (this.path) {
      const pp = this.gridPose(ev.rivals); // player starts at the back of the grid
      playerCar.reset(pp.x, pp.z, pp.h); playerCar.select('D');
      this.player.s = pp.s; this.player.prevS = pp.s;
      const pool = CARS.map((c) => c);
      for (let i = 0; i < ev.rivals; i++) {
        const spec = pool[(i + 1 + this.ctx.carIndex) % pool.length];
        const car = new CarPhysics(SPECS[spec.id]);
        const g = this.gridPose(i);
        car.reset(g.x, g.z, g.h);
        const color = [0xd2d6dc, 0x16181c, 0xf2c200, 0x1f9e55, 0x7a2fd0][i % 5];
        const mesh = buildCar(spec.type, color, { darkRims: i % 2 === 0, caliper: 0xf2c200 });
        scene.add(mesh);
        const d = new Driver(car, ev.skill * (0.96 + i * 0.03));
        d.s = g.s; d.prevS = g.s;
        this.rivals.push({ car, mesh, driver: d, name: RIVAL_NAMES[i], spin: 0, finished: false, time: 0, len: 2.3, key: 'r' + i });
      }
      // checkpoint gates at corners + finish
      this.gates = [];
      const corners = ev.route.slice(1);
      for (const [i, j] of corners) {
        const pr = this.path.project(roadCoord(i), roadCoord(j), 0, this.path.n);
        const g = gateMesh();
        const [x, z, h] = this.path.at(Math.max(0, pr.s - (this.path.closed ? 18 : 0)));
        g.position.set(x, 0, z); g.rotation.y = h;
        scene.add(g); this.gates.push({ s: pr.s, mesh: g });
      }
      if (ev.kind === 'speedtrap') {
        // one camera near the end of each straight (fastest point before braking)
        const cs = [0, ...corners.map(([i, j]) => this.path.project(roadCoord(i), roadCoord(j), 0, this.path.n).s)];
        const trapS = [];
        for (let k = 1; k < cs.length; k++) trapS.push(cs[k - 1] + (cs[k] - cs[k - 1]) * (k === cs.length - 1 ? 0.8 : 0.62));
        for (const s of trapS) {
          const [x, z, h] = this.path.at(s);
          const pole = new THREE.Group();
          const m = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5, 8), new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.8, roughness: 0.3 }));
          m.position.y = 2.5; pole.add(m);
          const cam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.7), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, emissive: 0x2288ff, emissiveIntensity: 3 }));
          cam.position.set(0, 5, 0); pole.add(cam);
          pole.position.set(x + Math.cos(h) * (CFG.ROAD_HALF + 0.6), 0, z - Math.sin(h) * (CFG.ROAD_HALF + 0.6));
          scene.add(pole);
          this.traps.push({ s, mesh: pole, cam, hit: null });
        }
      }
    } else {
      const [i, j] = ev.start;
      playerCar.reset(roadCoord(i) - CFG.LANE_OFF, roadCoord(j), 0); playerCar.select('D');
    }
    for (let k = 0; k < (ev.cops || 0); k++) this.spawnCop(playerCar, ev.kind === 'pursuit' ? 85 : 160, ev.kind === 'pursuit' ? 150 : 300);
    if (ev.kind === 'pursuit') { this.heat.on = true; this.heat.level = 2; this.t = -3; }
    if (ev.heat) for (let k = 0; k < 2; k++) this.spawnCop(playerCar, 200, 380);
    if (!this.path) this.t = ev.kind === 'roam' ? 0 : this.t;
  }
  spawnCop(player, dmin, dmax) {
    const N = CFG.N;
    let best = null;
    for (let tries = 0; tries < 80; tries++) {
      const i = (this.rand() * (N + 1)) | 0, j = (this.rand() * (N + 1)) | 0;
      const x = roadCoord(i), z = roadCoord(j);
      const d = Math.hypot(x - player.x, z - player.z);
      if (d >= dmin && d <= dmax) { best = [x, z]; break; }
    }
    if (!best) return;
    const car = new CarPhysics(SPECS.police);
    car.reset(best[0], best[1], Math.atan2(player.x - best[0], player.z - best[1]));
    const mesh = buildCar('police', 0xffffff, { caliper: 0x333333 });
    this.ctx.scene.add(mesh);
    const d = new Driver(car, 1.0);
    this.copId = (this.copId || 0) + 1;
    this.cops.push({ car, mesh, driver: d, spin: 0, wp: null, len: 2.35, key: 'c' + this.copId });
    this.heat.spawnT = 0;
  }
  removeCop(c) { this.ctx.scene.remove(c.mesh); this.cops.splice(this.cops.indexOf(c), 1); }

  track(o, x, z) {
    const pr = this.path.project(x, z, o.s, 30);
    if (this.path.closed) {
      if (pr.s < o.prevS - this.path.len / 2) o.lap++;
      if (pr.s > o.prevS + this.path.len / 2) o.lap--;
    }
    o.prevS = pr.s; o.s = pr.s; o.off = pr.d;
    return o;
  }
  progress(o) { return (o.lap || 0) * (this.path ? this.path.len : 0) + o.s; }

  /** Called every frame. Returns event outcome or null. */
  update(dt, player, trafficCars) {
    const ev = this.ev, ctx = this.ctx;
    this.t += dt;
    const racing = this.t >= 0 && this.state !== 'done';
    const freeze = this.t < 0 && ev.kind !== 'roam';
    if (freeze) { player.inp.brake = 1; player.inp.handbrake = true; player.inp.nos = false; }

    // ---------- rivals ----------
    const obstacles = trafficCars.map((c) => ({ x: c.x, z: c.z, h: c.h, v: c.v }));
    const all = [player, ...this.rivals.map((r) => r.car), ...this.cops.map((c) => c.car)];
    if (this.path) this.track(this.player, player.x, player.z);
    const pProg = this.path ? this.progress(this.player) : 0;
    for (const r of this.rivals) {
      const c = r.car;
      if (freeze || r.finished) {
        c.inp.throttle = 0; c.inp.brake = 1; c.inp.steer = 0; c.inp.nos = false;
        if (r.finished) { r.driver.followPath(this.path, dt, obstacles, 0.3); }
      } else {
        const others = obstacles.concat(all.filter((o) => o !== c).map((o) => ({ x: o.x, z: o.z, h: o.h, v: o.vx })));
        const rp = this.progress(r.driver);
        const gap = pProg - rp;
        const band = clamp(1 + gap / 500, 0.88, 1.12);
        r.driver.followPath(this.path, dt, others, band);
        // no progress for a while -> put the car back on the racing line
        const prog = this.progress(r.driver);
        if (r.chkT === undefined || prog > r.chkP + 15) { r.chkT = this.t; r.chkP = prog; }
        if (this.t - r.chkT > 7) { r.driver.stuckCount = 3; r.chkT = this.t; }
        if (r.driver.stuckCount > 2) { // teleport back onto the racing line
          const [x, z, h] = this.path.at(this.path.closed ? (r.driver.s + 10) % this.path.len : Math.min(this.path.len, r.driver.s + 10)); c.reset(x, z, h); c.select('D'); r.driver.stuckCount = 0; r.driver.reverseT = 0; r.driver.offset = 0;
        }
      }
      if (racing && !r.finished && this.path) {
        const done = this.path.closed ? r.driver.lap >= this.laps : r.driver.s >= this.path.len - 6;
        if (done) { r.finished = true; r.time = this.t; }
      }
    }

    // ---------- police ----------
    this.updatePolice(dt, player, obstacles);

    // ---------- player progress & scoring ----------
    let outcome = null;
    if (racing && this.path) {
      const P = this.player;
      if (this.path.closed && P.lap > this.lapTimes.length && P.lap > 0) { this.lapTimes.push(this.t - this.lapStart); this.lapStart = this.t; if (P.lap < this.laps) ctx.msg(`LAP ${P.lap + 1}/${this.laps}`); }
      const done = this.path.closed ? P.lap >= this.laps : P.s >= this.path.len - 6;
      if (done && !P.finished) { P.finished = true; P.time = this.t; outcome = this.finishOutcome(); }
      for (const g of this.gates) {
        const ahead = this.path.closed ? ((g.s - P.s + this.path.len) % this.path.len) : g.s - P.s;
        g.mesh.visible = ahead > 0 && ahead < 260;
      }
    }
    if (racing && ev.kind === 'drift') this.updateDrift(dt, player);
    if (racing && ev.kind === 'speedtrap') {
      for (const tr of this.traps) if (!tr.hit && this.player.s >= tr.s) {
        tr.hit = Math.abs(player.vx) * 3.6; this.trapTotal += tr.hit;
        tr.cam.material.emissive.setHex(0xffffff); setTimeout(() => tr.cam.material.emissive.setHex(0x2288ff), 150);
        ctx.msg(`SPEED TRAP ${Math.round(tr.hit)} km/h`); ctx.flash();
      }
    }
    if (racing && ev.time && this.t > ev.time && !outcome) {
      if (ev.kind === 'drift') outcome = { win: this.drift.score >= ev.target, reason: this.drift.score >= ev.target ? 'Target score beaten!' : 'Time up — target score not reached' };
      else if (ev.kind === 'pursuit') outcome = { win: false, reason: 'You could not shake the police in time' };
    }
    if (ev.kind === 'pursuit' && this.heat.evaded && !outcome) outcome = { win: true, reason: 'You lost the police!' };
    if (this.heat.busted && !outcome) outcome = { win: false, reason: 'BUSTED! The police boxed you in.' };
    if (outcome) this.state = 'done';
    return outcome;
  }
  finishOutcome() {
    const ev = this.ev;
    if (ev.kind === 'drift') {
      this.drift.score += Math.round(this.drift.combo * this.drift.mult); this.drift.combo = 0;
      return { win: this.drift.score >= ev.target, reason: `Drift score ${this.drift.score.toLocaleString()} (target ${ev.target.toLocaleString()})` };
    }
    if (ev.kind === 'speedtrap') return { win: this.trapTotal >= ev.target, reason: `Speed trap total ${Math.round(this.trapTotal)} km/h (target ${ev.target})` };
    const pos = this.position();
    return { win: pos === 1, pos, reason: pos === 1 ? 'You won the race!' : `You finished ${['1st', '2nd', '3rd', '4th', '5th'][pos - 1]}` };
  }
  position() {
    if (!this.rivals.length) return 1;
    const P = this.player;
    const mine = P.finished ? 1e9 - P.time : this.progress(P);
    let pos = 1;
    for (const r of this.rivals) {
      const theirs = r.finished ? 1e9 - r.time : this.progress(r.driver);
      if (theirs > mine) pos++;
    }
    return pos;
  }
  updateDrift(dt, car) {
    const D = this.drift;
    const v = Math.abs(car.vx);
    const ang = Math.abs(Math.atan2(car.vy, Math.max(1, Math.abs(car.vx)))) * 57.3;
    if (ang > 12 && v > 8 && car.vx > 0) {
      D.active += dt; D.idle = 0;
      D.combo += dt * ang * v * 1.2;
      D.mult = Math.min(5, 1 + Math.floor(D.active / 2));
    } else {
      D.idle += dt;
      if (D.idle > 1.2 && D.combo > 0) { const pts = Math.round(D.combo * D.mult); D.score += pts; if (pts > 500) this.ctx.msg(`+${pts.toLocaleString()} DRIFT`); D.combo = 0; D.active = 0; D.mult = 1; }
    }
  }
  crash(impact) {
    if (this.ev.kind === 'drift' && impact > 2.5 && this.drift.combo > 0) { this.ctx.msg('DRIFT LOST'); this.drift.combo = 0; this.drift.active = 0; this.drift.mult = 1; }
  }

  updatePolice(dt, player, obstacles) {
    const H = this.heat, W = this.ctx.world;
    if (this.t < 0) { for (const c of this.cops) { c.car.inp.throttle = 0; c.car.inp.brake = 1; c.car.inp.steer = 0; } return; }
    const pv = player.worldVel();
    let seen = false, nearest = 1e9;
    for (const c of this.cops) {
      const car = c.car;
      const d = Math.hypot(player.x - car.x, player.z - car.z);
      nearest = Math.min(nearest, d);
      const los = d < 170 && lineOfSight(W, car.x, car.z, player.x, player.z);
      if (H.on) {
        if (los && d < 170) seen = true;
        const lead = clamp(d / 30, 0.3, 1.2);
        const tx = player.x + pv[0] * lead, tz = player.z + pv[1] * lead;
        if (los && d < 60) c.driver.seek(tx, tz, d < 14 ? Math.abs(player.vx) + 6 : 75, dt);
        else {
          const wp = chaseWaypoint(W, car.x, car.z, car.h, player.x, player.z);
          const dw = Math.hypot(wp[0] - car.x, wp[1] - car.z);
          c.driver.seek(wp[0], wp[1], dw < 30 ? 13 : 55, dt);
        }
      } else {
        // patrol: drive junction to junction
        if (!c.wp || Math.hypot(c.wp[0] - car.x, c.wp[1] - car.z) < 8) {
          const i = clamp(Math.round((car.x + CFG.OFF) / CFG.S), 0, CFG.N), j = clamp(Math.round((car.z + CFG.OFF) / CFG.S), 0, CFG.N);
          const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]].filter(([a, b]) => i + a >= 0 && i + a <= CFG.N && j + b >= 0 && j + b <= CFG.N);
          const dd = dirs[(this.rand() * dirs.length) | 0];
          c.wp = [roadCoord(i + dd[0]), roadCoord(j + dd[1])];
        }
        const dw = Math.hypot(c.wp[0] - car.x, c.wp[1] - car.z);
        c.driver.seek(c.wp[0], c.wp[1], dw < 25 ? 8 : 13, dt);
        if (los && d < 55 && Math.abs(player.vx) > 28) this.startPursuit('Speeding past a patrol car');
      }
      // stuck police: put back on a road near the player
      if (c.driver.stuckCount > 3) { c.driver.stuckCount = 0; const wp = chaseWaypoint(W, car.x, car.z, car.h, player.x, player.z); car.reset(wp[0], wp[1], car.h); car.select('D'); }
    }
    if (!H.on) return;
    if (seen) { H.cool = 0; H.seen += dt; } else H.cool += dt;
    H.level = clamp(H.level + dt * (seen ? 0.02 : 0), 1, 5);
    if (H.cool > 11) {
      H.on = false; H.evaded = true; H.cool = 0;
      this.ctx.msg('EVADED!'); this.ctx.flash('#3fd07a');
      for (const c of [...this.cops]) if (Math.hypot(c.car.x - player.x, c.car.z - player.z) > 120) this.removeCop(c);
      return;
    }
    // busted: stopped near police
    if (nearest < 10 && Math.abs(player.vx) < 3 && this.t > 6) H.bust += dt; else H.bust = Math.max(0, H.bust - dt * 0.8);
    if (H.bust > 3.5) H.busted = true;
    H.spawnT += dt;
    const maxCops = 2 + Math.floor(H.level);
    if (this.cops.length < maxCops && H.spawnT > 14) this.spawnCop(player, 110, 220);
    for (const c of [...this.cops]) if (Math.hypot(c.car.x - player.x, c.car.z - player.z) > 420) { this.removeCop(c); }
  }
  startPursuit(reason) {
    if (this.heat.on) return;
    this.heat.on = true; this.heat.level = Math.max(1, this.heat.level); this.heat.cool = 0; this.heat.bust = 0; this.heat.evaded = false;
    this.ctx.msg('PURSUIT!'); this.ctx.toast(reason);
  }

  /** Physics step for all AI-driven cars + car-to-car contacts. */
  step(dt, player, trafficCars, onImpact) {
    const W = this.ctx.world;
    const ai = [...this.rivals, ...this.cops];
    for (const a of ai) {
      a.car.step(dt);
      collideWorld(a.car, W, CFG.CAR_HL, CFG.CAR_HW, null);
    }
    const dyn = [player, ...ai.map((a) => a.car)];
    for (let i = 0; i < dyn.length; i++) for (let j = i + 1; j < dyn.length; j++) {
      const A = dyn[i], B = dyn[j];
      if (Math.abs(A.x - B.x) > 6 || Math.abs(A.z - B.z) > 6) continue;
      const c = obbOverlap(makeOBB(A.x, A.z, A.h, CFG.CAR_HL, CFG.CAR_HW), makeOBB(B.x, B.z, B.h, CFG.CAR_HL, CFG.CAR_HW));
      if (!c) continue;
      const imp = resolveDynamic(A, B, c);
      if (i === 0) {
        onImpact('racer', imp, c.px, c.pz);
        if (this.cops.some((cp) => cp.car === B) && imp > 1) { this.startPursuit('You hit a police car'); }
      }
    }
    // AI vs traffic
    for (const a of ai) for (const t of trafficCars) {
      if (Math.abs(a.car.x - t.x) > 6 || Math.abs(a.car.z - t.z) > 6) continue;
      const c = obbOverlap(makeOBB(a.car.x, a.car.z, a.car.h, CFG.CAR_HL, CFG.CAR_HW), makeOBB(t.x, t.z, t.h, CFG.CAR_HL, CFG.CAR_HW));
      if (c) { const imp = resolveStatic(a.car, c, 0.2); if (imp > 0.5) { t.stun = 4; t.v = 0; } }
    }
  }
  /** Visual update for AI cars. */
  render(dt, t, night, animateCar, fx) {
    for (const a of [...this.rivals, ...this.cops]) {
      const c = a.car;
      a.spin += (c.vx / c.R) * dt;
      a.mesh.position.set(c.x, 0, c.z); a.mesh.rotation.y = c.h;
      const sh = a.mesh.parts.shell;
      sh.rotation.x = clamp(-c.ax * 0.006, -0.05, 0.05); sh.rotation.z = clamp(c.ay * 0.008, -0.06, 0.06);
      const cop = this.cops.includes(a);
      animateCar(a.mesh, c.steer, a.spin, { head: night || (cop && this.heat.on), brake: c.inp.brake > 0.1, reverse: c.selector === 'R', siren: cop && this.heat.on }, t);
      if (fx) { fx.tyres(c, 0, a.key, dt); if (c.nosOn) fx.nitro(c, 0, a.len); }
    }
  }
  dispose() { for (const a of [...this.rivals, ...this.cops]) this.ctx.scene.remove(a.mesh); for (const g of this.gates || []) this.ctx.scene.remove(g.mesh); }
}
