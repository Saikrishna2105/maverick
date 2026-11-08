// 2D (x,z) collision helpers: oriented boxes, axis-aligned boxes and circles.

export function makeOBB(x, z, h, hl, hw) {
  const sh = Math.sin(h), ch = Math.cos(h);
  return { cx: x, cz: z, ax: [[sh, ch], [ch, -sh]], ext: [hl, hw] };
}
export function aabbToOBB(o) {
  return { cx: (o.minX + o.maxX) / 2, cz: (o.minZ + o.maxZ) / 2, ax: [[1, 0], [0, 1]], ext: [(o.maxX - o.minX) / 2, (o.maxZ - o.minZ) / 2] };
}
export function corners(A) {
  const out = [];
  for (const [s1, s2] of [[1, 1], [1, -1], [-1, -1], [-1, 1]]) {
    out.push([
      A.cx + A.ax[0][0] * A.ext[0] * s1 + A.ax[1][0] * A.ext[1] * s2,
      A.cz + A.ax[0][1] * A.ext[0] * s1 + A.ax[1][1] * A.ext[1] * s2,
    ]);
  }
  return out;
}
function inside(A, p) {
  const dx = p[0] - A.cx, dz = p[1] - A.cz;
  for (let i = 0; i < 2; i++) if (Math.abs(dx * A.ax[i][0] + dz * A.ax[i][1]) > A.ext[i] + 1e-3) return false;
  return true;
}

/** SAT test. Returns {depth, nx, nz, px, pz} with the normal pushing A out of B, or null. */
export function obbOverlap(A, B) {
  const dx = A.cx - B.cx, dz = A.cz - B.cz;
  let best = Infinity, nx = 0, nz = 0;
  const axes = [A.ax[0], A.ax[1], B.ax[0], B.ax[1]];
  for (const ax of axes) {
    const rA = A.ext[0] * Math.abs(A.ax[0][0] * ax[0] + A.ax[0][1] * ax[1]) + A.ext[1] * Math.abs(A.ax[1][0] * ax[0] + A.ax[1][1] * ax[1]);
    const rB = B.ext[0] * Math.abs(B.ax[0][0] * ax[0] + B.ax[0][1] * ax[1]) + B.ext[1] * Math.abs(B.ax[1][0] * ax[0] + B.ax[1][1] * ax[1]);
    const dist = dx * ax[0] + dz * ax[1];
    const o = rA + rB - Math.abs(dist);
    if (o <= 0) return null;
    if (o < best) { best = o; const s = dist >= 0 ? 1 : -1; nx = ax[0] * s; nz = ax[1] * s; }
  }
  // contact point: average of corners inside the other box
  let px = 0, pz = 0, n = 0;
  for (const c of corners(A)) if (inside(B, c)) { px += c[0]; pz += c[1]; n++; }
  for (const c of corners(B)) if (inside(A, c)) { px += c[0]; pz += c[1]; n++; }
  if (n) { px /= n; pz /= n; } else { px = (A.cx + B.cx) / 2; pz = (A.cz + B.cz) / 2; }
  return { depth: best, nx, nz, px, pz };
}

export function obbCircle(A, x, z, r) {
  const dx = x - A.cx, dz = z - A.cz;
  const l0 = dx * A.ax[0][0] + dz * A.ax[0][1];
  const l1 = dx * A.ax[1][0] + dz * A.ax[1][1];
  const c0 = Math.max(-A.ext[0], Math.min(A.ext[0], l0));
  const c1 = Math.max(-A.ext[1], Math.min(A.ext[1], l1));
  const qx = A.cx + A.ax[0][0] * c0 + A.ax[1][0] * c1;
  const qz = A.cz + A.ax[0][1] * c0 + A.ax[1][1] * c1;
  let ex = qx - x, ez = qz - z;
  let d = Math.hypot(ex, ez);
  if (d >= r) return null;
  if (d < 1e-4) { ex = -dx; ez = -dz; d = Math.hypot(ex, ez) || 1; }
  return { depth: r - d, nx: ex / d, nz: ez / d, px: qx, pz: qz };
}

