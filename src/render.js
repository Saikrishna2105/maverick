import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import cityEXR from '@pmndrs/assets/hdri/city.exr.js';
import sunsetEXR from '@pmndrs/assets/hdri/sunset.exr.js';
import nightEXR from '@pmndrs/assets/hdri/night.exr.js';

// CC0 HDRIs (Poly Haven, via @pmndrs/assets) used for image-based lighting & reflections.
const EXR = { day: cityEXR, sunset: sunsetEXR, night: nightEXR };

function b64ToBuffer(dataUrl) {
  const b64 = dataUrl.slice(dataUrl.indexOf(',') + 1);
  const bin = atob(b64);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
}

export const TIMES = {
  day: { sunElev: 38, sunAz: 140, turbidity: 4, rayleigh: 1.2, fog: 0xb8cbe0, fogNear: 160, fogFar: 700, envInt: 1.25, sun: 2.8, sunColor: 0xfff1de, hemi: 0.7, exposure: 0.62, grade: [1.04, 1.06, 1.0, 1.0], bloom: 0.35, skyScale: 0.1, clouds: 0.35 },
  sunset: { sunElev: 4.5, sunAz: 245, turbidity: 9, rayleigh: 2.6, fog: 0xd19a74, fogNear: 120, fogFar: 620, envInt: 1.3, sun: 3.0, sunColor: 0xffa860, hemi: 0.55, exposure: 0.7, grade: [1.1, 1.0, 0.86, 1.08], bloom: 0.55, skyScale: 0.3, clouds: 0.45 },
  night: { sunElev: -10, sunAz: 200, turbidity: 2, rayleigh: 0.5, fog: 0x070a12, fogNear: 50, fogFar: 380, envInt: 0.35, sun: 0.35, sunColor: 0x8ea7ff, hemi: 0.15, exposure: 0.62, grade: [0.94, 1.0, 1.08, 1.1], bloom: 0.55, skyScale: 0.1, clouds: 0 },
};

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, uTint: { value: new THREE.Vector3(1, 1, 1) }, uSat: { value: 1.05 }, uContrast: { value: 1.08 },
    uVignette: { value: 0.32 }, uBlur: { value: 0 }, uTime: { value: 0 }, uGrain: { value: 0.035 }, uNos: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform vec3 uTint; uniform float uSat, uContrast, uVignette, uBlur, uTime, uGrain, uNos;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float r = length(d);
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      if (uBlur > 0.001) {
        // radial speed blur, stronger towards the edges
        vec3 acc = col; float w = 1.0;
        for (int i = 1; i < 8; i++) {
          float k = float(i) / 8.0 * uBlur * smoothstep(0.12, 0.7, r);
          acc += texture2D(tDiffuse, vUv - d * k).rgb; w += 1.0;
        }
        col = acc / w;
      }
      col *= uTint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(0.1, 0.35, 0.9) * uNos * smoothstep(0.3, 0.75, r) * 0.25;
      col *= 1.0 - uVignette * smoothstep(0.35, 0.85, r);
      col += (hash(vUv * 1000.0 + uTime) - 0.5) * uGrain;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
};

