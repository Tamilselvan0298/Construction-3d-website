import fs from 'fs';

const code = fs.readFileSync('kp-routes-RMl2_LSN.js', 'utf8');

// Look for route paths in the bundle
const matches = code.match(/["']\/[a-zA-Z0-9_\-\/]*["']/g) || [];
const clean = [...new Set(matches.map(s => s.slice(1, -1)))]
  .filter(r => r.startsWith('/') && !r.startsWith('/assets') && !r.startsWith('/logos') && !r.endsWith('.png') && !r.endsWith('.jpg') && !r.endsWith('.webp') && !r.endsWith('.jpeg'));

console.log('Detected routes:', clean);
