import * as THREE from 'three';
import { CFG, settings, saveSettings, loadProgress, saveProgress, mulberry32, roadCoord, DIRS, clamp, lerp, wrapAngle } from './config.js';
import { makeTextures } from './textures.js';
import { buildWorld } from './world.js';
import { buildCar, animateCar } from './carfactory.js';
import { Renderer } from './render.js';
import { CarPhysics } from './car.js';
import { makeOBB, aabbToOBB, obbOverlap, obbCircle, resolveStatic } from './collision.js';
import { Traffic } from './traffic.js';
import { Pedestrians } from './peds.js';
import { Rules } from './rules.js';
import { MISSIONS, lanePoint, resolveParking, parkingQuality } from './missions.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Minimap } from './hud.js';
import { CarPhysics as _CP, SPECS } from './car.js';
import { RaceManager, EVENTS, CARS, PAINTS } from './race.js';
import { Driver } from './ai.js';
import { Effects } from './effects.js';

const $ = (s) => document.querySelector(s);
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (isTouch) document.body.classList.add('touch');

// ---------------- renderer ----------------
let R = new Renderer(settings.quality);
document.body.prepend(R.r.domElement);
let camera = R.camera;
function resize() {
  const pr = Math.min(window.devicePixelRatio || 1, settings.quality === 'low' ? 1 : 1.5);
  R.resize(window.innerWidth, window.innerHeight, pr);
}
function ensureRenderer() {
  if (R.quality === settings.quality) return;
  R.r.domElement.remove(); R.r.dispose();
  R = new Renderer(settings.quality); camera = R.camera;
  document.body.prepend(R.r.domElement); resize();
}
window.addEventListener('resize', resize);
resize();

const T = makeTextures();
const audio = new Audio();
audio.setEnabled(settings.sound);
const input = new Input();
input.bindTouch($('#hud'));

let G = null; // current session
let state = 'menu';
const CAMS = ['Chase', 'Far chase', 'Cockpit', 'Top-down', 'Bumper'];

// ---------------- markers ----------------
function makeCheckpoint() {
  const grp = new THREE.Group();
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 7, 32, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x35e07a, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false }));
  beam.position.y = 3.5;
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.6, 3.1, 40), new THREE.MeshBasicMaterial({ color: 0x35e07a, transparent: true, opacity: 0.8, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05;
  grp.add(beam, ring);
  grp.beam = beam;
  return grp;
}
function makeParkMarker(P) {
  const grp = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xffd23c, transparent: true, opacity: 0.9, depthWrite: false });
  const fillMat = new THREE.MeshBasicMaterial({ color: 0xffd23c, transparent: true, opacity: 0.18, depthWrite: false });
  const t = 0.15;
  const add = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.05, z); grp.add(m); };
  add(P.wid, t, 0, P.len / 2); add(P.wid, t, 0, -P.len / 2); add(t, P.len, P.wid / 2, 0); add(t, P.len, -P.wid / 2, 0);
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(P.wid, P.len), fillMat); fill.rotation.x = -Math.PI / 2; fill.position.y = 0.04; grp.add(fill);
  // arrow showing which way the car should face
  const arr = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.0, 3), mat);
  arr.rotation.x = Math.PI / 2; arr.position.set(0, 0.06, P.len / 2 - 1.0); arr.scale.set(1, 1, 0.05); grp.add(arr);
  grp.position.set(P.x, 0, P.z); grp.rotation.y = P.h;
  grp.mats = [mat, fillMat];
  return grp;
}
function makeGuideArrow() {
  const sh = new THREE.Shape();
  sh.moveTo(0, 1.0); sh.lineTo(0.85, 0); sh.lineTo(0.32, 0); sh.lineTo(0.32, -0.85); sh.lineTo(-0.32, -0.85); sh.lineTo(-0.32, 0); sh.lineTo(-0.85, 0); sh.closePath();
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: false });
  geo.rotateX(Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({ color: 0x2f9bff, transparent: true, opacity: 0.9, depthTest: false });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -0.45; m.renderOrder = 10;
  const grp = new THREE.Group();
  grp.add(m);
  grp.scale.setScalar(0.7);
  return grp;
}

// ---------------- session ----------------
function disposeScene(scene) {
  scene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
  });
}

function startMission(mi) {
  if (G) disposeScene(G.scene);
  const M = MISSIONS[mi];
  ensureRenderer();
  const scene = new THREE.Scene();
  const night = !!M.night;
  const time = night ? 'night' : (M.tod || 'day');
  const sun = R.setupScene(scene, time);
  resize();

  const world = buildWorld(scene, T, { seed: 4242, time, parkFill: M.parkFill });
  const rand = mulberry32(1000 + mi * 77);
  const objs = M.objectives.map((o) => ({ ...o }));
  for (const o of objs) {
    if (o.type === 'slot' || o.type === 'bay') o.P = resolveParking(world, o);
    else o.p = lanePoint(o.ix, o.iz, o.d, o.dist);
  }
  world.placeParked();
  world.finalize(M.traffic);

  const car = new CarPhysics();
  const sp = lanePoint(...M.start);
  car.reset(sp.x, sp.z, sp.h);
  const traffic = new Traffic(world, M.traffic, rand, settings.side);
  traffic.init(car);
  const peds = new Pedestrians(scene, world, rand, M.pedsPerBlock);
  const carMesh = buildCar('hatch', 0xff7a1a);
  scene.add(carMesh);
  const head = new THREE.SpotLight(0xfff3dc, 0, 70, 0.55, 0.45, 1.3);
  head.position.set(0, 0.8, 2.0); head.target.position.set(0, 0, 18);
  carMesh.add(head, head.target);

  const checkpoint = makeCheckpoint(); scene.add(checkpoint);
  const arrow = makeGuideArrow(); scene.add(arrow);
  world.setNight(night);

  G = {
    mi, M, scene, world, car, carMesh, traffic, peds, head, sun, checkpoint, arrow, objs,
    t: 0, timeLeft: M.time, objIdx: 0, parkT: 0, acc: 0, spin: 0, shake: 0,
    indicator: null, hazard: false, headlights: night, cam: settings.camera || 0,
    camPos: new THREE.Vector3(sp.x - Math.sin(sp.h) * 6.8, 2.6, sp.z - Math.cos(sp.h) * 6.8), camLook: new THREE.Vector3(sp.x + Math.sin(sp.h) * 4, 1, sp.z + Math.cos(sp.h) * 4),
    route: null, routeT: 0, downHeld: 0, ended: false, lastBlink: false, smoothY: 0,
    onPenalty: (text, pts) => { toast(`${text}  −${pts}`); audio.blip(220, 0.18, 0.18, 'sawtooth'); },
    cancelIndicator: () => { G.indicator = null; },
  };
  G.rules = new Rules(G);
  G.minimap = new Minimap($('#minimap'), world);
  setupObjective();
  updateHUD(true);
  render();
}

function setupObjective() {
  const o = G.objs[G.objIdx];
  if (G.parkMarker) { G.scene.remove(G.parkMarker); G.parkMarker = null; }
  G.checkpoint.visible = false;
  $('#parkMeter').classList.add('hidden');
  if (!o) { $('#objective').textContent = G.M.free ? 'Free drive — explore the city' : 'Done!'; return; }
  $('#objective').textContent = o.label;
  if (o.type === 'reach') { G.checkpoint.visible = true; G.checkpoint.position.set(o.p.x, 0, o.p.z); }
  else { G.parkMarker = makeParkMarker(o.P); G.scene.add(G.parkMarker); $('#parkMeter').classList.remove('hidden'); }
  G.parkT = 0;
}

