import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/pudum/.gemini/antigravity/brain/96658e12-270e-474a-8fd0-cb6f83ccc998';
const publicDir = 'c:/xampp/htdocs/3d-website/public/images';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Helper to isolate object on black background:
// pixels where brightness < threshold become transparent, smooth falloff
async function isolateOnBlack(inputPath, outputPath, options = {}) {
  const { threshold = 18, smoothness = 12, crop = null, tint = null } = options;
  let pipeline = sharp(inputPath);
  
  if (crop) {
    pipeline = pipeline.extract(crop);
  }

  const { data, info } = await pipeline
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const outData = Buffer.from(data);

  for (let i = 0; i < outData.length; i += channels) {
    let r = outData[i];
    let g = outData[i + 1];
    let b = outData[i + 2];

    if (tint) {
      r = Math.min(255, Math.floor(r * tint[0]));
      g = Math.min(255, Math.floor(g * tint[1]));
      b = Math.min(255, Math.floor(b * tint[2]));
      outData[i] = r;
      outData[i + 1] = g;
      outData[i + 2] = b;
    }

    // Perceived luminance
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum <= threshold) {
      outData[i + 3] = 0;
    } else if (lum < threshold + smoothness) {
      const alphaFactor = (lum - threshold) / smoothness;
      outData[i + 3] = Math.round(255 * alphaFactor);
    } else {
      outData[i + 3] = 255;
    }
  }

  await sharp(outData, { raw: { width, height, channels } })
    .webp({ quality: 95, lossless: false })
    .toFile(outputPath);

  console.log(`Created: ${outputPath} (${width}x${height})`);
}

async function createAtmosphericBackground(outputPath, width = 1920, height = 1080, type = 'hero') {
  // Generate SVG with subtle luxury gradients, lighting, and film grain
  const isHero = type === 'hero';
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ambLight" cx="${isHero ? '50%' : '65%'}" cy="${isHero ? '45%' : '40%'}" r="65%">
        <stop offset="0%" stop-color="#C9953D" stop-opacity="${isHero ? '0.14' : '0.18'}" />
        <stop offset="40%" stop-color="#7A4B1A" stop-opacity="0.06" />
        <stop offset="85%" stop-color="#080706" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="bottomShadow" cx="50%" cy="100%" r="50%">
        <stop offset="0%" stop-color="#050403" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#080706" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#080706" stop-opacity="0.8" />
        <stop offset="50%" stop-color="#080706" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#080706" stop-opacity="0.95" />
      </linearGradient>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.04 0"/>
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="#080706" />
    <rect width="${width}" height="${height}" fill="url(#ambLight)" />
    <circle cx="${isHero ? width * 0.5 : width * 0.7}" cy="${height * 0.5}" r="${height * 0.4}" fill="#D89A32" opacity="0.04" filter="blur(60px)" />
    <rect width="${width}" height="${height}" fill="url(#bottomShadow)" />
    <rect width="${width}" height="${height}" fill="url(#vignette)" />
    <rect width="${width}" height="${height}" filter="url(#noiseFilter)" />
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(outputPath);

  console.log(`Created background: ${outputPath}`);
}

async function run() {
  const bottlePath = path.join(brainDir, 'hero_perfume_bottle_1789886127796.jpg');
  const boxPath = path.join(brainDir, 'luxury_packaging_box_1789886146771.jpg');
  const nightPath = path.join(brainDir, 'fragrance_night_1789886200030.jpg');

  // 1. Hero Bottle
  await isolateOnBlack(bottlePath, path.join(publicDir, 'product-bottle.webp'), {
    threshold: 12,
    smoothness: 10
  });

  // Also as product-1.webp
  await isolateOnBlack(bottlePath, path.join(publicDir, 'product-1.webp'), {
    threshold: 12,
    smoothness: 10
  });

  // 2. Luxury Box
  await isolateOnBlack(boxPath, path.join(publicDir, 'product-box.webp'), {
    threshold: 15,
    smoothness: 12
  });

  // 3. Product 2 (Night)
  await isolateOnBlack(nightPath, path.join(publicDir, 'product-2.webp'), {
    threshold: 14,
    smoothness: 10
  });

  // 4. Product 3 (Signature / Gold Elixir variation)
  await isolateOnBlack(bottlePath, path.join(publicDir, 'product-3.webp'), {
    threshold: 12,
    smoothness: 10,
    tint: [1.1, 0.95, 0.75] // Enhanced warm gold amber tones
  });

  // 5. Backgrounds
  await createAtmosphericBackground(path.join(publicDir, 'hero-background.webp'), 1920, 1080, 'hero');
  await createAtmosphericBackground(path.join(publicDir, 'brand-story-bg.webp'), 1920, 1080, 'brand');

  console.log('All luxury assets processed successfully!');
}

run().catch(console.error);
