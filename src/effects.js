import * as THREE from 'three';

/** GPU point-sprite particle system (one draw call per system). */
class Particles {
  constructor(scene, max, tex, additive) {
    this.max = max; this.n = 0; this.i = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max); this.grow = new Float32Array(max);
    this.alpha = new Float32Array(max); this.a0 = new Float32Array(max);
    this.col = new Float32Array(max * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 500 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(0.5, -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); if (gl_FragColor.a < 0.01) discard; }`,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, fog: false,
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.geo = g;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, alpha, r, gg, b) {
    const i = this.i; this.i = (this.i + 1) % this.max; if (this.n < this.max) this.n++;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life; this.size[i] = size; this.grow[i] = grow; this.a0[i] = alpha;
    this.col[i * 3] = r; this.col[i * 3 + 1] = gg; this.col[i * 3 + 2] = b;
  }
  update(dt, drag = 1.5, gravity = 0) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const k = Math.max(0, 1 - drag * dt);
      this.vel[i * 3] *= k; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k - gravity * dt; this.vel[i * 3 + 2] *= k;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02) { this.pos[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.3; }
      this.size[i] += this.grow[i] * dt;
      const t = this.life[i] / this.maxLife[i];
      this.alpha[i] = this.a0[i] * Math.min(1, t * 2) * Math.min(1, (1 - t) * 8 + 0.2);
    }
    for (const a of ['position', 'size', 'alpha', 'color']) this.geo.attributes[a].needsUpdate = true;
    this.geo.setDrawRange(0, this.n);
  }
  setScale(h) { this.points.material.uniforms.scale.value = h * 0.5; }
}

/** Ribbon skid marks left by sliding tyres. */
class Skids {
  constructor(scene, max = 1500) {
    this.max = max; this.i = 0;
    this.pos = new Float32Array(max * 6 * 3); this.col = new Float32Array(max * 6 * 4);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, color: 0x000000 });
    this.mesh = new THREE.Mesh(g, m); this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    scene.add(this.mesh); this.geo = g;
    this.last = new Map();
  }
  /** key identifies a wheel; call every frame while sliding with intensity 0..1, or with null to break the trail. */
  mark(key, x, y, z, hx, hz, intensity) {
    const prev = this.last.get(key);
    if (intensity === null) { this.last.delete(key); return; }
    const w = 0.13;
    const lx = hz * w, lz = -hx * w; // perpendicular to heading
    const cur = { l: [x + lx, y, z + lz], r: [x - lx, y, z - lz] };
    if (prev && (x - prev.x) ** 2 + (z - prev.z) ** 2 > 0.09 && (x - prev.x) ** 2 + (z - prev.z) ** 2 < 9) {
      const q = this.i; this.i = (this.i + 1) % this.max;
      const v = [prev.l, prev.r, cur.l, prev.r, cur.r, cur.l];
      for (let k = 0; k < 6; k++) {
        this.pos.set(v[k], (q * 6 + k) * 3);
        this.col.set([0.03, 0.03, 0.03, Math.min(0.75, intensity)], (q * 6 + k) * 4);
      }
      this.dirty = true;
      this.last.set(key, { x, z, ...cur });
    } else if (!prev || (x - prev.x) ** 2 + (z - prev.z) ** 2 >= 9) this.last.set(key, { x, z, ...cur });
  }
  update() { if (this.dirty) { this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true; this.dirty = false; } }
}

export class Effects {
  constructor(scene, T) {
    this.smoke = new Particles(scene, 700, T.smoke, false);
    this.sparks = new Particles(scene, 300, T.flare, true);
    this.flames = new Particles(scene, 300, T.flare, true);
    this.skids = new Skids(scene);
  }
  /** Per-car tyre effects. car = CarPhysics, y = ground height, key = unique id */
  tyres(car, y, key, dt) {
    const sh = Math.sin(car.h), ch = Math.cos(car.h);
    const v = Math.abs(car.vx);
    const latSlip = Math.abs(Math.atan2(car.vy, Math.max(2, Math.abs(car.vx))));
    const slide = Math.max(car.inp.handbrake && v > 3 ? 0.8 : 0, latSlip > 0.12 && v > 4 ? (latSlip - 0.12) * 4 : 0, car.wheelSpin > 0.05 && v < 30 ? Math.min(1, car.wheelSpin * 2) : 0);
    for (const side of [1, -1]) {
      const wx = car.x - sh * 1.35 + ch * 0.8 * side, wz = car.z - ch * 1.35 - sh * 0.8 * side;
      if (slide > 0.15) {
        this.skids.mark(key + side, wx, y + 0.025, wz, sh, ch, slide);
        if (Math.random() < slide * dt * 60) this.smoke.emit(wx, y + 0.3, wz, (Math.random() - 0.5) * 1.5 + sh * car.vx * 0.1, 0.6 + Math.random(), (Math.random() - 0.5) * 1.5 + ch * car.vx * 0.1, 1.6 + Math.random(), 1.2, 3.2, 0.32 * Math.min(1, slide), 0.85, 0.85, 0.85);
      } else this.skids.mark(key + side, 0, 0, 0, 0, 0, null);
    }
    return slide;
  }
  nitro(car, y, len) {
    const sh = Math.sin(car.h), ch = Math.cos(car.h);
    for (const side of [1, -1]) {
      const x = car.x - sh * (len + 0.1) + ch * 0.45 * side, z = car.z - ch * (len + 0.1) - sh * 0.45 * side;
      for (let k = 0; k < 2; k++) this.flames.emit(x, y + 0.32, z, -sh * 8 + (Math.random() - 0.5), (Math.random() - 0.5), -ch * 8 + (Math.random() - 0.5), 0.12 + Math.random() * 0.08, 0.7, -2, 0.9, 0.35, 0.6, 1.6);
    }
  }
  backfire(car, y, len) {
    const sh = Math.sin(car.h), ch = Math.cos(car.h);
    for (const side of [1, -1]) {
      const x = car.x - sh * (len + 0.1) + ch * 0.45 * side, z = car.z - ch * (len + 0.1) - sh * 0.45 * side;
      for (let k = 0; k < 6; k++) this.flames.emit(x, y + 0.32, z, -sh * 4 + (Math.random() - 0.5) * 2, Math.random(), -ch * 4 + (Math.random() - 0.5) * 2, 0.1 + Math.random() * 0.06, 0.6, 1, 1, 1.6, 0.7, 0.2);
    }
  }
  sparksAt(x, y, z, power) {
    const n = Math.min(40, 6 + power * 4);
    for (let k = 0; k < n; k++) this.sparks.emit(x, y + 0.5, z, (Math.random() - 0.5) * 9, Math.random() * 5, (Math.random() - 0.5) * 9, 0.3 + Math.random() * 0.4, 0.18, -0.2, 1, 2.2, 1.4, 0.5);
  }
  update(dt, viewportH) {
    for (const p of [this.smoke, this.sparks, this.flames]) p.setScale(viewportH);
    this.smoke.update(dt, 0.8, -0.3);
    this.sparks.update(dt, 0.5, 14);
    this.flames.update(dt, 3, 0);
    this.skids.update();
  }
}