// ---------------- route guidance ----------------
function targetInfo(o) {
  if (o.type === 'reach') return { j: [o.ix, o.iz], x: o.p.x, z: o.p.z, d: o.d };
  if (o.type === 'slot') {
    const P = o.P;
    const j = o.axis === 0 ? [o.si, o.ri] : [o.ri, o.si];
    return { j, x: P.x, z: P.z, d: o.axis === 0 ? 0 : 1 };
  }
  // bay: go to the car park gate first
  const B = G.world.blocks.find((b) => b.type === 'lot');
  return { j: [B.bi, B.bj], x: (B.x0 + B.x1) / 2, z: B.z0 - 2, d: 0, bay: o.P, lot: B };
}
function computeRoute() {
  const o = G.objs[G.objIdx];
  if (!o) return null;
  const car = G.car, W = G.world, ti = targetInfo(o);
  const here = W.locate(car.x, car.z);
  if (ti.lot && here.type === 'block' && here.block === ti.lot) return [[car.x, car.z], [ti.bay.x, ti.bay.z]];
  const end = ti.lot ? [[ti.x, ti.z], [ti.x, ti.z + 6], [ti.bay.x, ti.bay.z - 5], [ti.bay.x, ti.bay.z]] : [[ti.x, ti.z]];
  // already on the target's road segment and heading the right way?
  const tl = W.locate(ti.x, ti.z);
  if (here.type === 'road' && tl.type === 'road' && here.axis === tl.axis && here.ri === tl.ri && here.si === tl.si) {
    const fwd = here.axis === 0 ? Math.sin(car.h) : Math.cos(car.h);
    const toT = here.axis === 0 ? ti.x - car.x : ti.z - car.z;
    if (fwd * toT > 0) return [[car.x, car.z], ...end];
  }
  let sj;
  if (here.type === 'junction') sj = [here.ix, here.iz];
  else if (here.type === 'road') {
    const fwd = here.axis === 0 ? Math.sin(car.h) : Math.cos(car.h);
    const ji = clamp(here.si + (fwd >= 0 ? 1 : 0), 0, CFG.N);
    sj = here.axis === 0 ? [ji, here.ri] : [here.ri, ji];
  } else sj = [clamp(Math.round((car.x + CFG.OFF) / CFG.S), 0, CFG.N), clamp(Math.round((car.z + CFG.OFF) / CFG.S), 0, CFG.N)];
  const gj = ti.j;
  // L-shaped path: continue along the current travel axis first
  const pts = [[car.x, car.z], [roadCoord(sj[0]), roadCoord(sj[1])]];
  const alongX = Math.abs(Math.sin(car.h)) > Math.abs(Math.cos(car.h));
  const corner = alongX ? [gj[0], sj[1]] : [sj[0], gj[1]];
  if (corner[0] !== sj[0] || corner[1] !== sj[1]) pts.push([roadCoord(corner[0]), roadCoord(corner[1])]);
  if (corner[0] !== gj[0] || corner[1] !== gj[1]) pts.push([roadCoord(gj[0]), roadCoord(gj[1])]);
  return [...pts, ...end];
}

// ---------------- HUD ----------------
let toastCount = 0;
function toast(text, kind = '') {
  const el = document.createElement('div');
  el.className = 'toast ' + kind; el.textContent = text;
  const box = $('#toasts');
  box.appendChild(el);
  while (box.children.length > 3) box.removeChild(box.firstChild);
  setTimeout(() => el.remove(), 3000);
  toastCount++;
}
const hudCache = {};
function setText(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } }
function setBar(id, p, color) {
  const k = Math.round(p * 100) + color;
  if (hudCache[id] === k) return; hudCache[id] = k;
  const el = $(id); el.style.setProperty('--p', `${clamp(p, 0, 1) * 100}%`); el.style.setProperty('--c', color);
}
function updateHUD(force) {
  const car = G.car;
  const mph = settings.units === 'mph';
  setText('#speed', String(Math.round(Math.abs(car.vx) * (mph ? 2.237 : 3.6))));
  setText('#unit', mph ? 'mph' : 'km/h');
  setText('#limit span', String(mph ? 30 : CFG.SPEED_LIMIT));
  const sel = car.selector;
  if (force || hudCache.sel !== sel) {
    hudCache.sel = sel;
    document.querySelectorAll('#gearbox span').forEach((s) => s.classList.toggle('on', s.dataset.g === sel));
    document.querySelectorAll('#gearBtns button').forEach((s) => s.classList.toggle('on', s.dataset.action === sel));
  }
  setText('#gearNum', sel === 'D' ? String(car.gear) : '');
  setBar('#rpmBar', car.rpm / 7000, car.rpm > 6000 ? '#ff4d3a' : '#4fb3ff');
  setBar('#fuelBar', car.fuel / car.tank, car.fuel < 5 ? '#ff4d3a' : '#3fd07a');
  setBar('#dmgBar', car.damage / 100, car.damage > 60 ? '#ff4d3a' : '#ffb13b');
  $('#icoLights').classList.toggle('on', G.headlights);
  $('#icoHand').classList.toggle('on', G.input && G.input.handbrake);
  const blink = (G.t * 1.5) % 1 < 0.5;
  $('#sigL').classList.toggle('on', blink && (G.indicator === 'L' || G.hazard));
  $('#sigR').classList.toggle('on', blink && (G.indicator === 'R' || G.hazard));
  $('#bIndL').classList.toggle('on', blink && (G.indicator === 'L' || G.hazard));
  $('#bIndR').classList.toggle('on', blink && (G.indicator === 'R' || G.hazard));
  if (G.M.time) {
    const s = Math.max(0, Math.ceil(G.timeLeft));
    setText('#timer', `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`);
  } else setText('#timer', '∞');
  setText('#score', String(Math.max(0, G.rules.score)));
  // traffic light ahead
  let cls = '';
  const loc = G.world.locate(car.x, car.z);
  if (loc.type === 'road') {
    const fwd = loc.axis === 0 ? Math.sin(car.h) : Math.cos(car.h);
    if (Math.abs(fwd) > 0.6) {
      const ji = clamp(loc.si + (fwd > 0 ? 1 : 0), 0, CFG.N);
      const j = loc.axis === 0 ? [ji, loc.ri] : [loc.ri, ji];
      const dist = Math.abs((loc.axis === 0 ? car.x : car.z) - roadCoord(ji));
      if (dist < 70) cls = G.world.lightState(j[0], j[1], loc.axis, G.t).s;
    }
  }
  const la = $('#lightAhead');
  if (la.className !== cls) la.className = cls;
  la.style.visibility = cls ? 'visible' : 'hidden';
}

