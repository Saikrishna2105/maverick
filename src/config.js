// Global constants, settings and small helpers shared by every module.

export const CFG = {
  N: 5,              // city blocks per side
  S: 80,             // distance between road centre lines (m)
  ROAD_HALF: 6.1,    // half width of a street (lane 3.5 + parking lane 2.6)
  LANE_W: 3.5,       // driving lane width
  LANE_OFF: 1.75,    // driving lane centre offset from road centre
  PARK_OFF: 4.8,     // parking lane centre offset from road centre
  SIDEWALK: 4,       // pavement width
  SLOT_LEN: 6.0,     // parallel parking slot length
  SPEED_LIMIT: 50,   // km/h
  CAR_HL: 2.2,       // car half length
  CAR_HW: 0.9,       // car half width
};
CFG.OFF = (CFG.N * CFG.S) / 2;
CFG.STOP_C = CFG.ROAD_HALF + 6.5; // distance from junction centre where a car's centre stops
CFG.EDGE = CFG.OFF + CFG.ROAD_HALF; // outer edge of outer ring road

export const roadCoord = (i) => i * CFG.S - CFG.OFF;

// Direction index: 0:+x 1:+z 2:-x 3:-z
export const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
export const rightOf = (d) => [-DIRS[d][1], DIRS[d][0]];
export const dirFromVec = (x, z) =>
  Math.abs(x) > Math.abs(z) ? (x > 0 ? 0 : 2) : (z > 0 ? 1 : 3);
export const headingOfDir = (d) => Math.atan2(DIRS[d][0], DIRS[d][1]);

const DEFAULTS = {
  side: 1,          // 1 = drive on the right, -1 = drive on the left
  quality: 'high',
  units: 'kmh',
  sound: true,
  easyGears: true,  // brake at standstill selects reverse, gas selects drive
  camera: 0,
};

export const settings = Object.assign({}, DEFAULTS);
try {
  Object.assign(settings, JSON.parse(localStorage.getItem('maverick.settings') || '{}'));
} catch (e) { /* ignore */ }
export function saveSettings() {
  try { localStorage.setItem('maverick.settings', JSON.stringify(settings)); } catch (e) { /* ignore */ }
}

export function loadProgress() {
  try { return JSON.parse(localStorage.getItem('maverick.progress') || '{}'); } catch (e) { return {}; }
}
export function saveProgress(p) {
  try { localStorage.setItem('maverick.progress', JSON.stringify(p)); } catch (e) { /* ignore */ }
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const wrapAngle = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};
