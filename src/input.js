import { clamp } from './config.js';

/** Keyboard, touch and gamepad input merged into one driver input state. */
export class Input {
  constructor() {
    this.keys = new Set();
    this.out = { throttle: 0, brake: 0, steer: 0, handbrake: false, horn: false };
    this.kThrottle = 0; this.kBrake = 0; this.kSteer = 0;
    this.touch = { steer: 0, gas: 0, brake: 0, hand: false, horn: false, nos: false, active: false };
    this.raceMode = false;
    this.actions = []; // one-shot actions: 'P','R','N','D','indL','indR','hazard','lights','camera','pause'
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      this.keys.add(k);
      const map = { '1': 'P', '2': 'R', '3': 'N', '4': 'D', q: 'indL', e: 'indR', z: 'hazard', l: 'lights', c: 'camera', escape: 'pause', p: 'pause' };
      const raceMap = { q: 'shiftDown', e: 'shiftUp', r: 'reset', m: 'manual', c: 'camera', l: 'lights', escape: 'pause', p: 'pause' };
      const a = this.raceMode ? raceMap[k] : map[k];
      if (a) this.actions.push(a);
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    window.addEventListener('blur', () => this.keys.clear());
  }
  has(...k) { return k.some((x) => this.keys.has(x)); }

  bindTouch(root) {
    const wheel = root.querySelector('#wheel');
    let wheelPointer = null, startAng = 0, baseAng = 0, ang = 0;
    const center = () => { const r = wheel.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
    const angle = (e) => { const c = center(); return Math.atan2(e.clientX - c[0], -(e.clientY - c[1])); };
    wheel.addEventListener('pointerdown', (e) => {
      wheelPointer = e.pointerId; wheel.setPointerCapture(e.pointerId);
      startAng = angle(e); baseAng = ang; this.touch.active = true; e.preventDefault();
    });
    wheel.addEventListener('pointermove', (e) => {
      if (e.pointerId !== wheelPointer) return;
      let da = angle(e) - startAng;
      while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
      ang = clamp(baseAng + da, -Math.PI * 1.25, Math.PI * 1.25);
      // keep tracking across the ±180° seam
      startAng = angle(e); baseAng = ang;
      this.touch.steer = -ang / (Math.PI * 1.25);
      wheel.style.transform = `rotate(${ang}rad)`;
    });
    const release = (e) => {
      if (e.pointerId !== wheelPointer) return;
      wheelPointer = null;
      // self-centring
      const start = ang, t0 = performance.now();
      const anim = () => {
        if (wheelPointer !== null) return;
        const k = Math.min(1, (performance.now() - t0) / 350);
        ang = start * (1 - k);
        this.touch.steer = -ang / (Math.PI * 1.25);
        wheel.style.transform = `rotate(${ang}rad)`;
        if (k < 1) requestAnimationFrame(anim);
      };
      anim();
    };
    wheel.addEventListener('pointerup', release);
    wheel.addEventListener('pointercancel', release);

    const pedal = (id, key) => {
      const el = root.querySelector(id);
      const set = (e) => {
        const r = el.getBoundingClientRect();
        this.touch[key] = clamp(1.15 - ((e.clientY - r.top) / r.height) * 0.75, 0.3, 1);
      };
      el.addEventListener('pointerdown', (e) => { el.setPointerCapture(e.pointerId); set(e); el.classList.add('down'); this.touch.active = true; e.preventDefault(); });
      el.addEventListener('pointermove', (e) => { if (this.touch[key] > 0) set(e); });
      const up = () => { this.touch[key] = 0; el.classList.remove('down'); };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    };
    pedal('#gas', 'gas'); pedal('#brake', 'brake');
    const hold = (id, key) => {
      const el = root.querySelector(id);
      el.addEventListener('pointerdown', (e) => { this.touch[key] = true; el.classList.add('down'); e.preventDefault(); });
      const up = () => { this.touch[key] = false; el.classList.remove('down'); };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
    };
    hold('#hand', 'hand'); hold('#horn', 'horn'); hold('#nosBtn', 'nos');
    root.querySelectorAll('[data-action]').forEach((el) => {
      el.addEventListener('pointerdown', (e) => { this.actions.push(el.dataset.action); e.preventDefault(); e.stopPropagation(); });
    });
  }

  update(dt) {
    const o = this.out;
    // keyboard: throttle/brake ramp in so a short tap gives a gentle input
    const up = this.has('arrowup', 'w'), down = this.has('arrowdown', 's');
    const gentle = !this.raceMode && this.has('shift');
    this.kThrottle = up ? Math.min(1, this.kThrottle + dt * (gentle ? 0.6 : this.raceMode ? 6 : 2.2)) : Math.max(0, this.kThrottle - dt * 6);
    if (up && gentle) this.kThrottle = Math.min(this.kThrottle, 0.45);
    this.kBrake = down ? Math.min(1, this.kBrake + dt * 3) : Math.max(0, this.kBrake - dt * 8);
    const left = this.has('arrowleft', 'a'), right = this.has('arrowright', 'd');
    const target = (left ? 1 : 0) - (right ? 1 : 0);
    const rate = target === 0 ? 3.5 : Math.sign(target) !== Math.sign(this.kSteer) && this.kSteer !== 0 ? 5 : 1.8;
    this.kSteer += clamp(target - this.kSteer, -rate * dt, rate * dt);

    let gp = null;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected) { gp = p; break; }
    let gT = 0, gB = 0, gS = 0, gH = false;
    if (gp) {
      gS = -(Math.abs(gp.axes[0]) > 0.08 ? gp.axes[0] : 0);
      gT = gp.buttons[7] ? gp.buttons[7].value : 0;
      gB = gp.buttons[6] ? gp.buttons[6].value : 0;
      gH = gp.buttons[0] && gp.buttons[0].pressed;
    }
    const t = this.touch;
    o.throttle = Math.max(this.kThrottle, t.gas, gT);
    o.brake = Math.max(this.kBrake, t.brake, gB);
    o.steer = clamp(this.kSteer + t.steer + gS, -1, 1);
    o.handbrake = this.has(' ') || t.hand || gH;
    o.horn = this.has('h') || t.horn;
    o.nos = this.raceMode && (this.has('shift', 'n') || t.nos || (gp && gp.buttons[1] && gp.buttons[1].pressed));
    o.up = up || t.gas > 0 || gT > 0.1;
    o.down = down || t.brake > 0 || gB > 0.1;
    return o;
  }
  takeActions() { const a = this.actions; this.actions = []; return a; }
}
