import sharp from 'sharp';

const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="80" fill="#0a0a0a"/>
  <rect width="512" height="512" rx="80" fill="url(#g)"/>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a0e2e"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
  </defs>
  <text y="390" x="256" font-size="360" text-anchor="middle">NK</text>
  <text y="390" x="256" font-size="360" text-anchor="middle" fill="#d4af37" font-family="Georgia, serif" font-weight="bold">NK</text>
</svg>`);

await sharp(svg).resize(64, 64).png().toFile('public/favicon.png');
console.log('✅ public/favicon.png created (64x64)');

await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('✅ public/apple-touch-icon.png created (180x180)');