// ---------------- game update ----------------
const tmpStatics = [];
function collide() {
  const car = G.car, W = G.world;
  let A = makeOBB(car.x, car.z, car.h, CFG.CAR_HL, CFG.CAR_HW);
  for (const o of W.query(car.x, car.z, 4, tmpStatics)) {
    const c = o.type === 'box' ? obbOverlap(A, aabbToOBB(o)) : obbCircle(A, o.x, o.z, o.r);
    if (c) { const imp = resolveStatic(car, c); impact(o.kind, imp, c.px, c.pz); A = makeOBB(car.x, car.z, car.h, CFG.CAR_HL, CFG.CAR_HW); }
  }
  for (const ai of G.traffic.cars) {
    if (Math.abs(ai.x - car.x) > 6 || Math.abs(ai.z - car.z) > 6) continue;
    const c = obbOverlap(A, makeOBB(ai.x, ai.z, ai.h, CFG.CAR_HL, CFG.CAR_HW));
    if (c) {
      const imp = resolveStatic(car, c, 0.2);
      if (imp > 0.4) { ai.stun = 5; ai.v = 0; }
      impact('ai', imp, c.px, c.pz);
      if (G.mode === 'race' && G.race.cops.length && imp > 2) { /* witnesses */ }
      A = makeOBB(car.x, car.z, car.h, CFG.CAR_HL, CFG.CAR_HW);
    }
  }
  for (const p of G.peds.list) {
    if (Math.abs(p.x - car.x) > 4 || Math.abs(p.z - car.z) > 4) continue;
    const c = obbCircle(A, p.x, p.z, 0.35);
    if (!c) continue;
    if (Math.abs(car.vx) > 0.8 && !p.down) { p.down = true; audio.crash(4); fail('You hit a pedestrian'); }
    else resolveStatic(car, c, 0.1);
  }
}
function impact(kind, imp, px, pz) {
  if (imp < 0.3) return;
  if (G.mode === 'race') {
    G.car.damage = Math.min(100, G.car.damage + Math.pow(imp, 1.3) * 0.25);
    if (imp > 2 && px !== undefined) G.fx.sparksAt(px, 0, pz, imp);
    G.race.crash(imp);
  } else {
    G.car.damage = Math.min(100, G.car.damage + Math.pow(imp, 1.5) * 1.2);
    G.rules.collision(kind, imp);
  }
  audio.crash(imp);
  G.shake = Math.min(1, imp / 8);
}

function handleActions() {
  const car = G.car;
  for (const a of input.takeActions()) {
    if (a === 'pause') { pause(); return; }
    if ('PRND'.includes(a) && a.length === 1) {
      const err = car.select(a);
      if (err) { toast(err, 'info'); audio.blip(160, 0.2, 0.2, 'sawtooth'); } else audio.blip(600, 0.04, 0.1);
    }
    if (a === 'indL') G.indicator = G.indicator === 'L' ? null : 'L';
    if (a === 'indR') G.indicator = G.indicator === 'R' ? null : 'R';
    if (a === 'hazard') G.hazard = !G.hazard;
    if (a === 'lights') G.headlights = !G.headlights;
    if (a === 'camera') { G.cam = (G.cam + 1) % CAMS.length; settings.camera = G.cam; saveSettings(); toast(`Camera: ${CAMS[G.cam]}`, 'info'); }
    if (a === 'shiftUp') car.shift(1);
    if (a === 'shiftDown') car.shift(-1);
    if (a === 'manual') { car.manual = !car.manual; settings.manual = car.manual; saveSettings(); toast(car.manual ? 'Manual gearbox (Q/E)' : 'Automatic gearbox', 'info'); }
    if (a === 'reset' && G.mode === 'race') resetPlayer();
  }
}

function update(dt) {
  const car = G.car;
  handleActions();
  if (state !== 'play') return;
  const inp = input.update(dt);
  G.input = inp;
  if (G.mode === 'race') return raceUpdate(dt, inp);
  let throttle = inp.throttle, brake = inp.brake;
  // easy gears for keyboard / gamepad drivers
  const keyboardish = input.touch.gas === 0 && input.touch.brake === 0;
  if (settings.easyGears && keyboardish) {
    const still = Math.abs(car.vx) < 0.25;
    if (car.selector === 'R') { throttle = inp.brake; brake = inp.throttle; }
    if (still && inp.down && !inp.up && car.selector !== 'R') { G.downHeld += dt; if (G.downHeld > 0.35) { car.select('R'); G.downHeld = 0; } }
    else G.downHeld = 0;
    if (still && car.selector !== 'D' && ((car.selector === 'R' && inp.up && !inp.down) || (car.selector !== 'R' && inp.up))) car.select('D');
    if (still && car.selector === 'R' && inp.down) { /* reversing */ }
  }
  car.inp.throttle = throttle; car.inp.brake = brake; car.inp.steer = inp.steer; car.inp.handbrake = inp.handbrake;

  const step = 1 / 120;
  G.acc += dt;
  let n = 0;
  while (G.acc >= step && n < 10) { car.step(step); collide(); G.acc -= step; n++; }
  if (state !== 'play') return;

  G.traffic.update(dt, G.t, car);
  G.peds.update(dt, car);
  G.world.updateLights(G.t);
  G.rules.update(dt);
  G.t += dt;

  // indicator ticking sound
  const blink = (G.t * 1.5) % 1 < 0.5;
  if ((G.indicator || G.hazard) && blink !== G.lastBlink) audio.tick(blink);
  G.lastBlink = blink;

  missionUpdate(dt);
}

function missionUpdate(dt) {
  const M = G.M, car = G.car;
  if (G.ended) return;
  if (M.time) { G.timeLeft -= dt; if (G.timeLeft <= 0) return fail('Out of time'); }
  if (car.damage >= 100) return fail('The car is too damaged to continue');
  if (!M.free && G.rules.score < (M.passMark || 40)) return fail(M.passMark ? 'Your score dropped below the pass mark' : 'Too many traffic violations');
  if (M.fuelBudget && car.fuelUsed > M.fuelBudget) return fail('Fuel budget exceeded');
  if (car.fuel <= 0 && Math.abs(car.vx) < 0.1 && !M.free) return fail('Out of fuel');
  const o = G.objs[G.objIdx];
  if (!o) return;
  if (o.type === 'reach') {
    const d = Math.hypot(car.x - o.p.x, car.z - o.p.z);
    if (d < 3.6 && (!o.stop || Math.abs(car.vx) < 0.3)) nextObjective();
  } else {
    const q = parkingQuality(car, o.P);
    const ok = q.inside && q.aligned;
    const still = Math.abs(car.vx) < 0.15;
    if (ok && still) G.parkT += dt * (car.selector === 'P' ? 2.5 : 1); else G.parkT = Math.max(0, G.parkT - dt * 2);
    const col = ok ? 0x35e07a : 0xffd23c;
    G.parkMarker.mats.forEach((m) => m.color.setHex(col));
    setText('#parkText', !q.inside ? 'Get the whole car inside the bay' : !q.aligned ? (q.ang > 2.5 ? 'Wrong way round!' : 'Straighten up') : still ? 'Hold still… (or select P)' : 'Stop the car');
    $('#parkFill').style.width = `${clamp(G.parkT / 1.6, 0, 1) * 100}%`;
    if (G.parkT >= 1.6) nextObjective();
  }
}
function nextObjective() {
  G.objIdx++;
  audio.blip(880, 0.12, 0.15, 'triangle'); setTimeout(() => audio.blip(1320, 0.15, 0.15, 'triangle'), 120);
  if (G.objIdx >= G.objs.length) return succeed();
  toast('Checkpoint reached', 'good');
  setupObjective();
  G.routeT = 0;
}

