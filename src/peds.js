import * as THREE from 'three';
import { pedGeometries } from './models.js';

const SHIRTS = [0x2f5d8a, 0xa83232, 0xe0c341, 0x3d8a4d, 0xeeeeee, 0x222222, 0x8a4fa3, 0xd9772b, 0x6fa8dc];
const PANTS = [0x1f2a44, 0x2b2b2b, 0x5a4a3a, 0x3b4f6b, 0x777777];
const SKIN = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];

export class Pedestrians {
  constructor(scene, world, rand, perBlock) {
    this.W = world; this.list = [];
    const g = pedGeometries();
    const mk = (geo) => {
      const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), 400);
      im.castShadow = true; im.count = 0; im.frustumCulled = false;
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(im); return im;
    };
    this.body = mk(g.body); this.legs = mk(g.legs); this.head = mk(g.head);
    const c = new THREE.Color();
    for (const pb of world.peds) {
      const B = pb.block, ins = 2.1;
      const rect = [B.x0 + ins, B.x1 - ins, B.z0 + ins, B.z1 - ins];
      const w = rect[1] - rect[0], h = rect[3] - rect[2];
      const per = 2 * (w + h);
      for (let k = 0; k < perBlock; k++) {
        const i = this.list.length;
        if (i >= 400) break;
        this.list.push({ rect, w, h, per, s: rand() * per, dir: rand() < 0.5 ? 1 : -1, speed: 1.1 + rand() * 0.6, x: 0, z: 0, hd: 0, phase: rand() * 6, stop: 0, down: false });
        this.body.setColorAt(i, c.set(SHIRTS[(rand() * SHIRTS.length) | 0]));
        this.legs.setColorAt(i, c.set(PANTS[(rand() * PANTS.length) | 0]));
        this.head.setColorAt(i, c.set(SKIN[(rand() * SKIN.length) | 0]));
      }
    }
    for (const im of [this.body, this.legs, this.head]) { im.count = this.list.length; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.v = new THREE.Vector3(); this.sc = new THREE.Vector3(1, 1, 1);
  }

  posOn(p, s) {
    const { rect, w, h, per } = p;
    s = ((s % per) + per) % per;
    if (s < w) return [rect[0] + s, rect[2], 0];
    s -= w; if (s < h) return [rect[1], rect[2] + s, 1];
    s -= h; if (s < w) return [rect[1] - s, rect[3], 2];
    s -= w; return [rect[0], rect[3] - s, 3];
  }

  update(dt, player) {
    const fx = Math.sin(player.h), fz = Math.cos(player.h);
    this.list.forEach((p, i) => {
      if (!p.down) {
        // stop if the player's car is close in front of the pedestrian or heading at them
        const dx = p.x - player.x, dz = p.z - player.z;
        const dist = Math.hypot(dx, dz);
        const ahead = dx * fx + dz * fz;
        if (dist < 6 && (ahead > 0 || dist < 3.2) && Math.abs(player.vx) > 0.3) p.stop = 1.5;
        if (p.stop > 0) p.stop -= dt;
        else { p.s += p.dir * p.speed * dt; p.phase += dt * p.speed * 5; }
        const a = this.posOn(p, p.s), b = this.posOn(p, p.s + p.dir * 0.5);
        p.x = a[0]; p.z = a[1];
        p.hd = Math.atan2(b[0] - a[0], b[1] - a[1]);
      }
      const bob = p.down ? 0 : Math.abs(Math.sin(p.phase)) * 0.04;
      this.e.set(p.down ? Math.PI / 2 : 0, p.hd, 0, 'YXZ');
      this.q.setFromEuler(this.e);
      this.m.compose(this.v.set(p.x, 0.15 + bob + (p.down ? 0.2 : 0), p.z), this.q, this.sc);
      this.body.setMatrixAt(i, this.m); this.head.setMatrixAt(i, this.m);
      const legScale = p.down ? 1 : 1 - Math.abs(Math.sin(p.phase)) * 0.06;
      this.m.compose(this.v.set(p.x, 0.15 + (p.down ? 0.2 : 0), p.z), this.q, this.sc.set(1, legScale, 1));
      this.legs.setMatrixAt(i, this.m);
      this.sc.set(1, 1, 1);
    });
    for (const im of [this.body, this.legs, this.head]) im.instanceMatrix.needsUpdate = true;
  }
}
