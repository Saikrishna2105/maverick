import { clamp, lerp, smoothstep } from './config.js';

const GRAV = 9.81;
// Normalised torque curve: x = rpm / redline, y = fraction of peak torque.
const SHAPE = [[0, 0.4], [0.12, 0.63], [0.23, 0.79], [0.38, 0.91], [0.6, 1.0], [0.78, 0.97], [0.9, 0.88], [1.0, 0.75], [1.1, 0.6]];
function torqueFrac(x) {
  for (let i = 1; i < SHAPE.length; i++) {
    if (x <= SHAPE[i][0]) {
      const a = SHAPE[i - 1], b = SHAPE[i];
      return lerp(a[1], b[1], (x - a[0]) / (b[0] - a[0]));
    }
  }
  return 0.6;
}

/**
 * Vehicle specifications. torque = peak Nm, fd = share of drive on the front axle
 * (1 = FWD, 0 = RWD), vmax = speed at redline in top gear (m/s), cl = downforce coefficient.
 */
export const SPECS = {
  hatch:  { name: 'City Hatch', m: 1250, I: 1950, torque: 150, redline: 6500, fd: 1, mu: 1.0, Cf: 72000, Cr: 82000, gears: [3.45, 2.05, 1.38, 1.03, 0.82, 0.68], vmax: 53, drag: 0.42, cl: 0, brake: 11500, tank: 45 },
  kestrel: { name: 'Kestrel RS', m: 1320, I: 2000, torque: 340, redline: 7600, fd: 0.45, mu: 1.12, Cf: 88000, Cr: 96000, gears: [3.3, 2.15, 1.6, 1.25, 1.0, 0.82], vmax: 72, drag: 0.40, cl: 0.25, brake: 15000, tank: 60, nos: 3800 },
  raptor: { name: 'Raptor V8', m: 1620, I: 2700, torque: 590, redline: 6600, fd: 0, mu: 1.04, Cf: 90000, Cr: 92000, gears: [2.95, 1.95, 1.43, 1.12, 0.92, 0.78], vmax: 78, drag: 0.46, cl: 0.1, brake: 15500, tank: 70, nos: 4500 },
  vortex: { name: 'Vortex GT', m: 1460, I: 2300, torque: 530, redline: 8200, fd: 0, mu: 1.2, Cf: 100000, Cr: 112000, gears: [3.1, 2.1, 1.6, 1.28, 1.05, 0.88], vmax: 86, drag: 0.40, cl: 0.55, brake: 17500, tank: 70, nos: 4800 },
  phantom: { name: 'Phantom S', m: 1530, I: 2350, torque: 760, redline: 8600, fd: 0.38, mu: 1.28, Cf: 115000, Cr: 125000, gears: [3.0, 2.1, 1.62, 1.3, 1.07, 0.9], vmax: 95, drag: 0.39, cl: 0.9, brake: 19500, tank: 75, nos: 5500 },
  police: { name: 'Interceptor', m: 1700, I: 2800, torque: 600, redline: 6800, fd: 0.4, mu: 1.12, Cf: 95000, Cr: 100000, gears: [3.0, 2.0, 1.45, 1.15, 0.95, 0.8], vmax: 78, drag: 0.45, cl: 0.2, brake: 16500, tank: 80, nos: 2500 },
};

/**
 * Dynamic bicycle-model car with an automatic gearbox, front-wheel drive,
 * load transfer, a friction circle per axle, ABS, handbrake and idle creep.
 * Body frame: vx forward, vy to the left. Heading h: forward = (sin h, cos h).
 */
