import * as THREE from 'three';

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function noise(g, w, h, n, colors, size = 2) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    const s = Math.random() * size + 0.5;
    g.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
}

export function makeTextures() {
  const T = {};
  T.asphalt = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#3b3c3f'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 25; i++) {
      g.fillStyle = `rgba(${20 + Math.random() * 30},${20 + Math.random() * 30},${25 + Math.random() * 30},0.12)`;
      g.beginPath();
      g.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 70, 0, Math.PI * 2);
      g.fill();
    }
    noise(g, w, h, 26000, ['#2c2d30', '#47484c', '#525357', '#35363a', '#5d5e62'], 2.2);
  });
  T.sidewalk = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#a19d94'; g.fillRect(0, 0, w, h);
    noise(g, w, h, 5000, ['#97938a', '#aaa69d', '#8f8b83'], 2);
    g.strokeStyle = 'rgba(70,65,60,0.55)'; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke();
      g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke();
    }
  });
  T.grass = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#4d7432'; g.fillRect(0, 0, w, h);
    noise(g, w, h, 12000, ['#3f6328', '#5a843a', '#6a9446', '#456c2c'], 2.5);
  });
  T.facades = [];
  T.facadeLights = [];
  const walls = ['#b9a68c', '#8e9aa3', '#c9c3b6', '#9b6e5a', '#6f7a83', '#d2b48c', '#a4a9ad'];
  const glass = ['#2a3a4a', '#33414d', '#1f2d3a', '#3b4a55'];
  for (let k = 0; k < walls.length; k++) {
    const lit = [];
    for (let i = 0; i < 16; i++) lit.push(Math.random() < 0.38);
    const style = k % 3;
    T.facades.push(canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = walls[k]; g.fillRect(0, 0, w, h);
      noise(g, w, h, 2500, ['rgba(0,0,0,0.06)', 'rgba(255,255,255,0.06)'], 3);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        const x = c * 64, y = r * 64;
        g.fillStyle = 'rgba(0,0,0,0.25)';
        if (style === 0) g.fillRect(x + 12, y + 10, 40, 40);
        if (style === 1) g.fillRect(x + 4, y + 14, 58, 32);
        if (style === 2) g.fillRect(x + 18, y + 8, 28, 44);
        g.fillStyle = glass[(k + r + c) % glass.length];
        if (style === 0) g.fillRect(x + 14, y + 12, 36, 36);
        if (style === 1) g.fillRect(x + 6, y + 16, 54, 28);
        if (style === 2) g.fillRect(x + 20, y + 10, 24, 40);
        g.fillStyle = 'rgba(255,255,255,0.10)';
        if (style === 0) g.fillRect(x + 14, y + 12, 36, 8);
        if (style === 1) g.fillRect(x + 6, y + 16, 54, 6);
        if (style === 2) g.fillRect(x + 20, y + 10, 24, 8);
      }
    }));
    T.facadeLights.push(canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        if (!lit[r * 4 + c]) continue;
        const x = c * 64, y = r * 64;
        g.fillStyle = ['#ffd890', '#ffe7b0', '#cfe3ff'][(r + c) % 3];
        if (style === 0) g.fillRect(x + 14, y + 12, 36, 36);
        if (style === 1) g.fillRect(x + 6, y + 16, 54, 28);
        if (style === 2) g.fillRect(x + 20, y + 10, 24, 40);
      }
    }));
  }
  T.glow = canvasTex(128, 128, (g, w, h) => {
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(255,220,160,0.85)');
    grd.addColorStop(0.5, 'rgba(255,200,130,0.3)');
    grd.addColorStop(1, 'rgba(255,200,130,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  });
  T.beam = canvasTex(128, 256, (g, w, h) => {
    const grd = g.createLinearGradient(0, h, 0, 0);
    grd.addColorStop(0, 'rgba(255,250,230,0.55)');
    grd.addColorStop(1, 'rgba(255,250,230,0)');
    g.fillStyle = grd;
    g.beginPath(); g.moveTo(w * 0.42, h); g.lineTo(w * 0.58, h); g.lineTo(w, 0); g.lineTo(0, 0); g.closePath(); g.fill();
  });
  T.wrapRepeat = (t, x, y) => { t.repeat.set(x, y); return t; };
  return T;
}
