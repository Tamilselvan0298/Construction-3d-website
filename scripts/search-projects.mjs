import fs from 'fs';

const js = fs.readFileSync('kp-index-UViWT2YQ.js', 'utf8');

// Find all matches for project names or Supabase items
const matches = [...js.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Titles found:', matches);

// Check for project objects
const projMatches = [...js.matchAll(/name:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Names found:', projMatches.slice(0, 30));