export class CarPhysics {
  constructor(spec = SPECS.hatch) {
    this.spec = spec;
    this.m = spec.m; this.I = spec.I; this.a = 1.2; this.b = 1.45; this.L = 2.65; this.hcg = spec.cl > 0.3 ? 0.47 : 0.53;
    this.Cf = spec.Cf; this.Cr = spec.Cr; this.mu = spec.mu; this.muBase = spec.mu;
    this.R = 0.32; this.gears = spec.gears; this.revRatio = 3.3;
    this.redline = spec.redline; this.idle = 850;
    // final drive chosen so top gear at redline = vmax
    this.final = ((this.redline * 2 * Math.PI) / 60 * this.R) / (spec.vmax * this.gears[this.gears.length - 1]);
    this.maxSteer = 0.53; this.tank = spec.tank; this.fd = spec.fd;
    this.manual = false; this.nosForce = spec.nos || 0; this.assist = spec.nos ? 3.5 : 0;
    this.reset(0, 0, 0);
  }
  shift(dir) {
    if (this.selector !== 'D') return;
    const g = clamp(this.gear + dir, 1, this.gears.length);
    if (g !== this.gear) { this.gear = g; this.shiftTimer = 0.18; this.justShifted = dir; }
  }
  reset(x, z, h) {
    this.x = x; this.z = z; this.h = h;
    this.vx = 0; this.vy = 0; this.r = 0; this.ax = 0; this.ay = 0;
    this.steer = 0; this.rpm = this.idle; this.gear = 1; this.selector = 'P';
    this.shiftTimer = 0; this.fuel = this.tank * 0.8; this.fuelUsed = 0; this.odo = 0;
    this.slipF = 0; this.slipR = 0; this.wheelSpin = 0; this.damage = 0; this.engineOn = true;
    this.nos = 1; this.nosOn = false; this.justShifted = 0; this.limiter = false;
    this.inp = { throttle: 0, brake: 0, steer: 0, handbrake: false, nos: false };
  }
  get speed() { return Math.hypot(this.vx, this.vy); }

  /** Request a gear selector position. Returns an error message or null. */
  select(sel) {
    if (sel === this.selector) return null;
    const v = this.vx;
    if ((sel === 'R' && v > 1.0) || (sel === 'D' && v < -1.0)) return 'Stop the car before changing direction';
    if (sel === 'P' && Math.abs(v) > 0.8) return 'Stop the car before selecting P';
    this.selector = sel;
    if (sel === 'D') this.gear = 1;
    this.shiftTimer = 0.25;
    return null;
  }

