import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CFG, roadCoord, DIRS, rightOf, mulberry32, settings, clamp } from './config.js';
import { Fleet } from './carfactory.js';
import { CAR_COLORS } from './models.js';

const { N, S, ROAD_HALF: RH, SIDEWALK: SW, OFF, EDGE } = CFG;
const SLAB = 0.15;

// Assign UVs from world coordinates so textures tile continuously.
function worldUV(geo, su, sv, roofUV) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i));
    if (ny > 0.5) {
      if (roofUV) uv.setXY(i, roofUV[0], roofUV[1]);
      else uv.setXY(i, x / su, z / su);
    } else if (nx > 0.5) uv.setXY(i, z / su, y / sv);
    else uv.setXY(i, x / su, y / sv);
  }
  return geo;
}
function box(x0, x1, y0, y1, z0, z1) {
  const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0);
  g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  return g;
}
function flat(x0, x1, z0, z1, y) {
  const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
  g.rotateX(-Math.PI / 2);
  g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
  return g;
}

export function buildWorld(scene, T, opts = {}) {
  const rand = mulberry32(opts.seed || 1234);
  const SIDE = settings.side;
  const low = settings.quality === 'low';
  const W = {
    statics: [], grid: new Map(), cell: 16, blocks: [], slots: [], bays: [], peds: [],
    lightOffsets: [], junctionLamps: [], night: false, side: SIDE,
  };
  const buckets = {}; // material key -> geometries
  const push = (k, g) => { (buckets[k] = buckets[k] || []).push(g); };

  // ---------- static collision helpers ----------
  function addStatic(o) {
    W.statics.push(o);
    let x0, x1, z0, z1;
    if (o.type === 'box') { x0 = o.minX; x1 = o.maxX; z0 = o.minZ; z1 = o.maxZ; }
    else { x0 = o.x - o.r; x1 = o.x + o.r; z0 = o.z - o.r; z1 = o.z + o.r; }
    const c = W.cell;
    for (let cx = Math.floor(x0 / c); cx <= Math.floor(x1 / c); cx++)
      for (let cz = Math.floor(z0 / c); cz <= Math.floor(z1 / c); cz++) {
        const k = cx + ',' + cz;
        if (!W.grid.has(k)) W.grid.set(k, []);
        W.grid.get(k).push(o);
      }
  }
  const addBox = (minX, maxX, minZ, maxZ, kind) => addStatic({ type: 'box', minX, maxX, minZ, maxZ, kind });
  const addCircle = (x, z, r, kind) => addStatic({ type: 'circle', x, z, r, kind });
  const seen = new Set();
  W.query = (x, z, r, out) => {
    out.length = 0; seen.clear();
    const c = W.cell;
    for (let cx = Math.floor((x - r) / c); cx <= Math.floor((x + r) / c); cx++)
      for (let cz = Math.floor((z - r) / c); cz <= Math.floor((z + r) / c); cz++) {
        const arr = W.grid.get(cx + ',' + cz);
        if (!arr) continue;
        for (const o of arr) if (!seen.has(o)) { seen.add(o); out.push(o); }
      }
    return out;
  };

  // ---------- ground ----------
  const grassMat = new THREE.MeshStandardMaterial({ map: T.wrapRepeat(T.grass.clone(), 160, 160), roughness: 1 });
  grassMat.map.needsUpdate = true;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), grassMat);
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.03; ground.receiveShadow = true;
  scene.add(ground);
  const roadSize = EDGE * 2;
  const night = opts.time === 'night';
  const asphMat = new THREE.MeshStandardMaterial({
    map: T.wrapRepeat(T.asphalt.clone(), roadSize / 14, roadSize / 14),
    normalMap: T.wrapRepeat(T.asphaltN.clone(), roadSize / 3, roadSize / 3), normalScale: new THREE.Vector2(0.22, 0.22),
    roughnessMap: T.wrapRepeat(T.asphaltRough.clone(), roadSize / 23, roadSize / 23), roughness: night ? 0.62 : 1.0,
    envMapIntensity: night ? 1.2 : 0.55,
  });
  for (const t of [asphMat.map, asphMat.normalMap, asphMat.roughnessMap]) t.needsUpdate = true;
  const asph = new THREE.Mesh(new THREE.PlaneGeometry(roadSize, roadSize), asphMat);
  asph.rotation.x = -Math.PI / 2; asph.receiveShadow = true;
  scene.add(asph);

  // outer pavement ring + boundary wall
  const O0 = EDGE, O1 = EDGE + SW;
  push('walk', box(-O1, O1, 0, SLAB, -O1, -O0)); push('walk', box(-O1, O1, 0, SLAB, O0, O1));
  push('walk', box(-O1, -O0, 0, SLAB, -O0, O0)); push('walk', box(O0, O1, 0, SLAB, -O0, O0));
  const BW = O1 + 0.4;
  push('wall', box(-BW, BW, 0, 1.1, -BW, -O1)); push('wall', box(-BW, BW, 0, 1.1, O1, BW));
  push('wall', box(-BW, -O1, 0, 1.1, -O1, O1)); push('wall', box(O1, BW, 0, 1.1, -O1, O1));
  addBox(-BW - 5, BW + 5, -BW - 5, -O1, 'wall'); addBox(-BW - 5, BW + 5, O1, BW + 5, 'wall');
  addBox(-BW - 5, -O1, -BW, BW, 'wall'); addBox(O1, BW + 5, -BW, BW, 'wall');

  // ---------- trees & lamps (instanced) ----------
  const trees = []; const lamps = [];

  // ---------- blocks ----------
  const LOT = [3, 1], PARK = [1, 3];
  for (let bi = 0; bi < N; bi++) for (let bj = 0; bj < N; bj++) {
    const x0 = roadCoord(bi) + RH, x1 = roadCoord(bi + 1) - RH;
    const z0 = roadCoord(bj) + RH, z1 = roadCoord(bj + 1) - RH;
    let type = 'city';
    if (bi === LOT[0] && bj === LOT[1]) type = 'lot';
    if (bi === PARK[0] && bj === PARK[1]) type = 'park';
    const B = { bi, bj, x0, x1, z0, z1, type };
    W.blocks.push(B);
    if (type === 'lot') { buildLot(B); continue; }
    push('walk', box(x0, x1, 0, SLAB, z0, z1));
    // street trees on the pavement edge
    const step = 16;
    for (const edge of [0, 1, 2, 3]) {
      const len = edge < 2 ? x1 - x0 : z1 - z0;
      for (let a = 14; a < len - 12; a += step) {
        let tx, tz;
        if (edge === 0) { tx = x0 + a; tz = z0 + 1.3; } else if (edge === 1) { tx = x0 + a; tz = z1 - 1.3; }
        else if (edge === 2) { tx = x0 + 1.3; tz = z0 + a; } else { tx = x1 - 1.3; tz = z0 + a; }
        if (((a / step) | 0) % 2 === 0) { trees.push([tx, tz, 0.8 + rand() * 0.5]); addCircle(tx, tz, 0.35, 'tree'); }
        else { lamps.push([tx, tz, edge]); addCircle(tx, tz, 0.18, 'pole'); }
      }
    }
    if (type === 'park') {
      push('grass', box(x0 + SW, x1 - SW, 0, SLAB + 0.02, z0 + SW, z1 - SW));
      for (let k = 0; k < 28; k++) {
        const tx = x0 + SW + 3 + rand() * (x1 - x0 - 2 * SW - 6);
        const tz = z0 + SW + 3 + rand() * (z1 - z0 - 2 * SW - 6);
        trees.push([tx, tz, 1 + rand() * 0.8]); addCircle(tx, tz, 0.4, 'tree');
      }
      // fountain
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      push('wall', new THREE.CylinderGeometry(4, 4.2, 0.7, 24).translate(cx, 0.35, cz));
      addCircle(cx, cz, 4.2, 'wall');
      W.peds.push({ block: B });
      continue;
    }
    // buildings
    const ix0 = x0 + SW, ix1 = x1 - SW, iz0 = z0 + SW, iz1 = z1 - SW;
    const lots = [];
    if (rand() < 0.22) lots.push([ix0, ix1, iz0, iz1]);
    else {
      const mx = (ix0 + ix1) / 2, mz = (iz0 + iz1) / 2, gap = 1.5;
      lots.push([ix0, mx - gap, iz0, mz - gap], [mx + gap, ix1, iz0, mz - gap], [ix0, mx - gap, mz + gap, iz1], [mx + gap, ix1, mz + gap, iz1]);
    }
    const centrality = 1 - Math.hypot((x0 + x1) / 2, (z0 + z1) / 2) / (OFF * 1.4);
    for (const l of lots) {
      const ins = rand() * 1.2;
      const bx0 = l[0] + ins, bx1 = l[1] - ins, bz0 = l[2] + ins, bz1 = l[3] - ins;
      const h = 9 + Math.pow(rand(), 1.6) * (20 + 45 * centrality);
      const f = (rand() * T.facades.length) | 0;
      const shopH = 4.6;
      push('shop', worldUV(box(bx0, bx1, SLAB, SLAB + shopH, bz0, bz1), 24, shopH, [0.01, 0.98]));
      push('f' + f, worldUV(box(bx0 + 0.05, bx1 - 0.05, SLAB + shopH, SLAB + h, bz0 + 0.05, bz1 - 0.05), 12, 12.8, [0.02, 0.02]));
      push('ledge', box(bx0 - 0.25, bx1 + 0.25, SLAB + shopH, SLAB + shopH + 0.35, bz0 - 0.25, bz1 + 0.25));
      push('roof', box(bx0 + 0.3, bx1 - 0.3, SLAB + h, SLAB + h + 0.5, bz0 + 0.3, bz1 - 0.3));
      addBox(bx0, bx1, bz0, bz1, 'building');
      if (h > 26 && rand() < 0.55) {
        const s = 2.5 + rand() * 3, h2 = 6 + rand() * 14;
        push('f' + f, worldUV(box(bx0 + s, bx1 - s, SLAB + h, SLAB + h + h2, bz0 + s, bz1 - s), 12, 12.8, [0.02, 0.02]));
      }
      if (rand() < 0.6) {
        const ax = bx0 + 2 + rand() * (bx1 - bx0 - 6), az = bz0 + 2 + rand() * (bz1 - bz0 - 6);
        push('roof', box(ax, ax + 2.5, SLAB + h, SLAB + h + 1.6, az, az + 2));
      }
    }
    W.peds.push({ block: B });
  }

  function buildLot(B) {
    const { x0, x1, z0, z1 } = B;
    const wi = 0.6, wt = 0.3, wh = 0.8, gap = 10;
    const mx = (x0 + x1) / 2;
    const walls = [
      [x0 + wi, x1 - wi, z0 + wi, z0 + wi + wt, true], [x0 + wi, x1 - wi, z1 - wi - wt, z1 - wi, true],
      [x0 + wi, x0 + wi + wt, z0 + wi, z1 - wi, false], [x1 - wi - wt, x1 - wi, z0 + wi, z1 - wi, false],
    ];
    for (const w of walls) {
      if (w[4]) {
        for (const seg of [[w[0], mx - gap / 2], [mx + gap / 2, w[1]]]) {
          push('wall', box(seg[0], seg[1], 0, wh, w[2], w[3])); addBox(seg[0], seg[1], w[2], w[3], 'wall');
        }
      } else { push('wall', box(w[0], w[1], 0, wh, w[2], w[3])); addBox(w[0], w[1], w[2], w[3], 'wall'); }
    }
    const rows = [[8, 13.5], [20.5, 26], [26, 31.5], [38.5, 44]];
    const bw = 2.7, nb = 19, bx = mx - (nb * bw) / 2;
    for (let r = 0; r < rows.length; r++) {
      const za = z0 + rows[r][0], zb = z0 + rows[r][1];
      for (let k = 0; k <= nb; k++) push('white', flat(bx + k * bw - 0.06, bx + k * bw + 0.06, za, zb, 0.02));
      if (r === 0 || r === 3) push('white', flat(bx, bx + nb * bw, r === 0 ? za - 0.06 : zb - 0.06, r === 0 ? za + 0.06 : zb + 0.06, 0.02));
      if (r === 1) push('white', flat(bx, bx + nb * bw, zb - 0.06, zb + 0.06, 0.02));
      for (let k = 0; k < nb; k++) {
        W.bays.push({ x: bx + (k + 0.5) * bw, z: (za + zb) / 2, row: r, k, len: zb - za, wid: bw, occupied: rand() < 0.55, heading: rand() < 0.5 ? 0 : Math.PI });
      }
    }
    // "P" sign by the entrance
    const signX = mx + gap / 2 + 1, signZ = z0 + wi - 0.1;
    push('pole', new THREE.CylinderGeometry(0.06, 0.06, 2.6, 6).translate(signX, 1.3, signZ));
    push('sign', box(signX - 0.45, signX + 0.45, 2.2, 3.1, signZ - 0.05, signZ + 0.05));
    addCircle(signX, signZ, 0.12, 'pole');
  }

  // ---------- road markings, parking slots ----------
  const roadPt = (axis, rc, along, lat) => (axis === 0 ? [along, rc + lat] : [rc + lat, along]);
  function rect(axis, rc, a0, a1, l0, l1, key) {
    const p0 = roadPt(axis, rc, a0, l0), p1 = roadPt(axis, rc, a1, l1);
    push(key, flat(Math.min(p0[0], p1[0]), Math.max(p0[0], p1[0]), Math.min(p0[1], p1[1]), Math.max(p0[1], p1[1]), 0.02));
  }
  const fill = opts.parkFill !== undefined ? opts.parkFill : low ? 0.18 : 0.3;
  for (let axis = 0; axis < 2; axis++) for (let ri = 0; ri <= N; ri++) {
    const rc = roadCoord(ri);
    const pls = SIDE * (axis === 0 ? 1 : -1); // lateral side of traffic moving in +along
    for (let si = 0; si < N; si++) {
      const a0 = roadCoord(si) + RH, a1 = roadCoord(si + 1) - RH;
      // centre line
      rect(axis, rc, a0 + 4, a0 + 14, -0.07, 0.07, 'white');
      rect(axis, rc, a1 - 14, a1 - 4, -0.07, 0.07, 'white');
      for (let a = a0 + 17; a < a1 - 16; a += 9) rect(axis, rc, a, a + 3, -0.07, 0.07, 'white');
      // lane edge lines
      for (const s of [-1, 1]) rect(axis, rc, a0 + 4, a1 - 4, s * 3.5 - 0.06, s * 3.5 + 0.06, 'white');
      // zebra crossings
      for (const [c0, c1] of [[a0 + 0.4, a0 + 3.4], [a1 - 3.4, a1 - 0.4]])
        for (let l = -RH + 0.6; l < RH - 0.5; l += 1.0) rect(axis, rc, c0, c1, l, l + 0.5, 'white');
      // stop lines
      rect(axis, rc, a1 - 4.3, a1 - 3.9, 0, pls * 3.5, 'white');
      rect(axis, rc, a0 + 3.9, a0 + 4.3, 0, -pls * 3.5, 'white');
      // parking slots on both sides
      const nSlots = 7, mid = (a0 + a1) / 2, start = mid - (nSlots * CFG.SLOT_LEN) / 2;
      for (const s of [-1, 1]) {
        for (let k = 0; k <= nSlots; k++) {
          const a = start + k * CFG.SLOT_LEN;
          rect(axis, rc, a - 0.06, a + 0.06, s * 3.5, s * (RH - 0.3), 'white');
        }
        for (let k = 0; k < nSlots; k++) {
          const along = start + (k + 0.5) * CFG.SLOT_LEN;
          const p = roadPt(axis, rc, along, s * CFG.PARK_OFF);
          const forward = s === pls ? 1 : -1;
          const heading = axis === 0 ? (forward > 0 ? Math.PI / 2 : -Math.PI / 2) : (forward > 0 ? 0 : Math.PI);
          W.slots.push({ x: p[0], z: p[1], axis, ri, si, side: s, k, heading, occupied: rand() < fill, len: CFG.SLOT_LEN, wid: 2.4 });
        }
      }
    }
  }

  // ---------- traffic lights ----------
  const CYCLE = 38;
  const segs = [
    [[0, 14, 'G'], [14, 17, 'Y'], [17, 38, 'R']],
    [[0, 19, 'R'], [19, 33, 'G'], [33, 36, 'Y'], [36, 38, 'R']],
  ];
  for (let ix = 0; ix <= N; ix++) { W.lightOffsets.push([]); for (let iz = 0; iz <= N; iz++) W.lightOffsets[ix].push(rand() * CYCLE); }
  W.lightState = (ix, iz, axis, t) => {
    const tt = (((t + W.lightOffsets[ix][iz]) % CYCLE) + CYCLE) % CYCLE;
    const sg = segs[axis];
    for (let k = 0; k < sg.length; k++) {
      const s = sg[k];
      if (tt >= s[0] && tt < s[1]) {
        let since = tt - s[0];
        if (s[2] === 'R' && k === 0 && sg[sg.length - 1][2] === 'R') since += CYCLE - sg[sg.length - 1][0];
        let remain = s[1] - tt;
        if (s[2] === 'R' && k === sg.length - 1 && sg[0][2] === 'R') remain += sg[0][1];
        return { s: s[2], since, remain };
      }
    }
    return { s: 'R', since: 0, remain: 0 };
  };
  const lampSpecs = [];
  for (let ix = 0; ix <= N; ix++) for (let iz = 0; iz <= N; iz++) {
    const bx = roadCoord(ix), bz = roadCoord(iz);
    for (let d = 0; d < 4; d++) {
      const fromX = ix - DIRS[d][0], fromZ = iz - DIRS[d][1];
      if (fromX < 0 || fromX > N || fromZ < 0 || fromZ > N) continue;
      const r = rightOf(d), o = RH + 0.8;
      const px = bx - DIRS[d][0] * o + r[0] * SIDE * o, pz = bz - DIRS[d][1] * o + r[1] * SIDE * o;
      push('pole', new THREE.CylinderGeometry(0.09, 0.11, 3.6, 8).translate(px, 1.8, pz));
      const hx = px - DIRS[d][0] * 0.05, hz = pz - DIRS[d][1] * 0.05;
      const hw = DIRS[d][0] !== 0 ? [0.25, 0.4] : [0.4, 0.25];
      push('housing', box(hx - hw[0] / 2, hx + hw[0] / 2, 2.55, 3.65, hz - hw[1] / 2, hz + hw[1] / 2));
      addCircle(px, pz, 0.2, 'pole');
      const axis = d % 2;
      ['R', 'Y', 'G'].forEach((c, k) => {
        lampSpecs.push({ ix, iz, axis, c, x: hx - DIRS[d][0] * 0.16, y: 3.42 - k * 0.33, z: hz - DIRS[d][1] * 0.16 });
      });
    }
  }
  const lampGeo = new THREE.SphereGeometry(0.13, 6, 4);
  const lampMesh = new THREE.InstancedMesh(lampGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }), lampSpecs.length);
  const tm = new THREE.Matrix4(), col = new THREE.Color();
  lampSpecs.forEach((l, i) => { tm.makeTranslation(l.x, l.y, l.z); lampMesh.setMatrixAt(i, tm); lampMesh.setColorAt(i, col.set(0x222222)); });
  scene.add(lampMesh);
  const LC = { R: [[0.25, 0.03, 0.03], [2.2, 0.1, 0.05]], Y: [[0.25, 0.18, 0.02], [2.2, 1.4, 0.05]], G: [[0.03, 0.2, 0.08], [0.1, 2.2, 0.6]] };
  let lastLightUpd = -1;
  W.updateLights = (t) => {
    if (Math.abs(t - lastLightUpd) < 0.1) return;
    lastLightUpd = t;
    const cache = {};
    lampSpecs.forEach((l, i) => {
      const key = l.ix * 100 + l.iz * 10 + l.axis;
      const st = cache[key] || (cache[key] = W.lightState(l.ix, l.iz, l.axis, t).s);
      const c = LC[l.c][st === l.c ? 1 : 0];
      lampMesh.setColorAt(i, col.setRGB(c[0], c[1], c[2]));
    });
    lampMesh.instanceColor.needsUpdate = true;
  };

  // ---------- trees mesh ----------
  const trunkGeo = new THREE.CylinderGeometry(0.15, 0.22, 2.6, 6); trunkGeo.translate(0, 1.3, 0);
  // crown: a cluster of lumpy blobs for a natural silhouette
  const blobs = [];
  const blobSpec = [[0, 4.0, 0, 1.6], [0.9, 3.6, 0.3, 1.2], [-0.8, 3.7, -0.4, 1.25], [0.2, 4.7, -0.5, 1.15]];
  for (const [x, y, z, r] of blobSpec) {
    const b = new THREE.IcosahedronGeometry(r, 1);
    const p = b.attributes.position;
    for (let i = 0; i < p.count; i++) { const k = 1 + (Math.sin(p.getX(i) * 7.1 + p.getY(i) * 5.3) * Math.cos(p.getZ(i) * 6.7)) * 0.12; p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k); }
    b.translate(x, y, z); blobs.push(b.toNonIndexed());
  }
  const crownGeo = mergeGeometries(blobs); crownGeo.computeVertexNormals();
  // outside the city
  for (let k = 0; k < (low ? 30 : 70); k++) {
    const a = rand() * Math.PI * 2, r = O1 + 8 + rand() * 120;
    trees.push([Math.cos(a) * r, Math.sin(a) * r, 1 + rand()]);
  }
  const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x5b4330, roughness: 1 }), trees.length);
  const crowns = new THREE.InstancedMesh(crownGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, normalMap: T.concreteN, normalScale: new THREE.Vector2(1.5, 1.5) }), trees.length);
  crowns.castShadow = true; trunks.castShadow = false;
  const q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  trees.forEach((t, i) => {
    const y = Math.abs(t[0]) < EDGE + SW && Math.abs(t[1]) < EDGE + SW ? SLAB : 0;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * 6.28);
    tm.compose(pv.set(t[0], y, t[1]), q, sv.set(t[2], t[2] * (0.85 + rand() * 0.4), t[2]));
    trunks.setMatrixAt(i, tm); crowns.setMatrixAt(i, tm);
    crowns.setColorAt(i, col.setHSL(0.22 + rand() * 0.08, 0.38 + rand() * 0.2, 0.16 + rand() * 0.08));
  });
  scene.add(trunks, crowns);

  // ---------- street lamps ----------
  const poleGeo = new THREE.CylinderGeometry(0.08, 0.12, 6, 6); poleGeo.translate(0, 3, 0);
  const armGeo = new THREE.BoxGeometry(0.08, 0.08, 1.6); armGeo.translate(0, 6, 0.8);
  const lampPoleGeo = mergeGeometries([poleGeo.toNonIndexed(), armGeo.toNonIndexed()]);
  const headGeo = new THREE.BoxGeometry(0.35, 0.12, 0.7); headGeo.translate(0, 5.94, 1.5);
  const glowGeo = new THREE.PlaneGeometry(13, 13); glowGeo.rotateX(-Math.PI / 2); glowGeo.translate(0, 0.05, 2.4);
  const lampPoles = new THREE.InstancedMesh(lampPoleGeo, new THREE.MeshStandardMaterial({ color: 0x3a3d40, roughness: 0.6, metalness: 0.5 }), lamps.length);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, emissive: 0xffd9a0, emissiveIntensity: 0 });
  const lampHeads = new THREE.InstancedMesh(headGeo, headMat, lamps.length);
  const glowMat = new THREE.MeshBasicMaterial({ map: T.glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const glows = new THREE.InstancedMesh(glowGeo, glowMat, lamps.length);
  glows.visible = false;
  lampPoles.castShadow = true;
  lamps.forEach((l, i) => {
    // arm points toward the road: edge 0 -> -z, 1 -> +z, 2 -> -x, 3 -> +x
    const ang = [Math.PI, 0, -Math.PI / 2, Math.PI / 2][l[2]];
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), ang);
    tm.compose(pv.set(l[0], SLAB, l[1]), q, sv.set(1, 1, 1));
    lampPoles.setMatrixAt(i, tm); lampHeads.setMatrixAt(i, tm); glows.setMatrixAt(i, tm);
  });
  scene.add(lampPoles, lampHeads, glows);

  // ---------- merge static geometry ----------
  const facadeMats = T.facades.map((f) => new THREE.MeshStandardMaterial({
    map: f.map, roughnessMap: f.rough, metalnessMap: f.metal, metalness: 0.9, roughness: 1,
    emissiveMap: f.em, emissive: 0xffffff, emissiveIntensity: 0, envMapIntensity: 1.3,
  }));
  const walkTex = T.sidewalk.clone(); walkTex.needsUpdate = true;
  const shopMat = new THREE.MeshStandardMaterial({ map: T.shops, emissiveMap: T.shopsEm, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.5, metalness: 0.2 });
  const mats = {
    walk: new THREE.MeshStandardMaterial({ map: walkTex, normalMap: T.pavingN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.9 }),
    shop: shopMat,
    ledge: new THREE.MeshStandardMaterial({ color: 0x8c877e, roughness: 0.8, normalMap: T.concreteN }),
    grass: new THREE.MeshStandardMaterial({ map: T.grass, roughness: 1 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x9c968c, roughness: 0.9 }),
    roof: new THREE.MeshStandardMaterial({ color: 0x55575a, roughness: 0.95 }),
    white: new THREE.MeshStandardMaterial({ color: 0xe9e9e2, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    pole: new THREE.MeshStandardMaterial({ color: 0x45484c, roughness: 0.5, metalness: 0.6 }),
    housing: new THREE.MeshStandardMaterial({ color: 0x1c1d1f, roughness: 0.6 }),
    sign: new THREE.MeshStandardMaterial({ color: 0x1f5fbf, roughness: 0.5 }),
  };
  facadeMats.forEach((m, i) => { mats['f' + i] = m; });
  for (const k of Object.keys(buckets)) {
    let list = buckets[k];
    if (k === 'walk' || k === 'grass' || k === 'wall' || k === 'ledge') list = list.map((g) => worldUV(g, 4, 4));
    const merged = mergeGeometries(list.map((g) => (g.index ? g.toNonIndexed() : g)));
    const mesh = new THREE.Mesh(merged, mats[k]);
    mesh.receiveShadow = true;
    mesh.castShadow = k[0] === 'f' || k === 'shop' || k === 'wall' || k === 'roof' || k === 'pole' || k === 'housing';
    scene.add(mesh);
  }
  W.facadeMats = facadeMats;

  // ---------- parked cars ----------
  W.reserveSlot = null; // set by missions before cars are placed
  W.placeParked = (reservedSlots, reservedBays) => {
    const list = [];
    for (const s of W.slots) {
      if (reservedSlots && reservedSlots.has(s)) continue;
      if (s.occupied) list.push({ x: s.x, z: s.z, h: s.heading, ref: s });
    }
    for (const b of W.bays) {
      if (reservedBays && reservedBays.has(b)) continue;
      if (b.occupied) list.push({ x: b.x, z: b.z, h: b.heading, ref: b });
    }
    W.parked = list;
    return list;
  };
  W.cars = null; // CarInstancer, created in finalize
  W.finalize = (aiCount) => {
    const parked = W.parked || [];
    W.cars = new Fleet(scene, ['sedan', 'hatch', 'suv'], aiCount + 4, T.beam);
    W.parkedFleet = new Fleet(scene, ['sedan', 'hatch', 'suv'], 160, T.beam);
    for (const p of parked) {
      p.k = rand() < 0.45 ? 0 : rand() < 0.6 ? 1 : 2;
      p.col = CAR_COLORS[(rand() * CAR_COLORS.length) | 0];
      p.dx = (rand() - 0.5) * 0.2; p.dh = (rand() - 0.5) * 0.04;
      const hl = CFG.CAR_HL, hw = CFG.CAR_HW;
      const alongZ = Math.abs(Math.cos(p.h)) > 0.5;
      addBox(p.x - (alongZ ? hw : hl), p.x + (alongZ ? hw : hl), p.z - (alongZ ? hl : hw), p.z + (alongZ ? hl : hw), 'car');
    }
    W.cullParked(0, 0, true);
  };
  // draw only the parked cars near the camera (they are static, so refresh twice a second)
  let lastCull = { x: 1e9, z: 1e9 };
  W.cullParked = (cx, cz, force) => {
    if (!force && Math.hypot(cx - lastCull.x, cz - lastCull.z) < 12) return;
    lastCull = { x: cx, z: cz };
    const F = W.parkedFleet; F.reset();
    const R2 = 135 * 135;
    const counts = [0, 0, 0];
    for (const p of W.parked) {
      if ((p.x - cx) ** 2 + (p.z - cz) ** 2 > R2 || counts[p.k] >= 160) continue;
      counts[p.k]++;
      const h = F.add(p.k);
      F.setColor(h, p.col);
      F.set(h, p.x + p.dx, W.groundHeight(p.x, p.z) > 0 ? SLAB : 0, p.z, p.h + p.dh, 0, 0, null);
    }
    F.flush();
  };

  // ---------- spatial queries ----------
  W.locate = (x, z) => {
    if (Math.abs(x) > EDGE || Math.abs(z) > EDGE) return { type: 'outside' };
    const fx = (x + OFF) / S, fz = (z + OFF) / S;
    const ix = Math.round(fx), iz = Math.round(fz);
    const inX = Math.abs(z - roadCoord(iz)) < RH; // on a road running along x
    const inZ = Math.abs(x - roadCoord(ix)) < RH; // on a road running along z
    if (inX && inZ) return { type: 'junction', ix, iz };
    if (inX) return { type: 'road', axis: 0, ri: iz, rc: roadCoord(iz), si: clamp(Math.floor(fx), 0, N - 1) };
    if (inZ) return { type: 'road', axis: 1, ri: ix, rc: roadCoord(ix), si: clamp(Math.floor(fz), 0, N - 1) };
    const bi = clamp(Math.floor(fx), 0, N - 1), bj = clamp(Math.floor(fz), 0, N - 1);
    return { type: 'block', block: W.blocks[bi * N + bj] };
  };
  W.groundHeight = (x, z) => {
    const l = W.locate(x, z);
    if (l.type === 'outside') return SLAB;
    if (l.type === 'block') return l.block.type === 'lot' ? 0 : SLAB;
    return 0;
  };

  W.setNight = (on) => {
    W.night = on;
    for (const m of facadeMats) m.emissiveIntensity = on ? 0.75 : 0;
    shopMat.emissiveIntensity = on ? 0.38 : 0;
    headMat.emissiveIntensity = on ? 8 : 0;
    glows.visible = on;
    if (W.cars) W.cars.setNight(on);
    if (W.parkedFleet) W.parkedFleet.setNight(false);
  };
  return W;
}
