import * as THREE from 'three';

// ---------- shared car geometry ----------
let G = null;
function shapeFrom(points) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) s.lineTo(points[i][0], points[i][1]);
  s.closePath();
  return s;
}
// Extrudes a side profile (u = length, v = height) across the car width, centred.
function profileGeo(points, width, bevel = 0.04) {
  const g = new THREE.ExtrudeGeometry(shapeFrom(points), {
    depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 2,
  });
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2 - bevel, 0, 0);
  g.computeVertexNormals();
  return g;
}

function buildShared() {
  G = {};
  G.body = profileGeo([
    [-2.18, 0.30], [-2.24, 0.55], [-2.2, 0.92], [-1.75, 0.98], [1.15, 0.96], [1.95, 0.84],
    [2.22, 0.66], [2.22, 0.42], [2.12, 0.30],
  ], 1.78, 0.05);
  G.glass = profileGeo([[-1.78, 0.93], [-1.42, 1.38], [0.32, 1.42], [1.18, 0.93]], 1.6, 0.03);
  G.roof = new THREE.BoxGeometry(1.5, 0.06, 1.62); G.roof.translate(0, 1.43, -0.56);
  G.pillar = new THREE.BoxGeometry(1.62, 0.44, 0.12);
  G.wheel = new THREE.CylinderGeometry(0.31, 0.31, 0.22, 18); G.wheel.rotateZ(Math.PI / 2);
  G.hub = new THREE.CylinderGeometry(0.19, 0.19, 0.23, 10); G.hub.rotateZ(Math.PI / 2);
  G.light = new THREE.BoxGeometry(0.36, 0.12, 0.06);
  G.smallLight = new THREE.BoxGeometry(0.16, 0.08, 0.06);
  G.bumper = new THREE.BoxGeometry(1.8, 0.16, 0.12);
  G.mirror = new THREE.BoxGeometry(0.18, 0.1, 0.1);
  G.plate = new THREE.BoxGeometry(0.5, 0.12, 0.02);
  G.shadow = new THREE.PlaneGeometry(2.1, 4.7); G.shadow.rotateX(-Math.PI / 2);
  G.mats = {
    glass: new THREE.MeshStandardMaterial({ color: 0x1b2632, roughness: 0.08, metalness: 0.6 }),
    tyre: new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 }),
    hub: new THREE.MeshStandardMaterial({ color: 0xb8bcc0, roughness: 0.35, metalness: 0.8 }),
    trim: new THREE.MeshStandardMaterial({ color: 0x1d1d1f, roughness: 0.6 }),
    plate: new THREE.MeshStandardMaterial({ color: 0xf2f2e6, roughness: 0.5 }),
    head: new THREE.MeshStandardMaterial({ color: 0xeeeeee, emissive: 0xfff6dd, emissiveIntensity: 0.15 }),
  };
  G.bodyMats = new Map();
}

function bodyMat(color) {
  if (!G.bodyMats.has(color)) {
    G.bodyMats.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.45 }));
  }
  return G.bodyMats.get(color);
}

export const CAR_COLORS = [0xb3112b, 0x1d4e89, 0xf2f2f2, 0x222428, 0x8a8f94, 0x2f6b3a, 0xd7a21b, 0x5a2a7a, 0xc4561a, 0x4c6d8c, 0xe8e2cf, 0x7a1f1f];

/**
 * Builds a car. Returns a THREE.Group with a `parts` object used to animate
 * wheels and lights. The group origin is the centre of the car on the ground.
 */
