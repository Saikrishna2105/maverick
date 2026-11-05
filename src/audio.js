// Procedural car audio with the Web Audio API (no sound files needed).
export class Audio {
  constructor() { this.ctx = null; this.enabled = true; }
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = this.enabled ? 0.7 : 0; this.master.connect(ctx.destination);
    // noise buffer
    const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = nb;
    const noise = () => { const s = ctx.createBufferSource(); s.buffer = nb; s.loop = true; s.start(); return s; };

    // engine: two detuned oscillators + a sub, lowpassed
    this.eFilter = ctx.createBiquadFilter(); this.eFilter.type = 'lowpass'; this.eFilter.frequency.value = 400; this.eFilter.Q.value = 2;
    this.eGain = ctx.createGain(); this.eGain.gain.value = 0.0;
    this.o1 = ctx.createOscillator(); this.o1.type = 'sawtooth';
    this.o2 = ctx.createOscillator(); this.o2.type = 'square';
    this.o3 = ctx.createOscillator(); this.o3.type = 'triangle';
    const g2 = ctx.createGain(); g2.gain.value = 0.35;
    const g3 = ctx.createGain(); g3.gain.value = 0.6;
    this.o1.connect(this.eFilter); this.o2.connect(g2).connect(this.eFilter); this.o3.connect(g3).connect(this.eFilter);
    this.eFilter.connect(this.eGain).connect(this.master);
    for (const o of [this.o1, this.o2, this.o3]) o.start();
    // tyre squeal
    const sq = noise();
    this.sqFilter = ctx.createBiquadFilter(); this.sqFilter.type = 'bandpass'; this.sqFilter.frequency.value = 1500; this.sqFilter.Q.value = 6;
    this.sqGain = ctx.createGain(); this.sqGain.gain.value = 0;
    sq.connect(this.sqFilter).connect(this.sqGain).connect(this.master);
    // road / wind noise
    const rn = noise();
    this.rnFilter = ctx.createBiquadFilter(); this.rnFilter.type = 'lowpass'; this.rnFilter.frequency.value = 500;
    this.rnGain = ctx.createGain(); this.rnGain.gain.value = 0;
    rn.connect(this.rnFilter).connect(this.rnGain).connect(this.master);
    // horn
    this.hGain = ctx.createGain(); this.hGain.gain.value = 0;
    const hf = ctx.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 1800;
    for (const f of [415, 520]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(hf); o.start(); }
    hf.connect(this.hGain).connect(this.master);
  }
  setEnabled(on) { this.enabled = on; if (this.master) this.master.gain.value = on ? 0.7 : 0; }
  update(car, throttle, slip, horn, active) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const rpm = car.rpm;
    const f = (rpm / 60) * 2; // 4-cylinder firing frequency
    this.o1.frequency.setTargetAtTime(f, t, 0.03);
    this.o2.frequency.setTargetAtTime(f * 0.5, t, 0.03);
    this.o3.frequency.setTargetAtTime(f * 0.25, t, 0.03);
    this.eFilter.frequency.setTargetAtTime(250 + throttle * 1400 + rpm * 0.12, t, 0.05);
    this.eGain.gain.setTargetAtTime(active ? 0.05 + throttle * 0.07 + rpm / 90000 : 0, t, 0.05);
    const sp = Math.abs(car.vx);
    this.sqGain.gain.setTargetAtTime(active && sp > 3 ? Math.min(0.25, Math.max(0, slip - 0.1) * 0.9) : 0, t, 0.05);
    this.rnGain.gain.setTargetAtTime(active ? Math.min(0.18, sp * 0.008) : 0, t, 0.1);
    this.rnFilter.frequency.setTargetAtTime(300 + sp * 25, t, 0.1);
    this.hGain.gain.setTargetAtTime(active && horn ? 0.12 : 0, t, 0.01);
  }
  blip(freq = 880, dur = 0.06, vol = 0.15, type = 'square') {
    if (!this.ctx || !this.enabled) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq; g.gain.value = vol;
    const t = this.ctx.currentTime;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }
  tick(on) { this.blip(on ? 1900 : 1300, 0.025, 0.08, 'square'); }
  crash(power) {
    if (!this.ctx || !this.enabled) return;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 600 + power * 120;
    const g = this.ctx.createGain(); const t = this.ctx.currentTime;
    const v = Math.min(0.9, 0.15 + power * 0.08);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    s.connect(f).connect(g).connect(this.master); s.start(t); s.stop(t + 0.55);
  }
}