// ---------------- visuals ----------------
const _v = new THREE.Vector3(), _w = new THREE.Vector3();
function updateVisuals(dt) {
  const car = G.car, mesh = G.carMesh;
  const gy = G.world.groundHeight(car.x, car.z);
  G.smoothY = lerp(G.smoothY, gy, clamp(dt * 12, 0, 1));
  mesh.position.set(car.x, G.smoothY, car.z);
  mesh.rotation.y = car.h;
  const shell = mesh.parts.shell;
  shell.rotation.x = lerp(shell.rotation.x, clamp(-car.ax * 0.007, -0.05, 0.05), clamp(dt * 8, 0, 1));
  shell.rotation.z = lerp(shell.rotation.z, clamp(car.ay * 0.009, -0.06, 0.06), clamp(dt * 8, 0, 1));
  G.spin += (car.vx / car.R) * dt;
  const blink = (G.t * 1.5) % 1 < 0.5;
  animateCar(mesh, car.steer, -G.spin * 0 + G.spin, {
    brake: car.inp.brake > 0.05 && car.selector !== 'R' || (car.selector === 'R' && G.input && G.input.brake > 0.05 && !settings.easyGears),
    head: G.headlights, reverse: car.selector === 'R',
    left: blink && (G.indicator === 'L' || G.hazard), right: blink && (G.indicator === 'R' || G.hazard),
  });
  G.head.intensity = G.headlights ? (G.world.night ? 90 : 25) : 0;
  G.traffic.render(G.t, G.world.night);
  if (G.mode === 'race') {
    G.race.render(dt, G.t, G.world.night, animateCar, G.fx);
    const slide = G.fx.tyres(car, G.smoothY, 'p', dt);
    G.slide = slide;
    if (car.nosOn) G.fx.nitro(car, G.smoothY, G.carLen);
    if (car.justShifted > 0 && car.inp.throttle > 0.7) { G.fx.backfire(car, G.smoothY, G.carLen); audio.pop(); audio.blowoff(); }
    car.justShifted = 0;
    G.fx.update(dt, window.innerHeight);
    const v = Math.abs(car.vx);
    G.fx.blur = clamp((v - 28) / 60, 0, 1) * 0.07 + (car.nosOn ? 0.05 : 0);
    G.fx.nos = lerp(G.fx.nos || 0, car.nosOn ? 1 : 0, clamp(dt * 6, 0, 1));
    let sd = null;
    if (G.race.heat.on) for (const c of G.race.cops) { const d = Math.hypot(c.car.x - car.x, c.car.z - car.z); sd = sd === null ? d : Math.min(sd, d); }
    audio.race(car.nosOn, sd, G.t);
  }
  G.world.cullParked(camera.position.x, camera.position.z);

  // sun follows the player so shadows stay sharp near the car
  G.sun.position.set(car.x + R.sunDir.x * 150, Math.max(30, R.sunDir.y * 150), car.z + R.sunDir.z * 150);
  G.sun.target.position.set(car.x, 0, car.z);

  // markers
  if (G.checkpoint.visible) { const s = 1 + Math.sin(G.t * 3) * 0.05; G.checkpoint.beam.scale.set(s, 1, s); }
  if (G.mode !== 'race' && (!G.routeT || G.t - G.routeT > 0.4)) { G.route = computeRoute(); G.routeT = G.t; }
  const r = G.mode === 'race' ? null : G.route;
  if (r && r.length > 1 && !G.ended) {
    let wp = r[r.length - 1];
    for (let i = 1; i < r.length; i++) if (Math.hypot(r[i][0] - car.x, r[i][1] - car.z) > 9) { wp = r[i]; break; }
    const near = Math.hypot(wp[0] - car.x, wp[1] - car.z);
    G.arrow.visible = near > 6 && G.cam !== 2;
    G.arrow.position.set(car.x, 2.35 + G.smoothY + Math.sin(G.t * 4) * 0.08, car.z);
    G.arrow.rotation.y = Math.atan2(wp[0] - car.x, wp[1] - car.z);
  } else G.arrow.visible = false;

  // camera
  const fx = Math.sin(car.h), fz = Math.cos(car.h);
  const k = 1 - Math.exp(-dt * 5);
  if (G.mode === 'race' && G.cam !== 2 && G.cam !== 3) {
    const v = Math.abs(car.vx);
    const far = G.cam === 1;
    const bumper = G.cam === 4;
    let back = (far ? 8.5 : 6.2) + v * 0.025, up = (far ? 3.0 : 2.1) - Math.min(0.5, v * 0.006);
    if (bumper) { back = -1.6; up = 0.75; }
    // camera follows the velocity direction a little (shows drift angle)
    const [wx, wz] = car.worldVel();
    const vh = v > 3 ? Math.atan2(wx, wz) : car.h;
    const ch = bumper ? car.h : car.h + clamp(wrapAngle(vh - car.h), -0.6, 0.6) * 0.45 * (car.vx > 0 ? 1 : 0);
    const cfx = Math.sin(ch), cfz = Math.cos(ch);
    _v.set(car.x - cfx * back, G.smoothY + up, car.z - cfz * back);
    G.camPos.lerp(_v, bumper ? 1 : 1 - Math.exp(-dt * 9));
    _w.set(car.x + fx * 6, G.smoothY + (bumper ? 0.7 : 1.1), car.z + fz * 6);
    G.camLook.lerp(_w, bumper ? 1 : 1 - Math.exp(-dt * 12));
    camera.position.copy(G.camPos);
    const sk = G.shake + clamp((v - 45) / 40, 0, 1) * 0.06 + (car.nosOn ? 0.05 : 0);
    if (sk > 0) { camera.position.x += (Math.random() - 0.5) * sk * 0.4; camera.position.y += (Math.random() - 0.5) * sk * 0.3; G.shake = Math.max(0, G.shake - dt * 2); }
    camera.lookAt(G.camLook);
    camera.fov = lerp(camera.fov, 62 + clamp(v - 15, 0, 60) * 0.32 + (car.nosOn ? 8 : 0), clamp(dt * 4, 0, 1));
  } else if (G.cam === 2) {
    const lx = settings.side === 1 ? 0.36 : -0.36;
    const ch = Math.cos(car.h), sh = Math.sin(car.h);
    camera.position.set(car.x + sh * -0.2 + ch * lx, G.smoothY + 1.17, car.z + ch * -0.2 - sh * lx);
    const look = car.steer * 0.6;
    camera.lookAt(car.x + Math.sin(car.h + look) * 20, G.smoothY + 0.9, car.z + Math.cos(car.h + look) * 20);
    camera.fov = 70;
  } else {
    let back = 6.8, up = 2.6, ahead = 4;
    if (G.cam === 1) { back = 10; up = 10.5; ahead = 3; }
    if (G.cam === 3) { back = 0.5; up = 32; ahead = 0; }
    _v.set(car.x - fx * back, G.smoothY + up, car.z - fz * back);
    G.camPos.lerp(_v, G.cam === 3 ? 1 - Math.exp(-dt * 8) : k);
    _w.set(car.x + fx * ahead, G.smoothY + 1.0, car.z + fz * ahead);
    G.camLook.lerp(_w, 1 - Math.exp(-dt * 10));
    camera.position.copy(G.camPos);
    if (G.shake > 0) { camera.position.x += (Math.random() - 0.5) * G.shake * 0.4; camera.position.y += (Math.random() - 0.5) * G.shake * 0.4; G.shake = Math.max(0, G.shake - dt * 2); }
    camera.lookAt(G.camLook);
    camera.fov = 60 + clamp(Math.abs(car.vx) - 10, 0, 25) * 0.3;
  }
  camera.updateProjectionMatrix();

  const slip = Math.max(car.slipR, car.slipF * 0.8, car.wheelSpin, car.inp.handbrake && Math.abs(car.vx) > 2 ? 0.6 : 0);
  audio.update(car, car.inp.throttle, slip, G.input && G.input.horn, state === 'play' || (G.mode === 'race' && state === 'result'));
  if (G.mode === 'race') { raceHUD(); return; }
  G.minimap.draw(car, G.traffic.cars, G.route, (() => { const o = G.objs[G.objIdx]; return o ? (o.p ? [o.p.x, o.p.z] : [o.P.x, o.P.z]) : null; })());
  updateHUD();
}
function render() { if (G) R.render({ blur: G.fx ? G.fx.blur : 0, nos: G.fx ? G.fx.nos : 0 }); }


