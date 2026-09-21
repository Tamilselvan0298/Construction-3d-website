import fs from 'fs';

const html = fs.readFileSync('kp-index.html', 'utf8');

// Extract the navbar
const navMatch = html.match(/<header[\s\S]*?<\/header>/i);
console.log('--- HEADER ---');
console.log(navMatch ? navMatch[0].slice(0, 1500) : 'No header tag');

// Extract main sections
const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
console.log('--- MAIN LENGTH ---', mainMatch ? mainMatch[0].length : 0);

// Extract footer
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
console.log('--- FOOTER ---');
console.log(footerMatch ? footerMatch[0].slice(0, 1500) : 'No footer tag');
