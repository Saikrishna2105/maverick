# Maverick Drive

A realistic 3D city driving simulator that runs in any modern browser — desktop or phone.
Built with [three.js](https://threejs.org/); no downloads, no plugins.

## Play

Open `index.html` through any static web server, e.g.

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>. (Enable **GitHub Pages** on this repo — branch root — to play it online on your phone.)

## Features

**Realistic car physics**
- Dynamic bicycle tyre model with slip angles and a friction circle per axle
- Weight transfer under braking / acceleration (body pitches and rolls)
- 6-speed automatic gearbox with torque converter, kick-down and idle creep
- Gear selector **P R N D** — you can't shift into R while rolling forward
- ABS brakes, handbrake (locks the rear wheels — you can slide), engine braking
- Fuel consumption based on real engine power, odometer, damage model

**Living city**
- Grid city with 36 signal-controlled junctions, zebra crossings, stop lines, parking lanes
- AI traffic that follows lanes, stops at red lights, gives way when turning across traffic, uses indicators and puts hazards on after a crash
- Pedestrians on the pavements, parked cars, a car park, a park, street lamps and trees
- Day and night (working headlights, lit windows, street lights)
- Drive on the **right** or the **left** (settings)

**Driving examiner** — penalties for: running red lights, speeding, driving on the wrong side, turning without signalling, driving on the pavement, collisions. Hitting a pedestrian ends the mission.

**Missions**: First Lesson · Kerbside (parallel parking) · Bay Day (reverse bay parking) · Eco Run (fuel budget) · Rush Hour · Night Shift · Driving Exam · Free Drive — each scored with up to 3 stars.

**Navigation**: rotating minimap with GPS route, floating guide arrow, upcoming traffic light indicator.

## Controls

| Keyboard | Action |
|---|---|
| W / ↑ | Accelerator (hold Shift for a gentle throttle) |
| S / ↓ | Brake |
| A D / ← → | Steer |
| 1 2 3 4 | Gear selector P R N D |
| Space | Handbrake |
| Q / E | Left / right indicator · Z hazards |
| L | Headlights · H horn · C camera |
| Esc / P | Pause |

Phones/tablets get an on-screen steering wheel, analogue pedals (press higher on the pedal for more) and gear buttons. Gamepads: RT/LT pedals, left stick steers, A handbrake.

## Development

```bash
npm install
npm run build   # bundles src/ into build/game.js
npm run dev     # rebuild on change + serve on http://localhost:8000
```

| File | Purpose |
|---|---|
| `src/car.js` | Vehicle dynamics, gearbox, fuel |
| `src/collision.js` | SAT box / circle collision and impulse response |
| `src/world.js` | City generation, traffic lights, parking spaces |
| `src/traffic.js` | AI drivers |
| `src/peds.js` | Pedestrians |
| `src/rules.js` | Traffic-rule checks and penalties |
| `src/missions.js` | Mission definitions and parking checks |
| `src/main.js` | Game loop, camera, HUD, menus |