// =====================================================================
// STREET RACING
// =====================================================================
const TYPE_OF = { kestrel: 'tuner', raptor: 'muscle', vortex: 'gt', phantom: 'super' };
const AUDIO_PROFILE = { kestrel: { cyl: 4, turbo: true }, raptor: { cyl: 8, turbo: false }, vortex: { cyl: 6, turbo: true }, phantom: { cyl: 10, turbo: false } };
function raceProgress() { const p = loadProgress(); p.race = p.race || {}; return p; }
function winsCount() { const p = raceProgress(); return Object.values(p.race).filter((r) => r && r.win).length; }
function carIndex() { const i = settings.car || 0; return CARS[i] && winsCount() >= CARS[i].unlock ? i : 0; }

let rMsgTimer = null;
function raceMsg(text) {
  const el = $('#rMsg'); el.textContent = text; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(rMsgTimer); rMsgTimer = setTimeout(() => el.classList.remove('show'), 1600);
}
function raceFlash(color = '#fff') { const el = $('#rFlash'); el.style.background = color; el.style.transition = 'none'; el.style.opacity = 0.45; void el.offsetWidth; el.style.transition = 'opacity 0.5s'; el.style.opacity = 0; }

function startRace(ei) {
  if (G) { if (G.race) G.race.dispose(); disposeScene(G.scene); }
  ensureRenderer();
  const ev = EVENTS[ei];
  const scene = new THREE.Scene();
  const time = ev.tod;
  const sun = R.setupScene(scene, time);
  resize();
  const world = buildWorld(scene, T, { seed: 4242, time, parkFill: settings.quality === 'low' ? 0.04 : 0.08 });
  world.placeParked();
  world.finalize(ev.traffic);
  const ci = carIndex(), info = CARS[ci];
  const car = new CarPhysics(SPECS[info.id]);
  car.manual = !!settings.manual;
  if (settings.assists === false) car.assist = 0;
  const paint = settings.paint !== undefined ? settings.paint : info.color;
  const carMesh = buildCar(info.type, paint, { caliper: 0xd81e1e });
  scene.add(carMesh);
  const head = new THREE.SpotLight(0xfff3dc, 0, 90, 0.5, 0.45, 1.2);
  head.position.set(0, 0.8, 2.0); head.target.position.set(0, 0, 20);
  carMesh.add(head, head.target);
  const fx = new Effects(scene, T);
  const rand = mulberry32(500 + ei * 31);
  const ctx = { scene, world, carIndex: ci, msg: raceMsg, flash: raceFlash, toast: (t) => toast(t, 'info') };
  const race = new RaceManager(ctx, ev);
  race.setup(car);
  const traffic = new Traffic(world, ev.traffic, rand, settings.side);
  traffic.init(car);
  const peds = new Pedestrians(scene, world, rand, 0);
  world.setNight(time === 'night');
  audio.setProfile(AUDIO_PROFILE[info.id]);
  input.raceMode = true;
  document.body.classList.add('race-mode');
  G = {
    mode: 'race', ei, ev, M: { time: 0, free: true }, scene, world, car, carMesh, traffic, peds, head, sun, fx, race,
    checkpoint: { visible: false }, arrow: makeGuideArrow(), objs: [], t: 0, acc: 0, spin: 0, shake: 0, smoothY: 0,
    indicator: null, hazard: false, headlights: time === 'night', cam: [0, 1, 4].includes(settings.camera) ? settings.camera : 0,
    camPos: new THREE.Vector3(car.x - Math.sin(car.h) * 7, 2.5, car.z - Math.cos(car.h) * 7),
    camLook: new THREE.Vector3(car.x + Math.sin(car.h) * 6, 1, car.z + Math.cos(car.h) * 6),
    carLen: 2.3, ended: false, nearCD: 0, countdownShown: null, info,
    onPenalty: () => {}, cancelIndicator: () => {},
  };
  G.arrow.visible = false;
  G.rules = new Rules(G);
  G.minimap = new Minimap($('#minimap'), world);
  $('#objective').textContent = ev.name;
  $('#raceHud').classList.remove('hidden');
  $('#parkMeter').classList.add('hidden');
  $('#heat').classList.add('hidden');
  render();
}

function resetPlayer() {
  const car = G.car, race = G.race;
  if (race.path) {
    const s = race.player.s;
    const [x, z, h] = race.path.at(Math.max(0, s - 4));
    car.reset(x, z, h);
  } else {
    // nearest lane
    const loc = G.world.locate(car.x, car.z);
    const ix = clamp(Math.round((car.x + CFG.OFF) / CFG.S), 0, CFG.N), iz = clamp(Math.round((car.z + CFG.OFF) / CFG.S), 0, CFG.N);
    if (loc.type === 'road' && loc.axis === 0) car.reset(car.x, loc.rc + CFG.LANE_OFF, Math.PI / 2);
    else if (loc.type === 'road') car.reset(loc.rc - CFG.LANE_OFF, car.z, 0);
    else car.reset(roadCoord(ix) - CFG.LANE_OFF, roadCoord(iz) + 12, 0);
  }
  car.select('D'); car.manual = !!settings.manual;
  if (settings.assists === false) car.assist = 0;
  G.camPos.set(car.x - Math.sin(car.h) * 7, 2.5, car.z - Math.cos(car.h) * 7);
}

