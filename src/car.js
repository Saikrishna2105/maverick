import { clamp, lerp, smoothstep } from './config.js';

const GRAV = 9.81;
const TORQUE = [[0, 60], [800, 95], [1500, 118], [2500, 136], [4000, 150], [5200, 146], [6000, 132], [6800, 110]];
function engineTorque(rpm) {
  for (let i = 1; i < TORQUE.length; i++) {
    if (rpm <= TORQUE[i][0]) {
      const a = TORQUE[i - 1], b = TORQUE[i];
      return lerp(a[1], b[1], (rpm - a[0]) / (b[0] - a[0]));
    }
  }
  return 100;
}

/**
 * Dynamic bicycle-model car with an automatic gearbox, front-wheel drive,
 * load transfer, a friction circle per axle, ABS, handbrake and idle creep.
 * Body frame: vx forward, vy to the left. Heading h: forward = (sin h, cos h).
 */
export class CarPhysics {
  constructor() {
    this.m = 1250; this.I = 1950; this.a = 1.15; this.b = 1.45; this.L = 2.6; this.hcg = 0.55;
    this.Cf = 72000; this.Cr = 82000; this.mu = 1.0;
    this.R = 0.31; this.gears = [3.45, 2.05, 1.38, 1.03, 0.82, 0.68]; this.final = 3.9; this.revRatio = 3.3;
    this.maxSteer = 0.53; this.idle = 800; this.redline = 6500;
    this.tank = 45;
    this.reset(0, 0, 0);
  }
  reset(x, z, h) {
    this.x = x; this.z = z; this.h = h;
    this.vx = 0; this.vy = 0; this.r = 0; this.ax = 0; this.ay = 0;
    this.steer = 0; this.rpm = this.idle; this.gear = 1; this.selector = 'P';
    this.shiftTimer = 0; this.fuel = this.tank * 0.8; this.fuelUsed = 0; this.odo = 0;
    this.slipF = 0; this.slipR = 0; this.wheelSpin = 0; this.damage = 0; this.engineOn = true;
    this.inp = { throttle: 0, brake: 0, steer: 0, handbrake: false };
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
    const steerTarget = inp.steer * this.maxSteer * (1 - 0.55 * smoothstep(8, 40, vxAbs));
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
      const stall = this.idle + throttle * 2100;
      const tcActive = (sel === 'R' || this.gear === 1) && rpmW < stall;
      const target = tcActive ? Math.max(rpmW, stall) : Math.max(rpmW, this.idle);
      this.rpm = lerp(this.rpm, target, clamp(dt * 8, 0, 1));
      if (tcActive) tcSlip = clamp(1 - rpmW / this.rpm, 0, 1);
      let tq = engineTorque(this.rpm) * throttle;
      if (this.rpm > this.redline || (sel === 'R' && this.rpm > 3000)) tq = 0;
      if (this.shiftTimer > 0) tq *= 0.3;
      const mult = 1 + 1.1 * tcSlip; // torque converter multiplication
      Fdrive = (tq * mult * ratio * 0.9) / this.R;
      // idle creep through the torque converter
      if (throttle < 0.05) {
        const dir = Math.sign(ratio);
        Fdrive += dir * 1000 * clamp(1 - (this.vx * dir) / 2.2, 0, 1);
        // engine braking
        Fdrive -= Math.sign(this.vx) * (this.rpm > 1200 ? 30 * (this.rpm / 3000) * Math.abs(ratio) / this.R : 0);
      }
      // automatic shifting
      if (sel === 'D' && this.shiftTimer <= 0) {
        const up = 2300 + throttle * 3600;
        const down = 1150 + throttle * 1700;
        if (this.rpm > up && this.gear < this.gears.length && !tcActive) { this.gear++; this.shiftTimer = 0.3; }
        else if (this.gear > 1) {
          const lowerRpm = Math.abs(wheelRpm * this.gears[this.gear - 2] * this.final);
          if (this.rpm < down && lowerRpm < up - 300) { this.gear--; this.shiftTimer = 0.25; }
        }
      }
    } else {
      const target = this.idle + throttle * 5500;
      this.rpm = lerp(this.rpm, Math.min(target, this.redline), clamp(dt * (throttle > 0 ? 3 : 1.5), 0, 1));
    }

    // ----- loads -----
    const Wt = m * GRAV;
    const transfer = (m * this.ax * this.hcg) / L;
    const Nf = Math.max(0.2 * Wt, (Wt * b) / L - transfer);
    const Nr = Math.max(0.2 * Wt, (Wt * a) / L + transfer);

    // ----- brakes (with ABS: never exceed available grip) -----
    let brake = inp.brake;
    let parked = false;
    if (sel === 'P') { parked = true; }
    const brakeMax = 11500 * brake;
    const sgn = vxAbs > 0.05 ? Math.sign(this.vx) : 0;
    let Fbf = Math.min(brakeMax * 0.65, this.mu * Nf * 0.98) * sgn;
    let Fbr = Math.min(brakeMax * 0.35, this.mu * Nr * 0.98) * sgn;

    // ----- front axle (drive + steer) in wheel frame -----
    const cd = Math.cos(d), sd = Math.sin(d);
    const vfx = this.vx, vfy = this.vy + a * this.r;
    const fLong = vfx * cd + vfy * sd;
    const fLat = -vfx * sd + vfy * cd;
    let FxF = Fdrive - Fbf;
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
      FxR = -Fbr;
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
    const drag = 0.42;
    const roll = 160 * clamp(this.vx / 0.4, -1, 1);
    const Fx = FxFb + FxR - drag * this.vx * v - roll;
    const Fy = FyFb + FyR - drag * this.vy * v;
    const torque = a * FyFb - b * FyR;

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
    const power = Math.max(0, engineTorque(this.rpm) * throttle * (this.rpm * 2 * Math.PI / 60));
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
