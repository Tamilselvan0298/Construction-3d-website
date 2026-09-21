import fs from 'fs';

async function run() {
  const html = await fetch('https://www.kpconstructions.group/').then(r => r.text());
  fs.writeFileSync('kp-index.html', html);

  // Extract all script and link tags
  const scripts = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  const links = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  console.log('Scripts:', scripts);
  console.log('Links:', links);

  for (const s of scripts) {
    if (s.endsWith('.js')) {
      const url = s.startsWith('http') ? s : `https://www.kpconstructions.group${s}`;
      const code = await fetch(url).then(r => r.text());
      const filename = `kp-${s.split('/').pop()}`;
      fs.writeFileSync(filename, code);
      console.log('Saved script:', filename, code.length);
    }
  }

  for (const l of links) {
    if (l.endsWith('.css')) {
      const url = l.startsWith('http') ? l : `https://www.kpconstructions.group${l}`;
      const css = await fetch(url).then(r => r.text());
      const filename = `kp-${l.split('/').pop()}`;
      fs.writeFileSync(filename, css);
      console.log('Saved css:', filename, css.length);
    }
  }
}

run().catch(console.error);
