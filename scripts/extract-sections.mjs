import fs from 'fs';

const html = fs.readFileSync('kp-index.html', 'utf8');

const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/gi)];
console.log('Total sections found:', sections.length);

sections.forEach((sec, idx) => {
  const text = sec[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n=== SECTION ${idx + 1} ===`);
  console.log(text.slice(0, 300));
});