  step(dt) {
    const inp = this.inp;
    const m = this.m, a = this.a, b = this.b, L = this.L;
    let throttle = this.fuel > 0 ? inp.throttle : 0;
    const vxAbs = Math.abs(this.vx);

    // steering: rate-limited, slightly reduced authority at speed (like real steering ratio feel)
    const steerTarget = inp.steer * this.maxSteer * (1 - 0.72 * smoothstep(8, 55, vxAbs));
    const rate = 2.2;
    this.steer += clamp(steerTarget - this.steer, -rate * dt, rate * dt);
    const d = this.steer;

    // ----- drivetrain -----
    const sel = this.selector;
    let ratio = 0;
    if (sel === 'D') ratio = this.gears[this.gear - 1] * this.final;
    else if (sel === 'R') ratio = -this.revRatio * this.final;
    const wheelRpm = (this.vx / this.R) * 60 / (2 * Math.PI);
    let Fdrive = 0;
    let tcSlip = 0;
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    if (ratio !== 0) {
      const rpmW = Math.abs(wheelRpm * ratio);
      const stall = this.idle + throttle * (this.redline * 0.36);
      const tcActive = (sel === 'R' || this.gear === 1) && rpmW < stall;
      const target = tcActive ? Math.max(rpmW, stall) : Math.max(rpmW, this.idle);
      this.rpm = lerp(this.rpm, target, clamp(dt * 8, 0, 1));
      if (tcActive) tcSlip = clamp(1 - rpmW / this.rpm, 0, 1);
      let tq = this.spec.torque * torqueFrac(this.rpm / this.redline) * throttle;
      this.limiter = this.rpm > this.redline;
      if (this.limiter || (sel === 'R' && this.rpm > 3000)) tq = 0;
      if (this.shiftTimer > 0) tq *= 0.3;
      const mult = 1 + 1.1 * tcSlip; // torque converter multiplication
      Fdrive = (tq * mult * ratio * 0.9) / this.R;
      this.nosOn = !!(inp.nos && this.nosForce > 0 && this.nos > 0 && sel === 'D' && throttle > 0.3);
      if (this.nosOn) { Fdrive += this.nosForce; this.nos = Math.max(0, this.nos - dt * 0.22); }
      // idle creep through the torque converter
      if (throttle < 0.05) {
        const dir = Math.sign(ratio);
        Fdrive += dir * 1000 * clamp(1 - (this.vx * dir) / 2.2, 0, 1);
        // engine braking
        Fdrive -= Math.sign(this.vx) * (this.rpm > 1200 ? 30 * (this.rpm / 3000) * Math.abs(ratio) / this.R : 0);
      }
      // automatic shifting
      if (sel === 'D' && this.shiftTimer <= 0 && !this.manual) {
        const up = this.redline * (0.36 + throttle * 0.56);
        const down = this.redline * (0.18 + throttle * 0.27);
        if (this.rpm > up && this.gear < this.gears.length && !tcActive) { this.gear++; this.shiftTimer = 0.22; this.justShifted = 1; }
        else if (this.gear > 1) {
          const lowerRpm = Math.abs(wheelRpm * this.gears[this.gear - 2] * this.final);
          if (this.rpm < down && lowerRpm < up - 300) { this.gear--; this.shiftTimer = 0.2; this.justShifted = -1; }
        }
      }
    } else {
      this.nosOn = false;
      const target = this.idle + throttle * this.redline * 0.85;
      this.rpm = lerp(this.rpm, Math.min(target, this.redline), clamp(dt * (throttle > 0 ? 3 : 1.5), 0, 1));
    }

    // ----- loads -----
    const Wt = m * GRAV + this.spec.cl * this.vx * this.vx;
    const transfer = (m * this.ax * this.hcg) / L;
    const Nf = Math.max(0.2 * Wt, (Wt * b) / L - transfer);
    const Nr = Math.max(0.2 * Wt, (Wt * a) / L + transfer);

    // ----- brakes (with ABS: never exceed available grip) -----
    let brake = inp.brake;
    let parked = false;
    if (sel === 'P') { parked = true; }
    const brakeMax = this.spec.brake * brake;
    const sgn = vxAbs > 0.05 ? Math.sign(this.vx) : 0;
    let Fbf = Math.min(brakeMax * 0.65, this.mu * Nf * 0.98) * sgn;
    let Fbr = Math.min(brakeMax * 0.35, this.mu * Nr * 0.98) * sgn;

    // ----- front axle (drive + steer) in wheel frame -----
    const cd = Math.cos(d), sd = Math.sin(d);
    const vfx = this.vx, vfy = this.vy + a * this.r;
    const fLong = vfx * cd + vfy * sd;
    const fLat = -vfx * sd + vfy * cd;
    let FxF = Fdrive * this.fd - Fbf;
    if (this.assist > 0 && FxF > 0) FxF = Math.min(FxF, this.mu * Nf * (0.9 - clamp(this.slipF * 3, 0, 0.4)));
    const maxF = this.mu * Nf;
    let wheelspin = 0;
    if (Math.abs(FxF) > maxF) { wheelspin = Math.abs(FxF) / maxF - 1; FxF = Math.sign(FxF) * maxF; }
    const alphaF = Math.atan2(fLat, Math.max(Math.abs(fLong), 0.6));
    let FyF = -this.Cf * alphaF;
    const latMaxF = Math.sqrt(Math.max(0, maxF * maxF - FxF * FxF));
    if (Math.abs(FyF) > latMaxF) FyF = Math.sign(FyF) * latMaxF;
    this.slipF = Math.abs(alphaF);

    // ----- rear axle -----
    const vrLat = this.vy - b * this.r;
    let FxR, FyR;
    const maxR = this.mu * Nr;
    if (inp.handbrake && Math.hypot(this.vx, vrLat) > 0.3) {
      const vmag = Math.hypot(this.vx, vrLat);
      const k = 0.75 * maxR;
      FxR = (-this.vx / vmag) * k;
      FyR = (-vrLat / vmag) * k;
      this.slipR = 1;
    } else {
      FxR = Fdrive * (1 - this.fd) - Fbr;
      // traction control: keep some rear grip for cornering (switch off with the handbrake for drifts)
      if (this.assist > 0 && FxR > 0) {
        const cap = maxR * (0.88 - clamp(this.slipR * 4, 0, 0.55));
        FxR = Math.min(FxR, cap);
      }
      if (Math.abs(FxR) > maxR) { wheelspin = Math.max(wheelspin, Math.abs(FxR) / maxR - 1); FxR = Math.sign(FxR) * maxR; }
      const alphaR = Math.atan2(vrLat, Math.max(vxAbs, 0.6));
      FyR = -this.Cr * alphaR;
      const latMaxR = Math.sqrt(Math.max(0, maxR * maxR - FxR * FxR));
      if (Math.abs(FyR) > latMaxR) FyR = Math.sign(FyR) * latMaxR;
      this.slipR = Math.abs(alphaR);
    }
    this.wheelSpin = wheelspin;

    // ----- body forces -----
    const FxFb = FxF * cd - FyF * sd;
    const FyFb = FxF * sd + FyF * cd;
    const v = Math.hypot(this.vx, this.vy);
    const drag = this.spec.drag;
    const roll = 160 * clamp(this.vx / 0.4, -1, 1);
    const Fx = FxFb + FxR - drag * this.vx * v - roll;
    const Fy = FyFb + FyR - drag * this.vy * v;
    let torque = a * FyFb - b * FyR;
    // stability assist (like ESP): gently pulls yaw rate toward what the steering asks for
    if (this.assist > 0 && Math.abs(this.vx) > 6) {
      const lim = (this.mu * GRAV * 1.15) / Math.abs(this.vx);
      const rT = clamp((this.vx * Math.tan(d)) / L, -lim, lim);
      const k = inp.handbrake ? 0.15 : 1;
      const excess = this.r - rT;
      if (this.r * excess > 0) torque += -this.assist * k * this.I * excess;
    }

    this.ax = Fx / m; this.ay = Fy / m;
    let vx = this.vx + (Fx / m + this.vy * this.r) * dt;
    let vy = this.vy + (Fy / m - this.vx * this.r) * dt;
    let r = this.r + (torque / this.I) * dt;

    // stop exactly instead of oscillating around zero when braking / parked
    const holding = (brake > 0.05 && Math.abs(vx) < 0.35 && Math.abs(Fdrive) < brakeMax) || (parked && Math.abs(vx) < 0.8) || (inp.handbrake && Math.abs(vx) < 0.5 && Math.abs(Fdrive) < 3000);
    if (holding) { vx = 0; vy *= 0.5; r *= 0.5; }
    if (brake > 0.05 && Math.sign(vx) !== Math.sign(this.vx) && this.vx !== 0) vx = 0;

    // low-speed blend toward kinematic model (dynamic model is unstable near 0)
    const k = smoothstep(1.0, 4.0, Math.abs(vx));
    const rKin = (vx * Math.tan(d)) / L;
    const vyKin = rKin * b;
    this.r = lerp(rKin, r, k);
    this.vy = lerp(vyKin, vy, k);
    this.vx = vx;

    // ----- integrate pose -----
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    const wx = sh * this.vx + ch * this.vy;
    const wz = ch * this.vx - sh * this.vy;
    this.x += wx * dt; this.z += wz * dt; this.h += this.r * dt;
    this.odo += Math.abs(this.vx) * dt;

    // ----- fuel: brake specific consumption ~ 25% efficiency -----
    const power = Math.max(0, this.spec.torque * torqueFrac(this.rpm / this.redline) * throttle * (this.rpm * 2 * Math.PI / 60));
    const lps = 0.00022 + power / (0.26 * 34.2e6);
    this.fuel = Math.max(0, this.fuel - lps * dt);
    this.fuelUsed += lps * dt;
  }

  worldVel() {
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    return [sh * this.vx + ch * this.vy, ch * this.vx - sh * this.vy];
  }
  setWorldVel(wx, wz) {
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    this.vx = wx * sh + wz * ch;
    this.vy = wx * ch - wz * sh;
  }
}