export function buildCar(color, opts = {}) {
  if (!G) buildShared();
  const g = new THREE.Group();
  const shell = new THREE.Group();
  g.add(shell);
  const bm = bodyMat(color);
  const body = new THREE.Mesh(G.body, bm); body.castShadow = true; body.receiveShadow = false;
  const glass = new THREE.Mesh(G.glass, G.mats.glass); glass.castShadow = true;
  const roof = new THREE.Mesh(G.roof, bm); roof.castShadow = true;
  shell.add(body, glass, roof);
  const fb = new THREE.Mesh(G.bumper, G.mats.trim); fb.position.set(0, 0.36, 2.2);
  const rb = new THREE.Mesh(G.bumper, G.mats.trim); rb.position.set(0, 0.36, -2.22);
  shell.add(fb, rb);
  for (const s of [-1, 1]) {
    const m = new THREE.Mesh(G.mirror, bm); m.position.set(s * 0.95, 1.0, 0.95); shell.add(m);
  }
  const pf = new THREE.Mesh(G.plate, G.mats.plate); pf.position.set(0, 0.5, 2.27); shell.add(pf);
  const pr = new THREE.Mesh(G.plate, G.mats.plate); pr.position.set(0, 0.62, -2.27); shell.add(pr);

  // lights (own materials so each car can switch them)
  const mk = (c, e) => new THREE.MeshStandardMaterial({ color: c, emissive: e, emissiveIntensity: 0.0, roughness: 0.3 });
  const head = mk(0xf4f4ee, 0xfff4d6);
  const tail = mk(0x6a0d0d, 0xff1a10);
  const rev = mk(0xdddddd, 0xffffff);
  const indL = mk(0x9a5a00, 0xffa000);
  const indR = mk(0x9a5a00, 0xffa000);
  for (const s of [-1, 1]) {
    const h = new THREE.Mesh(G.light, head); h.position.set(s * 0.62, 0.7, 2.2); shell.add(h);
    const t = new THREE.Mesh(G.light, tail); t.position.set(s * 0.64, 0.8, -2.22); shell.add(t);
    const r = new THREE.Mesh(G.smallLight, rev); r.position.set(s * 0.3, 0.8, -2.23); shell.add(r);
    // s=+1 is the car's left side (+x local)
    const fi = new THREE.Mesh(G.smallLight, s > 0 ? indL : indR); fi.position.set(s * 0.85, 0.62, 2.12); shell.add(fi);
    const ri = new THREE.Mesh(G.smallLight, s > 0 ? indL : indR); ri.position.set(s * 0.86, 0.95, -2.15); shell.add(ri);
  }
  tail.emissiveIntensity = 0.25;

  const wheels = [];
  const wpos = [[0.79, 1.3], [-0.79, 1.3], [0.79, -1.32], [-0.79, -1.32]];
  for (let i = 0; i < 4; i++) {
    const pivot = new THREE.Group();
    pivot.position.set(wpos[i][0], 0.31, wpos[i][1]);
    const spin = new THREE.Group();
    const tyre = new THREE.Mesh(G.wheel, G.mats.tyre); tyre.castShadow = true;
    const hub = new THREE.Mesh(G.hub, G.mats.hub);
    spin.add(tyre, hub);
    pivot.add(spin);
    g.add(pivot);
    wheels.push({ pivot, spin });
  }
  if (opts.van) { shell.scale.set(1.04, 1.28, 1.08); }
  g.parts = { shell, wheels, head, tail, rev, indL, indR, bodyMat: bm };
  return g;
}

/** Updates car visuals: steering angle, wheel spin distance and lights. */
export function animateCar(car, steer, spinAngle, lights) {
  const p = car.parts;
  p.wheels[0].pivot.rotation.y = steer;
  p.wheels[1].pivot.rotation.y = steer;
  for (const w of p.wheels) w.spin.rotation.x = spinAngle;
  p.tail.emissiveIntensity = lights.brake ? 2.2 : (lights.head ? 0.8 : 0.25);
  p.head.emissiveIntensity = lights.head ? 2.0 : 0.0;
  p.rev.emissiveIntensity = lights.reverse ? 1.6 : 0.0;
  p.indL.emissiveIntensity = lights.left ? 3.0 : 0.0;
  p.indR.emissiveIntensity = lights.right ? 3.0 : 0.0;
}

// ---------- pedestrian geometry (one merged mesh per pedestrian part) ----------
export function pedGeometries() {
  const body = new THREE.CylinderGeometry(0.2, 0.17, 0.75, 8); body.translate(0, 1.12, 0);
  const legs = new THREE.CylinderGeometry(0.16, 0.12, 0.78, 8); legs.translate(0, 0.39, 0);
  const head = new THREE.SphereGeometry(0.13, 10, 8); head.translate(0, 1.66, 0);
  return { body, legs, head };
}

// ---------- instanced cars (parked cars + AI traffic) ----------
const _m = new THREE.Matrix4();
const _m2 = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);
const _c = new THREE.Color();

const LIGHT_SLOTS = [
  // [x, y, z, kind]  kind: 0 head, 1 tail, 2 reverse, 3 left ind, 4 right ind
  [0.62, 0.7, 2.2, 0], [-0.62, 0.7, 2.2, 0],
  [0.64, 0.8, -2.22, 1], [-0.64, 0.8, -2.22, 1],
  [0.3, 0.8, -2.23, 2], [-0.3, 0.8, -2.23, 2],
  [0.85, 0.62, 2.12, 3], [0.86, 0.95, -2.15, 3],
  [-0.85, 0.62, 2.12, 4], [-0.86, 0.95, -2.15, 4],
];
const LIGHT_COL = [
  [[0.72, 0.72, 0.68], [1.6, 1.55, 1.3]],
  [[0.32, 0.03, 0.03], [1.8, 0.12, 0.06]],
  [[0.55, 0.55, 0.55], [1.6, 1.6, 1.6]],
  [[0.42, 0.24, 0.0], [2.0, 1.2, 0.0]],
  [[0.42, 0.24, 0.0], [2.0, 1.2, 0.0]],
];
const WHEEL_POS = [[0.79, 1.3], [-0.79, 1.3], [0.79, -1.32], [-0.79, -1.32]];

