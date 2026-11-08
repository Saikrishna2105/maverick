import * as THREE from 'three';
import asphaltN from '@pmndrs/assets/normals/0020.webp.js';
import pavingN from '@pmndrs/assets/normals/0025.webp.js';
import concreteN from '@pmndrs/assets/normals/0015.webp.js';

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
function imgTex(url) {
  const t = new THREE.TextureLoader().load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
function noise(g, w, h, n, colors, size = 2) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    const s = Math.random() * size + 0.5;
    g.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
}
function blotches(g, w, h, n, rgba, rmin, rmax) {
  for (let i = 0; i < n; i++) {
    const x = Math.random() * w, y = Math.random() * h, r = rmin + Math.random() * (rmax - rmin);
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, rgba); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

export function makeTextures() {
  const T = {};
  T.asphalt = canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#3a3b3e'; g.fillRect(0, 0, w, h);
    blotches(g, w, h, 40, 'rgba(20,20,24,0.25)', 40, 160);
    blotches(g, w, h, 30, 'rgba(90,88,84,0.12)', 30, 120);
    noise(g, w, h, 90000, ['#2a2b2e', '#46474b', '#55565a', '#333438', '#616266', '#3d3e41'], 2.2);
    // tar-sealed cracks
    g.strokeStyle = 'rgba(15,15,17,0.7)'; g.lineWidth = 2.5;
    for (let i = 0; i < 9; i++) {
      let x = Math.random() * w, y = Math.random() * h;
      g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 12; k++) { x += (Math.random() - 0.5) * 50; y += (Math.random() - 0.3) * 40; g.lineTo(x, y); }
      g.stroke();
    }
  });
  // roughness: darker = smoother (worn tyre tracks, damp patches)
  T.asphaltRough = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, w, h);
    blotches(g, w, h, 18, 'rgba(60,60,60,0.55)', 30, 110);
    noise(g, w, h, 20000, ['#bbbbbb', '#e8e8e8', '#999999'], 2);
  }, false);
  T.asphaltN = imgTex(asphaltN);
  T.sidewalk = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#a7a39b'; g.fillRect(0, 0, w, h);
    noise(g, w, h, 16000, ['#9b978f', '#b0ada5', '#8f8b84', '#a19e96'], 2);
    blotches(g, w, h, 20, 'rgba(60,55,50,0.12)', 20, 90);
    g.strokeStyle = 'rgba(60,56,52,0.6)'; g.lineWidth = 3;
    for (let i = 0; i <= 4; i++) {
      g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, h); g.stroke();
      g.beginPath(); g.moveTo(0, i * 128); g.lineTo(w, i * 128); g.stroke();
    }
  });
  T.pavingN = imgTex(pavingN);
  T.concreteN = imgTex(concreteN);
  T.grass = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#46682d'; g.fillRect(0, 0, w, h);
    blotches(g, w, h, 30, 'rgba(110,140,60,0.2)', 30, 100);
    noise(g, w, h, 40000, ['#3a5b25', '#557d36', '#64903f', '#3f6229', '#6f8f4a'], 2.5);
  });

  // ---------- facades: colour, roughness/metalness (glass reflects), night emissive ----------
  T.facades = [];
  const walls = ['#b7a487', '#8a959e', '#cfc8b9', '#94654f', '#5f6a73', '#c9ad86', '#a2a6a9', '#3e4247', '#7d5c48'];
  const glassTints = ['#2a3a4a', '#233140', '#1c2a36', '#34434e', '#2b3b3a'];
  for (let k = 0; k < walls.length; k++) {
    const style = k % 4; // 0 punched windows, 1 ribbon windows, 2 tall windows, 3 curtain wall
    const lit = []; for (let i = 0; i < 16; i++) lit.push(Math.random() < 0.42);
    const rect = (x, y) => {
      if (style === 0) return [x + 12, y + 10, 40, 42];
      if (style === 1) return [x + 2, y + 16, 60, 30];
      if (style === 2) return [x + 18, y + 6, 28, 50];
      return [x + 2, y + 2, 60, 58];
    };
    const S = 2; // supersample
    const map = canvasTex(256 * S, 256 * S, (g) => {
      g.scale(S, S);
      g.fillStyle = walls[k]; g.fillRect(0, 0, 256, 256);
      noise(g, 256, 256, 5000, ['rgba(0,0,0,0.07)', 'rgba(255,255,255,0.06)'], 2);
      blotches(g, 256, 256, 6, 'rgba(0,0,0,0.08)', 20, 70);
      for (let r = 0; r < 4; r++) {
        // floor ledge
        g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, r * 64 + 61, 256, 3);
        g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(0, r * 64 + 59, 256, 2);
        for (let c = 0; c < 4; c++) {
          const [x, y, w, h] = rect(c * 64, r * 64);
          g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x - 2, y - 2, w + 4, h + 4);
          const grd = g.createLinearGradient(x, y, x + w, y + h);
          grd.addColorStop(0, glassTints[(k + r) % glassTints.length]); grd.addColorStop(1, '#0d141b');
          g.fillStyle = grd; g.fillRect(x, y, w, h);
          if (style !== 3) { g.fillStyle = 'rgba(200,200,200,0.5)'; g.fillRect(x + w / 2 - 1, y, 2, h); }
          else { g.fillStyle = 'rgba(160,170,180,0.6)'; g.fillRect(x, y + h / 2, w, 1.5); }
        }
      }
    });
    const rough = canvasTex(256, 256, (g) => {
      g.fillStyle = '#e6e6e6'; g.fillRect(0, 0, 256, 256);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const [x, y, w, h] = rect(c * 64, r * 64); g.fillStyle = '#141414'; g.fillRect(x, y, w, h); }
    }, false);
    const metal = canvasTex(256, 256, (g) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, 256, 256);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const [x, y, w, h] = rect(c * 64, r * 64); g.fillStyle = '#bbb'; g.fillRect(x, y, w, h); }
    }, false);
    const em = canvasTex(256, 256, (g) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, 256, 256);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        if (!lit[r * 4 + c]) continue;
        const [x, y, w, h] = rect(c * 64, r * 64);
        const grd = g.createLinearGradient(x, y, x, y + h);
        const col = ['#ffcf86', '#ffe2b0', '#d6e6ff', '#fff0d0'][(r * 3 + c) % 4];
        grd.addColorStop(0, col); grd.addColorStop(1, '#6b4a20');
        g.fillStyle = grd; g.fillRect(x, y, w, h);
      }
    });
    T.facades.push({ map, rough, metal, em });
  }
  // ground floor shops: 4 shopfronts per 24 m
  const signs = ['#c0392b', '#1f6fb2', '#2e8b57', '#d68910', '#7d3c98', '#17a589', '#b03a2e', '#2c3e50'];
  T.shops = canvasTex(1024, 192, (g, w, h) => {
    g.fillStyle = '#3b3632'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) {
      const x = i * 256;
      g.fillStyle = signs[(Math.random() * signs.length) | 0]; g.fillRect(x + 10, 18, 236, 34);
      g.fillStyle = 'rgba(255,255,255,0.85)'; g.font = 'bold 22px sans-serif'; g.textAlign = 'center';
      g.fillText(['CAFE', 'MARKET', 'PHARMACY', 'BAKERY', 'DINER', 'BOOKS', 'TAILOR', 'GYM', 'PIZZA', 'FLOWERS', 'BANK', 'HOTEL'][(Math.random() * 12) | 0], x + 128, 43);
      const grd = g.createLinearGradient(0, 60, 0, h);
      grd.addColorStop(0, '#24323d'); grd.addColorStop(1, '#0c1217');
      g.fillStyle = grd; g.fillRect(x + 14, 62, 228, h - 66);
      g.fillStyle = '#222'; g.fillRect(x + 120, 62, 4, h - 66);
    }
  });
  T.shopsEm = canvasTex(1024, 192, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) {
      const x = i * 256;
      g.fillStyle = '#ffffff'; g.fillRect(x + 10, 18, 236, 34);
      const grd = g.createLinearGradient(0, 60, 0, h);
      grd.addColorStop(0, '#ffe2aa'); grd.addColorStop(1, '#7a5a2a');
      g.fillStyle = grd; g.fillRect(x + 14, 62, 228, h - 66);
    }
  });
  T.glow = canvasTex(128, 128, (g) => {
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(255,214,150,0.9)'); grd.addColorStop(0.45, 'rgba(255,190,120,0.3)'); grd.addColorStop(1, 'rgba(255,190,120,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  });
  T.beam = canvasTex(128, 256, (g, w, h) => {
    const grd = g.createLinearGradient(0, h, 0, 0);
    grd.addColorStop(0, 'rgba(255,250,235,0.6)'); grd.addColorStop(1, 'rgba(255,250,235,0)');
    g.fillStyle = grd;
    g.beginPath(); g.moveTo(w * 0.42, h); g.lineTo(w * 0.58, h); g.lineTo(w, 0); g.lineTo(0, 0); g.closePath(); g.fill();
  });
  T.smoke = canvasTex(128, 128, (g) => {
    const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, 'rgba(235,235,235,0.55)'); grd.addColorStop(0.6, 'rgba(220,220,220,0.18)'); grd.addColorStop(1, 'rgba(220,220,220,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  });
  T.flare = canvasTex(64, 64, (g) => {
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.3, 'rgba(255,255,255,0.5)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  });
  T.wrapRepeat = (t, x, y) => { t.repeat.set(x, y); return t; };
  return T;
}