export class Renderer {
  constructor(quality) {
    this.quality = quality;
    const r = (this.r = new THREE.WebGLRenderer({ antialias: quality === 'low', powerPreference: 'high-performance' }));
    r.domElement.id = 'view';
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.pmrem = new THREE.PMREMGenerator(r);
    this.envs = {};
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2500);
    this.composer = null;
  }
  envFor(time) {
    if (this.envs[time]) return this.envs[time];
    const data = new EXRLoader().parse(b64ToBuffer(EXR[time]));
    const tex = new THREE.DataTexture(data.data, data.width, data.height, data.format, data.type);
    tex.colorSpace = THREE.LinearSRGBColorSpace; tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.flipY = true;
    tex.needsUpdate = true;
    const env = this.pmrem.fromEquirectangular(tex).texture;
    tex.dispose();
    this.envs[time] = env;
    return env;
  }
  /** Sets up sky, fog, lights and post-processing for a scene. Returns the sun light. */
  setupScene(scene, time) {
    const P = (this.P = TIMES[time]);
    this.time = time;
    scene.environment = this.envFor(time);
    scene.environmentIntensity = P.envInt;
    const sky = new Sky();
    sky.scale.setScalar(2000);
    sky.material.uniforms.skyScale = { value: P.skyScale };
    sky.material.fragmentShader = 'uniform float skyScale;\n' + sky.material.fragmentShader.replace('gl_FragColor = vec4( texColor, 1.0 );', 'gl_FragColor = vec4( texColor * skyScale, 1.0 );');
    sky.material.needsUpdate = true;
    const u = sky.material.uniforms;
    if (u.cloudCoverage) { u.cloudCoverage.value = P.clouds; u.cloudDensity.value = 0.45; u.cloudScale.value = 0.0002; }
    u.turbidity.value = P.turbidity; u.rayleigh.value = P.rayleigh;
    u.mieCoefficient.value = 0.005; u.mieDirectionalG.value = 0.86;
    const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - P.sunElev), THREE.MathUtils.degToRad(P.sunAz));
    u.sunPosition.value.copy(sunDir);
    this.sunDir = sunDir;
    if (time === 'night') {
      scene.background = this.nightSky();
      sky.visible = false;
    }
    scene.add(sky);
    this.sky = sky;
    scene.fog = new THREE.Fog(P.fog, P.fogNear, P.fogFar);
    const hemi = new THREE.HemisphereLight(0xcfe0ff, 0x3a3226, P.hemi);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(P.sunColor, P.sun);
    sun.castShadow = true;
    const sm = this.quality === 'low' ? 1024 : 2048;
    sun.shadow.mapSize.set(sm, sm);
    const sc = sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
    sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.04;
    scene.add(sun, sun.target);
    this.sun = sun;
    this.r.toneMappingExposure = P.exposure;
    this.scene = scene;
    this.buildComposer();
    return sun;
  }
  nightSky() {
    const c = document.createElement('canvas'); c.width = 1024; c.height = 512;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, 512);
    grd.addColorStop(0, '#02030a'); grd.addColorStop(0.45, '#070b1c'); grd.addColorStop(0.52, '#1a1f35'); grd.addColorStop(0.6, '#0b0d16'); grd.addColorStop(1, '#050608');
    g.fillStyle = grd; g.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.8})`; g.fillRect(Math.random() * 1024, Math.random() * 240, 1, 1); }
    const t = new THREE.CanvasTexture(c); t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  buildComposer() {
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    if (this.quality === 'low') return;
    const size = this.r.getSize(new THREE.Vector2());
    const pr = this.r.getPixelRatio();
    const rt = new THREE.WebGLRenderTarget(size.x * pr, size.y * pr, { type: THREE.HalfFloatType, samples: 4 });
    const c = (this.composer = new EffectComposer(this.r, rt));
    c.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), this.P.bloom, this.time === 'night' ? 0.25 : 0.4, 1.0);
    c.addPass(this.bloom);
    c.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader);
    const gr = this.P.grade;
    this.grade.uniforms.uTint.value.set(gr[0], gr[1], gr[2]);
    this.grade.uniforms.uSat.value = gr[3];
    c.addPass(this.grade);
  }
  resize(w, h, pr) {
    this.r.setPixelRatio(pr);
    this.r.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    if (this.composer) { this.composer.setPixelRatio(pr); this.composer.setSize(w, h); }
  }
  render(fx = {}) {
    if (this.sky) this.sky.position.copy(this.camera.position);
    if (this.composer) {
      const u = this.grade.uniforms;
      u.uBlur.value = fx.blur || 0; u.uTime.value = (u.uTime.value + 0.017) % 100; u.uNos.value = fx.nos || 0;
      this.composer.render();
    } else this.r.render(this.scene, this.camera);
  }
}
