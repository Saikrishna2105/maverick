import { CFG, roadCoord, DIRS, rightOf, headingOfDir, wrapAngle, settings } from './config.js';

// A point in the driving lane, `dist` metres from junction (ix,iz) travelling in direction d.
export function lanePoint(ix, iz, d, dist) {
  const r = rightOf(d), lo = settings.side * CFG.LANE_OFF;
  return {
    x: roadCoord(ix) + DIRS[d][0] * dist + r[0] * lo,
    z: roadCoord(iz) + DIRS[d][1] * dist + r[1] * lo,
    h: headingOfDir(d), ix, iz, d,
  };
}

const reach = (ix, iz, d, dist, label, stop = false) => ({ type: 'reach', ix, iz, d, dist, label, stop });

export const MISSIONS = [
  {
    id: 'lesson', name: 'First Lesson', icon: '🚗',
    brief: 'Get a feel for the car. The car starts in P — select D, release the brake and drive to the marker. Stop at red lights and keep to your lane.',
    traffic: 10, pedsPerBlock: 2, time: 240, start: [1, 2, 0, 16],
    objectives: [reach(3, 2, 1, 40, 'Drive to the marker')],
  },
  {
    id: 'kerb', name: 'Kerbside', icon: '🅿️',
    brief: 'Parallel park in the green bay between the two parked cars. Use reverse (R), go slowly and line up with the kerb.',
    traffic: 6, pedsPerBlock: 2, time: 180, start: [2, 3, 0, 12],
    objectives: [{ type: 'slot', axis: 0, ri: 3, si: 2, k: 3, label: 'Parallel park in the green bay' }],
  },
  {
    id: 'bay', name: 'Bay Day', icon: '🅿️',
    brief: 'Drive into the car park and REVERSE into the green bay, so the car faces out. The entrance is on this street.',
    traffic: 8, pedsPerBlock: 2, time: 210, start: [3, 1, 0, 14],
    objectives: [{ type: 'bay', row: 1, k: 9, label: 'Reverse into the green bay' }],
  },
  {
    id: 'eco', name: 'Eco Run', icon: '⛽',
    brief: 'Reach the destination using as little fuel as possible. Gentle on the accelerator, plan your stops. Budget: 0.07 litres.',
    traffic: 12, pedsPerBlock: 2, time: 300, start: [0, 0, 1, 16], fuelBudget: 0.07,
    objectives: [reach(4, 3, 1, 40, 'Reach the destination')],
  },
  {
    id: 'rush', name: 'Rush Hour', icon: '🚦',
    brief: 'The streets are packed. Get across town in time without breaking the rules.',
    traffic: 42, pedsPerBlock: 4, time: 170, start: [5, 0, 2, 16],
    objectives: [reach(0, 4, 0, 40, 'Get across town')],
  },
  {
    id: 'night', name: 'Night Shift', icon: '🌙',
    brief: 'It is dark. Turn your headlights on (L) and visit both markers in order.',
    traffic: 14, pedsPerBlock: 2, time: 300, night: true, start: [2, 5, 3, 16],
    objectives: [reach(1, 2, 0, 40, 'Checkpoint 1 of 2'), reach(4, 1, 1, 40, 'Checkpoint 2 of 2')],
  },
  {
    id: 'exam', name: 'Driving Exam', icon: '🎓',
    brief: 'The real test. Follow the route, signal every turn, and finish with a parallel park. Score below 70 and you fail.',
    traffic: 18, pedsPerBlock: 3, time: 420, start: [0, 2, 0, 16], passMark: 70,
    objectives: [
      reach(2, 2, 1, 40, 'Route: checkpoint 1 of 3'),
      reach(3, 4, 0, 40, 'Route: checkpoint 2 of 3'),
      reach(4, 2, 3, 40, 'Route: checkpoint 3 of 3'),
      { type: 'slot', axis: 0, ri: 1, si: 2, k: 3, label: 'Finish with a parallel park' },
    ],
  },
  {
    id: 'free', name: 'Free Drive', icon: '🌆',
    brief: 'No timer, no targets. Explore the city. Press Esc / ❚❚ to change missions.',
    traffic: 24, pedsPerBlock: 3, time: 0, start: [2, 2, 1, 16], free: true,
    objectives: [],
  },
];

/** Resolve a parking objective to a target rectangle, reserving the bay and filling its neighbours. */
export function resolveParking(world, o) {
  if (o.type === 'slot') {
    const pls = world.side * (o.axis === 0 ? 1 : -1);
    const list = world.slots.filter((s) => s.axis === o.axis && s.ri === o.ri && s.si === o.si && s.side === pls);
    const target = list.find((s) => s.k === o.k);
    for (const s of list) if (Math.abs(s.k - o.k) === 1) s.occupied = true;
    target.occupied = false;
    return { ref: target, x: target.x, z: target.z, h: target.heading, len: target.len, wid: target.wid, facing: true, kind: 'slot' };
  }
  const bays = world.bays.filter((b) => b.row === o.row);
  const target = bays.find((b) => b.k === o.k);
  for (const b of bays) if (Math.abs(b.k - o.k) === 1) b.occupied = true;
  target.occupied = false;
  return { ref: target, x: target.x, z: target.z, h: Math.PI, len: target.len, wid: target.wid, facing: true, kind: 'bay' };
}

/** Checks how well the car sits in the target rectangle. */
export function parkingQuality(car, P) {
  const sh = Math.sin(car.h), ch = Math.cos(car.h);
  const tf = [Math.sin(P.h), Math.cos(P.h)], tl = [Math.cos(P.h), -Math.sin(P.h)];
  let inside = true;
  for (const [a, b] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const cx = car.x + sh * CFG.CAR_HL * a + ch * CFG.CAR_HW * b;
    const cz = car.z + ch * CFG.CAR_HL * a - sh * CFG.CAR_HW * b;
    const dx = cx - P.x, dz = cz - P.z;
    if (Math.abs(dx * tf[0] + dz * tf[1]) > P.len / 2 + 0.12 || Math.abs(dx * tl[0] + dz * tl[1]) > P.wid / 2 + 0.12) inside = false;
  }
  let ang = Math.abs(wrapAngle(car.h - P.h));
  if (!P.facing) ang = Math.min(ang, Math.abs(wrapAngle(car.h - P.h - Math.PI)));
  return { inside, aligned: ang < 0.22, ang };
}
