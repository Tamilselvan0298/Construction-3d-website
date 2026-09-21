import fs from 'fs';
import path from 'path';

const imagesToDownload = [
  { url: 'https://www.kpconstructions.group/assets/logo-BOothX7A.png', path: 'public/assets/logo.png' },
  { url: 'https://www.kpconstructions.group/logo.png', path: 'public/logo.png' },
  { url: 'https://www.kpconstructions.group/profile.webp', path: 'public/profile.webp' },
  { url: 'https://www.kpconstructions.group/assets/indian-engineer-qa-yFPJhY_G.png', path: 'public/assets/engineer-qa.png' },
  { url: 'https://www.kpconstructions.group/assets/cta-banner-BJihh8qm.jpg', path: 'public/assets/cta-banner.jpg' },
  { url: 'https://www.kpconstructions.group/logos/logo1.jpeg', path: 'public/logos/logo1.jpeg' },
  { url: 'https://www.kpconstructions.group/logos/logo2.png', path: 'public/logos/logo2.png' },
  { url: 'https://www.kpconstructions.group/logos/logo3.png', path: 'public/logos/logo3.png' },
  { url: 'https://www.kpconstructions.group/logos/logo4.png', path: 'public/logos/logo4.png' },
  { url: 'https://www.kpconstructions.group/logos/logo5.png', path: 'public/logos/logo5.png' },
  { url: 'https://www.kpconstructions.group/logos/logo6.png', path: 'public/logos/logo6.png' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784034843651-f8jo5panfa.jpg', path: 'public/projects/project1.jpg' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783929479130-sbgent0o9dh.webp', path: 'public/projects/project2.webp' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783929416141-qdzzuab0sxd.webp', path: 'public/projects/project3.webp' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784032973907-hdbsxg7kf3u.jpeg', path: 'public/projects/project4.jpeg' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1784033346193-189vquvawfb.jpg', path: 'public/projects/project5.jpg' },
  { url: 'https://peaedlyypnfbefjxsipy.supabase.co/storage/v1/object/public/seo-pages/projects/1783967899071-wgvx3018v1g.jpg', path: 'public/projects/project6.jpg' }
];

async function run() {
  for (const item of imagesToDownload) {
    try {
      const dir = path.dirname(item.path);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(item.path, Buffer.from(buffer));
        console.log(`Downloaded: ${item.path} (${buffer.byteLength} bytes)`);
      } else {
        console.warn(`Failed (${res.status}): ${item.url}`);
      }
    } catch (err) {
      console.error(`Error on ${item.url}:`, err.message);
    }
  }
}

run();