export class CarInstancer {
  constructor(scene, capacity, beamTex) {
    if (!G) buildShared();
    this.cap = capacity;
    const bodyMatI = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.32, metalness: 0.45 });
    const shellGeo = mergeSimple([G.body, G.roof]);
    const trimGeo = mergeSimple([G.bumper.clone().translate(0, 0.36, 2.2), G.bumper.clone().translate(0, 0.36, -2.22)]);
    const mk = (geo, mat, n, shadow) => {
      const im = new THREE.InstancedMesh(geo, mat, n);
      im.castShadow = shadow; im.receiveShadow = false;
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.frustumCulled = false;
      im.count = 0;
      scene.add(im);
      return im;
    };
    this.body = mk(shellGeo, bodyMatI, capacity, true);
    this.glass = mk(G.glass, G.mats.glass, capacity, false);
    this.trim = mk(trimGeo, G.mats.trim, capacity, false);
    this.wheels = mk(G.wheel, G.mats.tyre, capacity * 4, false);
    this.lights = mk(G.light, new THREE.MeshBasicMaterial({ color: 0xffffff }), capacity * LIGHT_SLOTS.length, false);
    const beamGeo = new THREE.PlaneGeometry(5, 14); beamGeo.rotateX(-Math.PI / 2); beamGeo.translate(0, 0.04, 9);
    this.beams = mk(beamGeo, new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.55 }), capacity, false);
    this.beams.visible = false;
    this.meshes = [this.body, this.glass, this.trim, this.wheels, this.lights, this.beams];
    this.n = 0;
    for (const im of this.meshes) if (im.instanceColor === null && (im === this.body || im === this.lights)) {
      im.setColorAt(0, _c.set(1, 1, 1));
    }
  }
  add() { const i = this.n++; for (const im of this.meshes) im.count = this.n * (im === this.wheels ? 4 : im === this.lights ? LIGHT_SLOTS.length : 1); return i; }
  setColor(i, hex) { this.body.setColorAt(i, _c.set(hex)); this.body.instanceColor.needsUpdate = true; }
  set(i, x, y, z, heading, steer, spin, L) {
    _e.set(0, heading, 0); _q.setFromEuler(_e);
    _m.compose(_v.set(x, y, z), _q, _s);
    this.body.setMatrixAt(i, _m); this.glass.setMatrixAt(i, _m); this.trim.setMatrixAt(i, _m);
    this.beams.setMatrixAt(i, _m);
    for (let w = 0; w < 4; w++) {
      _e.set(spin, w < 2 ? steer : 0, 0, 'YXZ'); _q.setFromEuler(_e);
      _m2.compose(_v.set(WHEEL_POS[w][0], 0.31, WHEEL_POS[w][1]), _q, _s);
      _m2.premultiply(_m);
      this.wheels.setMatrixAt(i * 4 + w, _m2);
    }
    _e.set(0, 0, 0, 'XYZ');
    for (let k = 0; k < LIGHT_SLOTS.length; k++) {
      const ls = LIGHT_SLOTS[k];
      _m2.makeTranslation(ls[0], ls[1], ls[2]);
      if (ls[3] >= 2) _m2.scale(_v.set(0.45, 0.7, 1));
      _m2.premultiply(_m);
      const idx = i * LIGHT_SLOTS.length + k;
      this.lights.setMatrixAt(idx, _m2);
      const kind = ls[3];
      let on = false;
      if (L) {
        if (kind === 0) on = L.head;
        else if (kind === 1) on = L.brake;
        else if (kind === 2) on = L.reverse;
        else if (kind === 3) on = L.left;
        else on = L.right;
      }
      const col = LIGHT_COL[kind][on ? 1 : 0];
      if (kind === 1 && !on && L && L.head) this.lights.setColorAt(idx, _c.setRGB(0.9, 0.06, 0.04));
      else this.lights.setColorAt(idx, _c.setRGB(col[0], col[1], col[2]));
    }
  }
  flush() {
    for (const im of this.meshes) im.instanceMatrix.needsUpdate = true;
    if (this.lights.instanceColor) this.lights.instanceColor.needsUpdate = true;
  }
  setNight(on) { this.beams.visible = on; }
}

function mergeSimple(geos) {
  // Merge non-indexed versions so different geometry types combine safely.
  const parts = geos.map((g) => (g.index ? g.toNonIndexed() : g.clone()));
  for (const p of parts) for (const k of Object.keys(p.attributes)) if (!['position', 'normal', 'uv'].includes(k)) p.deleteAttribute(k);
  let total = 0;
  for (const p of parts) total += p.attributes.position.count;
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) {
    const size = name === 'uv' ? 2 : 3;
    const arr = new Float32Array(total * size);
    let off = 0;
    for (const p of parts) { arr.set(p.attributes[name].array, off); off += p.attributes[name].array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  return out;
}
export { mergeSimple };
