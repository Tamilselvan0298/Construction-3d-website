import fs from 'fs';

const html = fs.readFileSync('kp-index.html', 'utf8');

const regex = /<img[^>]+src="([^"]+)"[^>]*>/g;
const images = [];
let match;
while ((match = regex.exec(html)) !== null) {
  images.push(match[1]);
}

console.log('Unique images:', [...new Set(images)]);

// Let's also look for nav links, phone numbers, addresses
const phones = html.match(/(\+91[\d\s-]+|\b\d{10}\b)/g);
console.log('Phones:', [...new Set(phones)]);

// Let's inspect sections
const sections = [...html.matchAll(/<section[^>]*id="([^"]*)"[^>]*>/g)].map(m => m[1]);
console.log('Section IDs:', sections);