function raceUpdate(dt, inp) {
  const car = G.car, race = G.race;
  // simple auto reverse: hold brake at a standstill
  const still = Math.abs(car.vx) < 0.6;
  let throttle = inp.throttle, brake = inp.brake;
  if (car.selector === 'R') { throttle = inp.brake; brake = inp.throttle; if (still && inp.up && !inp.down) car.select('D'); }
  else if (still && inp.down && !inp.up) { G.downHeld = (G.downHeld || 0) + dt; if (G.downHeld > 0.3) { car.select('R'); G.downHeld = 0; } }
  else G.downHeld = 0;
  if (car.selector === 'P' || car.selector === 'N') car.select('D');
  car.inp.throttle = throttle; car.inp.brake = brake; car.inp.steer = inp.steer; car.inp.handbrake = inp.handbrake; car.inp.nos = inp.nos;
  if (window.__autopilot && race.path && race.t >= 0) { // test hook: let the AI drive the player's car
    G.auto = G.auto || new Driver(car, 1.0);
    G.auto.s = race.player.s; G.auto.prevS = race.player.s;
    G.auto.followPath(race.path, dt, G.traffic.cars.map((c) => ({ x: c.x, z: c.z, h: c.h, v: c.v })));
  }

  const outcome = race.update(dt, car, G.traffic.cars);
  G.topSpeed = Math.max(G.topSpeed || 0, Math.abs(car.vx) * 3.6);
  const step = 1 / 120;
  G.acc += dt;
  let n = 0;
  while (G.acc >= step && n < 10) {
    car.step(step); collide();
    race.step(step, car, G.traffic.cars, impact);
    G.acc -= step; n++;
  }
  G.traffic.update(dt, G.t, car);
  G.world.updateLights(G.t);
  G.t += dt;
  // countdown
  if (race.t < 0 && G.ev.kind !== 'roam') {
    const c = Math.ceil(-race.t);
    if (c !== G.countdownShown) { G.countdownShown = c; $('#rCount').textContent = c; audio.blip(440, 0.18, 0.2, 'square'); }
  } else if (G.countdownShown !== 'GO' && G.ev.kind !== 'roam') {
    G.countdownShown = 'GO'; $('#rCount').textContent = 'GO!'; audio.blip(880, 0.4, 0.22, 'square');
    setTimeout(() => { $('#rCount').textContent = ''; }, 900);
  }
  // nitro refill: drifting, speed, near misses
  const v = Math.abs(car.vx);
  const ang = Math.abs(Math.atan2(car.vy, Math.max(1, Math.abs(car.vx))));
  if (!car.nosOn) car.nos = Math.min(1, car.nos + dt * (0.012 + (ang > 0.2 && v > 10 ? 0.09 : 0) + (v > 40 ? 0.02 : 0)));
  G.nearCD -= dt;
  if (v > 22 && G.nearCD <= 0) {
    const sh = Math.sin(car.h), ch = Math.cos(car.h);
    for (const t of G.traffic.cars) {
      const dx = t.x - car.x, dz = t.z - car.z;
      const f = dx * sh + dz * ch, l = Math.abs(dx * ch - dz * sh);
      if (Math.abs(f) < 2.5 && l > 1.8 && l < 3.2) { car.nos = Math.min(1, car.nos + 0.12); raceMsg('NEAR MISS +NOS'); G.nearCD = 1.2; break; }
    }
  }
  if (outcome && !G.ended) endRace(outcome);
}
function raceCoast(dt) {
  const car = G.car;
  // after the finish the player's car is driven home by the AI (keeps rolling, brakes gently)
  car.inp.throttle = 0; car.inp.brake = 0.25; car.inp.nos = false; car.inp.handbrake = false;
  G.race.update(dt, car, G.traffic.cars);
  const step = 1 / 60;
  for (let k = 0; k < 2; k++) { car.step(step / 1); collide(); G.race.step(step, car, G.traffic.cars, () => {}); }
  G.traffic.update(dt, G.t, car); G.world.updateLights(G.t); G.t += dt;
}