/**
 * Resolves a contact between the car (dynamic) and an immovable object.
 * Returns the closing speed at the contact (m/s) for damage / penalties.
 */
export function resolveStatic(car, c, restitution = 0.25) {
  car.x += c.nx * c.depth; car.z += c.nz * c.depth;
  const [vx, vz] = car.worldVel();
  const rx = c.px - car.x, rz = c.pz - car.z;
  // point velocity = v + yawRate * (rz, -rx)
  const pvx = vx + car.r * rz, pvz = vz - car.r * rx;
  const vn = pvx * c.nx + pvz * c.nz;
  if (vn >= 0) return 0;
  const rn = rz * c.nx - rx * c.nz;
  const j = (-(1 + restitution) * vn) / (1 / car.m + (rn * rn) / car.I);
  let nvx = vx + (j * c.nx) / car.m, nvz = vz + (j * c.nz) / car.m;
  car.r += (j * rn) / car.I;
  // friction along the contact
  const tx = -c.nz, tz = c.nx;
  const vt = pvx * tx + pvz * tz;
  const rt = rz * tx - rx * tz;
  let jt = -vt / (1 / car.m + (rt * rt) / car.I);
  const lim = 0.35 * j;
  jt = Math.max(-lim, Math.min(lim, jt));
  nvx += (jt * tx) / car.m; nvz += (jt * tz) / car.m;
  car.r += (jt * rt) / car.I;
  car.r *= 0.85;
  car.setWorldVel(nvx, nvz);
  return -vn;
}

/** Contact between two dynamic cars (both get pushed). Returns closing speed. */
export function resolveDynamic(A, B, c, restitution = 0.2) {
  const tm = A.m + B.m;
  A.x += c.nx * c.depth * (B.m / tm); A.z += c.nz * c.depth * (B.m / tm);
  B.x -= c.nx * c.depth * (A.m / tm); B.z -= c.nz * c.depth * (A.m / tm);
  const [ax, az] = A.worldVel(), [bx, bz] = B.worldVel();
  const rax = c.px - A.x, raz = c.pz - A.z, rbx = c.px - B.x, rbz = c.pz - B.z;
  const pax = ax + A.r * raz, paz = az - A.r * rax;
  const pbx = bx + B.r * rbz, pbz = bz - B.r * rbx;
  const vn = (pax - pbx) * c.nx + (paz - pbz) * c.nz;
  if (vn >= 0) return 0;
  const rnA = raz * c.nx - rax * c.nz, rnB = rbz * c.nx - rbx * c.nz;
  const j = (-(1 + restitution) * vn) / (1 / A.m + 1 / B.m + (rnA * rnA) / A.I + (rnB * rnB) / B.I);
  A.setWorldVel(ax + (j * c.nx) / A.m, az + (j * c.nz) / A.m); A.r += (j * rnA) / A.I;
  B.setWorldVel(bx - (j * c.nx) / B.m, bz - (j * c.nz) / B.m); B.r -= (j * rnB) / B.I;
  A.r *= 0.9; B.r *= 0.9;
  return -vn;
}

const _tmp = [];
/** Collides a car against the static city. onImpact(kind, speed, x, z) */
export function collideWorld(car, W, hl, hw, onImpact) {
  let A = makeOBB(car.x, car.z, car.h, hl, hw);
  for (const o of W.query(car.x, car.z, 4, _tmp)) {
    const c = o.type === 'box' ? obbOverlap(A, aabbToOBB(o)) : obbCircle(A, o.x, o.z, o.r);
    if (c) {
      const imp = resolveStatic(car, c);
      if (onImpact) onImpact(o.kind, imp, c.px, c.pz);
      A = makeOBB(car.x, car.z, car.h, hl, hw);
    }
  }
}