function fmtTime(t) { t = Math.max(0, t); const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s.toFixed(2).padStart(5, '0')}`; }
let tachCtx = null;
function drawTach(car) {
  if (!tachCtx) tachCtx = $('#tach').getContext('2d');
  const g = tachCtx, W = 440, cx = 220, cy = 220, R0 = 190;
  g.clearRect(0, 0, W, W);
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  const maxR = Math.ceil(car.redline / 1000 + 1);
  g.lineCap = 'round';
  g.beginPath(); g.arc(cx, cy, R0, a0, a1); g.lineWidth = 26; g.strokeStyle = 'rgba(8,10,14,0.65)'; g.stroke();
  const ra = a0 + (a1 - a0) * (car.redline / 1000 / maxR);
  g.beginPath(); g.arc(cx, cy, R0, ra, a1); g.lineWidth = 10; g.strokeStyle = '#d62a1e'; g.stroke();
  const frac = clamp(car.rpm / 1000 / maxR, 0, 1);
  const grad = g.createLinearGradient(0, 400, 400, 0); grad.addColorStop(0, '#ff7a1a'); grad.addColorStop(1, '#ffd36b');
  g.beginPath(); g.arc(cx, cy, R0, a0, a0 + (a1 - a0) * frac); g.lineWidth = 12; g.strokeStyle = car.rpm > car.redline * 0.95 ? '#ff3020' : grad; g.stroke();
  g.fillStyle = '#fff'; g.font = 'bold 22px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let i = 0; i <= maxR; i++) {
    const a = a0 + (a1 - a0) * (i / maxR);
    g.fillText(String(i), cx + Math.cos(a) * (R0 - 36), cy + Math.sin(a) * (R0 - 36));
  }
  const na = a0 + (a1 - a0) * frac;
  g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(na) * (R0 - 10), cy + Math.sin(na) * (R0 - 10)); g.lineWidth = 6; g.strokeStyle = '#ff5a2a'; g.stroke();
  g.beginPath(); g.arc(cx, cy, 16, 0, Math.PI * 2); g.fillStyle = '#111'; g.fill();
  const mph = settings.units === 'mph';
  g.font = 'italic 900 92px system-ui'; g.fillStyle = '#fff';
  g.fillText(String(Math.round(Math.abs(car.vx) * (mph ? 2.237 : 3.6))), cx, cy + 68);
  g.font = 'bold 22px system-ui'; g.fillStyle = 'rgba(255,255,255,0.6)'; g.fillText(mph ? 'MPH' : 'KM/H', cx, cy + 120);
  g.font = 'italic 900 52px system-ui'; g.fillStyle = car.manual ? '#ffd36b' : '#7fd0ff';
  g.fillText(car.selector === 'R' ? 'R' : String(car.gear), cx, cy - 62);
}
function raceHUD() {
  const car = G.car, race = G.race, ev = G.ev;
  drawTach(car);
  $('#nosBar i').style.width = `${car.nos * 100}%`;
  const total = 1 + race.rivals.length;
  const showPos = race.rivals.length > 0;
  $('#rPos').style.display = showPos ? '' : 'none';
  if (showPos) setText('#rPos b', String(race.position())), setText('#rPos small', '/' + total);
  setText('#rLap', ev.kind === 'circuit' || ev.kind === 'drift' ? `LAP ${Math.min(race.laps, race.player.lap + 1)}/${race.laps}` : ev.kind === 'sprint' ? 'SPRINT' : ev.name.toUpperCase());
  const tt = Math.max(0, race.t);
  setText('#rTime', ev.time ? `${fmtTime(tt)}  /  ${fmtTime(ev.time)}` : fmtTime(tt));
  let info = '';
  if (ev.kind === 'drift') { const D = race.drift; info = `DRIFT ${D.score.toLocaleString()} / ${ev.target.toLocaleString()}` + (D.combo > 0 ? `\n+${Math.round(D.combo).toLocaleString()}  x${D.mult}` : ''); }
  if (ev.kind === 'speedtrap') info = `TRAPS ${Math.round(race.trapTotal)} / ${ev.target} km/h\n` + race.traps.map((t) => (t.hit ? Math.round(t.hit) : '—')).join('  ');
  if (race.lapTimes.length) info += (info ? '\n' : '') + 'BEST LAP ' + fmtTime(Math.min(...race.lapTimes));
  if (race.player.off > 45 && race.path) info += (info ? '\n' : '') + '⚠ OFF ROUTE — press R';
  setText('#rInfo', info);
  const H = race.heat;
  const showHeat = H.on || (race.cops.length > 0 && H.level > 0 && !H.evaded);
  $('#heat').classList.toggle('hidden', !H.on);
  if (H.on) {
    setText('#heatStars', '★'.repeat(Math.ceil(H.level)) + '☆'.repeat(5 - Math.ceil(H.level)));
    const busting = H.bust > 0.2;
    setText('#pStatus', busting ? 'BUSTED…' : H.cool > 0.5 ? 'EVADING' : 'PURSUIT');
    $('#pStatus').style.color = busting ? '#ff4a3a' : H.cool > 0.5 ? '#3fd07a' : '#fff';
    $('#pMeter').style.width = `${busting ? (H.bust / 3.5) * 100 : (H.cool / 11) * 100}%`;
    $('#pMeter').style.background = busting ? '#ff4a3a' : '#3fd07a';
  }
  void showHeat;
  // minimap: race path + rivals + cops
  const extra = [];
  for (const r of race.rivals) extra.push({ x: r.car.x, z: r.car.z, c: '#ff4040' });
  const blink = (G.t * 4) % 1 < 0.5;
  for (const c of race.cops) extra.push({ x: c.car.x, z: c.car.z, c: blink ? '#3b6bff' : '#ff3030', big: true });
  let route = null;
  if (race.path) {
    route = [];
    const step = 6;
    for (let s = race.player.s; s < race.player.s + 400 && (race.path.closed || s <= race.path.len); s += step) { const p = race.path.at(race.path.closed ? s % race.path.len : s); route.push([p[0], p[1]]); }
  }
  G.minimap.draw(car, G.traffic.cars, route, null, 1.0, extra);
}

function endRace(outcome) {
  if (G.ended) return;
  G.ended = true; state = 'result';
  const ev = G.ev, race = G.race;
  const p = raceProgress();
  const prev = p.race[ev.id] || {};
  const before = winsCount();
  p.race[ev.id] = { win: prev.win || outcome.win, best: outcome.win && race.player.time ? Math.min(prev.best || 1e9, race.player.time) : prev.best };
  saveProgress(p);
  const after = winsCount();
  const unlocked = CARS.filter((c) => c.unlock > before && c.unlock <= after);
  raceFlash(outcome.win ? '#3fd07a' : '#ff3a2a');
  raceMsg(outcome.win ? (ev.kind === 'pursuit' ? 'ESCAPED' : 'VICTORY') : outcome.reason.startsWith('BUSTED') ? 'BUSTED' : 'FINISHED');
  setTimeout(() => {
    $('#resTitle').textContent = outcome.win ? '🏆 ' + (ev.kind === 'circuit' || ev.kind === 'sprint' ? 'You won!' : 'Event complete!') : 'Event over';
    $('#resStars').innerHTML = outcome.win ? '★★★' : '<span class="off">★★★</span>';
    $('#resReason').textContent = outcome.reason + (unlocked.length ? `  🔓 Unlocked: ${unlocked.map((c) => c.name).join(', ')}!` : '');
    const stats = [['Event', ev.name], ['Time', fmtTime(race.player.time || race.t)], ['Top speed', `${Math.round(G.topSpeed || 0)} km/h`], ['Damage', `${Math.round(G.car.damage)}%`]];
    if (race.lapTimes.length) stats.push(['Best lap', fmtTime(Math.min(...race.lapTimes))]);
    if (race.rivals.length) stats.push(['Position', `${race.position()} / ${race.rivals.length + 1}`]);
    $('#resStats').innerHTML = stats.map(([a, b]) => `<div>${a}<b>${b}</b></div>`).join('');
    const rows = race.rivals.map((r) => ({ n: r.name, t: r.finished ? fmtTime(r.time) : 'racing…' }));
    $('#resLog').innerHTML = rows.map((r) => `<li style="color:#ddd">${r.n}: ${r.t}</li>`).join('');
    $('#btnNext').classList.toggle('hidden', G.ei >= EVENTS.length - 1);
    show('#result');
  }, 1800);
}

function buildRaceMenu() {
  const ci = carIndex();
  $('#carName').textContent = CARS[ci].name;
  const p = raceProgress();
  const grid = $('#eventGrid'); grid.innerHTML = '';
  const kinds = { sprint: 'SPRINT', circuit: 'CIRCUIT', drift: 'DRIFT', speedtrap: 'SPEED TRAP', pursuit: 'PURSUIT', roam: 'FREE ROAM' };
  const tod = { day: '☀ Day', sunset: '🌇 Sunset', night: '🌙 Night' };
  EVENTS.forEach((ev, i) => {
    const b = document.createElement('button'); b.className = 'ecard';
    const r = p.race[ev.id];
    b.innerHTML = `<div class="k">${kinds[ev.kind]} · ${tod[ev.tod]}</div><b>${ev.name}</b><div class="d">${ev.desc}</div>${r && r.win ? '<div class="w">✔ Won' + (r.best ? ' · ' + fmtTime(r.best) : '') + '</div>' : ''}`;
    b.onclick = () => openRaceBrief(i);
    grid.appendChild(b);
  });
}
let pendingRace = 0;
function openRaceBrief(i) {
  pendingRace = i; pendingMission = -1;
  const ev = EVENTS[i];
  $('#briefTitle').textContent = ev.name;
  $('#briefText').textContent = ev.desc;
  const bits = [`Car: ${CARS[carIndex()].name}`];
  if (ev.laps && ev.kind === 'circuit') bits.push(`${ev.laps} laps`);
  if (ev.rivals) bits.push(`${ev.rivals} rivals`);
  if (ev.time) bits.push(`Time limit ${fmtTime(ev.time)}`);
  bits.push(isTouch ? 'Wheel + pedals, NOS button, ↺ resets the car' : 'W/S/A/D drive · Shift nitro · Space handbrake · R reset · C camera');
  $('#briefMeta').textContent = bits.join(' · ');
  show('#brief');
}
function launchRace(i) {
  audio.start();
  show('#loading');
  setTimeout(() => { startRace(i); show(null); showHUD(true); state = 'play'; G.topSpeed = 0; }, 30);
}
function statBar(label, v) { return `<div class="stat"><span>${label}</span><i style="--p:${Math.round(clamp(v, 0.05, 1) * 100)}%"></i></div>`; }
function buildGarage() {
  const wins = winsCount();
  const box = $('#garageCars'); box.innerHTML = '';
  CARS.forEach((c, i) => {
    const sp = SPECS[c.id];
    const locked = wins < c.unlock;
    const b = document.createElement('button');
    b.className = 'gcar' + (carIndex() === i ? ' sel' : '') + (locked ? ' locked' : '');
    const hp = Math.round((sp.torque * sp.redline * 0.62) / 7121);
    b.innerHTML = `<b>${c.name}</b><p>${c.desc}${locked ? `<br>🔒 Win ${c.unlock} events to unlock` : ''}</p>` +
      statBar('Power', hp / 750) + statBar('Top speed', sp.vmax / 95) + statBar('Grip', (sp.mu - 0.9) / 0.45) +
      `<div class="stat"><span>${hp} hp</span><span>${['RWD', 'AWD', 'FWD'][sp.fd === 0 ? 0 : sp.fd < 1 ? 1 : 2]}</span><span>${Math.round(sp.vmax * 3.6)} km/h</span></div>`;
    b.onclick = () => { if (locked) return; settings.car = i; delete settings.paint; saveSettings(); buildGarage(); buildRaceMenu(); };
    box.appendChild(b);
  });
  const pb = $('#paints'); pb.innerHTML = '';
  const cur = settings.paint !== undefined ? settings.paint : CARS[carIndex()].color;
  for (const col of PAINTS) {
    const b = document.createElement('button');
    b.style.background = '#' + col.toString(16).padStart(6, '0');
    if (col === cur) b.classList.add('on');
    b.onclick = () => { settings.paint = col; saveSettings(); buildGarage(); };
    pb.appendChild(b);
  }
  syncSettings();
}
document.querySelectorAll('.tabs button').forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
    $('#tabRace').classList.toggle('hidden', b.dataset.tab !== 'race');
    $('#tabSchool').classList.toggle('hidden', b.dataset.tab !== 'school');
  };
});
$('#btnGarage').onclick = () => { buildGarage(); show('#garage'); };
$('#btnGarageBack').onclick = () => { buildRaceMenu(); show('#menu'); };

// ---------------- flow & screens ----------------
const screens = ['#menu', '#brief', '#pause', '#result', '#settings', '#help', '#loading', '#garage'];
function show(id) { for (const s of screens) $(s).classList.toggle('hidden', s !== id); }
function showHUD(on) { $('#hud').classList.toggle('hidden', !on); $('#touch').classList.toggle('hidden', !(on && isTouch)); }

function buildMenu() {
  buildRaceMenu();
  const prog = loadProgress();
  const grid = $('#missionGrid'); grid.innerHTML = '';
  MISSIONS.forEach((m, i) => {
    const b = document.createElement('button');
    b.className = 'mcard';
    const st = prog[m.id] || 0;
    const stars = m.free ? '<span class="st">&nbsp;</span>' : `<span class="st">${'★'.repeat(st)}<span class="off">${'★'.repeat(3 - st)}</span></span>`;
    b.innerHTML = `<div class="ic">${m.icon}</div><b>${i + 1}. ${m.name}</b>${stars}`;
    b.onclick = () => openBrief(i);
    grid.appendChild(b);
  });
}
let pendingMission = 0;
function openBrief(i) {
  pendingMission = i; pendingRace = -1;
  const m = MISSIONS[i];
  $('#briefTitle').textContent = `${m.icon} ${m.name}`;
  $('#briefText').textContent = m.brief;
  const bits = [];
  if (m.time) bits.push(`Time limit ${Math.floor(m.time / 60)}:${String(m.time % 60).padStart(2, '0')}`);
  bits.push(`Traffic: ${m.traffic > 30 ? 'heavy' : m.traffic > 12 ? 'medium' : 'light'}`);
  if (m.night) bits.push('Night');
  if (m.passMark) bits.push(`Pass mark ${m.passMark}`);
  bits.push(isTouch ? 'Use the gear buttons: start in P, tap D to drive.' : 'Car starts in P: press 4 (or ↑ with Easy gears) for D.');
  $('#briefMeta').textContent = bits.join(' · ');
  show('#brief');
}
function launch(i) {
  audio.start();
  input.raceMode = false; document.body.classList.remove('race-mode'); $('#raceHud').classList.add('hidden');
  audio.setProfile({ cyl: 4, turbo: false });
  show('#loading');
  setTimeout(() => {
    startMission(i);
    show(null); showHUD(true); state = 'play';
    toast(MISSIONS[i].objectives[0] ? MISSIONS[i].objectives[0].label : 'Free drive', 'info');
  }, 30);
}
function pause() { if (state !== 'play') return; state = 'pause'; show('#pause'); }
function resume() { state = 'play'; show(null); last = performance.now(); }
function endSession(success, reason) {
  if (G.ended) return;
  G.ended = true; state = 'result';
  const M = G.M, R = G.rules, car = G.car;
  const score = Math.max(0, R.score);
  let stars = 0;
  if (success) stars = score >= 90 ? 3 : score >= 75 ? 2 : 1;
  if (success && M.fuelBudget && car.fuelUsed > M.fuelBudget * 0.8 && stars === 3) stars = 2;
  if (success) {
    const p = loadProgress(); p[M.id] = Math.max(p[M.id] || 0, stars); saveProgress(p);
  }
  setTimeout(() => {
    $('#resTitle').textContent = success ? (M.id === 'exam' ? 'Exam passed!' : 'Mission complete') : 'Mission failed';
    $('#resStars').innerHTML = `${'★'.repeat(stars)}<span class="off">${'★'.repeat(3 - stars)}</span>`;
    $('#resReason').textContent = reason || '';
    const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    $('#resStats').innerHTML = [
      ['Score', score], ['Time', mmss(G.t)], ['Distance', `${(car.odo / 1000).toFixed(2)} km`],
      ['Fuel used', `${car.fuelUsed.toFixed(3)} L`], ['Damage', `${Math.round(car.damage)}%`], ['Violations', R.log.length],
    ].map(([a, b]) => `<div>${a}<b>${b}</b></div>`).join('');
    $('#resLog').innerHTML = R.log.map((l) => `<li>${l.text} (−${l.pts})</li>`).join('') || '<li style="color:#3fd07a">Clean drive — no violations!</li>';
    $('#btnNext').classList.toggle('hidden', !success || G.mi >= MISSIONS.length - 1);
    show('#result');
  }, success ? 600 : 1200);
}
function succeed() { endSession(true, G.M.fuelBudget ? `Fuel used: ${G.car.fuelUsed.toFixed(3)} L of ${G.M.fuelBudget} L budget` : ''); }
function fail(reason) { endSession(false, reason); }

$('#btnGo').onclick = () => (pendingRace >= 0 ? launchRace(pendingRace) : launch(pendingMission));
$('#btnBack').onclick = () => show('#menu');
$('#btnResume').onclick = resume;
$('#btnRestart').onclick = () => (G.mode === 'race' ? launchRace(G.ei) : launch(G.mi));
function toMenu() { state = 'menu'; showHUD(false); audio.update(G.car, 0, 0, false, false); audio.race(false, null, 0); buildMenu(); show('#menu'); }
$('#btnQuit').onclick = toMenu;
$('#btnRetry').onclick = () => (G.mode === 'race' ? launchRace(G.ei) : launch(G.mi));
$('#btnNext').onclick = () => (G.mode === 'race' ? openRaceBrief(G.ei + 1) : openBrief(G.mi + 1));
$('#btnResList').onclick = toMenu;
let settingsReturn = '#menu';
$('#btnSettings').onclick = () => { settingsReturn = '#menu'; syncSettings(); show('#settings'); };
$('#btnPauseSettings').onclick = () => { settingsReturn = '#pause'; syncSettings(); show('#settings'); };
$('#btnSettingsBack').onclick = () => show(settingsReturn);
$('#btnHelp').onclick = () => show('#help');
$('#btnHelpBack').onclick = () => show('#menu');
let pendingRaceInit = 0; void pendingRaceInit;
function syncSettings() {
  document.querySelectorAll('.seg').forEach((seg) => {
    const k = seg.dataset.key;
    seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', String(settings[k]) === b.dataset.v));
  });
}
document.querySelectorAll('.seg button').forEach((b) => {
  b.onclick = () => {
    const k = b.parentElement.dataset.key; let v = b.dataset.v;
    if (v === 'true' || v === 'false') v = v === 'true'; else if (!isNaN(Number(v))) v = Number(v);
    settings[k] = v; saveSettings(); syncSettings();
    if (k === 'sound') audio.setEnabled(v);
    if (k === 'quality') resize();
  };
});
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });

// ---------------- main loop ----------------
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (G && (state === 'play' || state === 'result')) {
    if (state === 'play') update(dt);
    else if (G.mode === 'race') raceCoast(dt);
    else { G.car.inp.throttle = 0; G.car.inp.brake = 1; G.car.step(dt); G.traffic.update(dt, G.t, G.car); G.peds.update(dt, G.car); G.world.updateLights(G.t); G.t += dt; }
    updateVisuals(dt);
    render();
  } else if (G && state === 'pause') {
    handleActionsPaused();
    render();
  }
  requestAnimationFrame(frame);
}
function handleActionsPaused() { for (const a of input.takeActions()) if (a === 'pause') resume(); }
buildMenu();
show('#menu');
requestAnimationFrame(frame);

// expose for debugging / automated tests
window.__game = { get G() { return G; }, get state() { return state; }, get R() { return R; }, launch, launchRace, MISSIONS, EVENTS, input };
