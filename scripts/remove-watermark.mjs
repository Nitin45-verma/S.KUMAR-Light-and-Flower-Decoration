/**
 * Remove the "ssain marriage hall" watermark from entry_real.webp
 * Strategy: extract the text region, apply heavy blur, composite back
 */
import sharp from 'sharp';

const INPUT  = 'src/assets/gallery/entry_real.webp';
const OUTPUT = 'src/assets/gallery/entry_real_clean.webp';  // new clean file
const BACKUP = 'src/assets/gallery/entry_real_backup.webp';

const img = sharp(INPUT);
const meta = await img.metadata();
const { width, height } = meta;
console.log(`Image: ${width}x${height}`);

// ── Watermark region (top strip where "ssain marriage hall" text sits) ─────
// Text appears roughly from top edge down ~95px, across full width
const TEXT_TOP    = 0;
const TEXT_HEIGHT = 95;
const TEXT_LEFT   = 0;
const TEXT_WIDTH  = width;

// 1. Save a backup first
await sharp(INPUT).toFile(BACKUP);
console.log(`Backup saved → ${BACKUP}`);

// 2. Extract the text strip and blur it heavily
const blurredStrip = await sharp(INPUT)
  .extract({ left: TEXT_LEFT, top: TEXT_TOP, width: TEXT_WIDTH, height: TEXT_HEIGHT })
  .blur(18)          // heavy blur to erase text
  .modulate({ brightness: 0.75 })  // darken slightly to match surrounding dark sky
  .toBuffer();

// 3. Composite the blurred strip back over the original at the same position
await sharp(INPUT)
  .composite([{
    input: blurredStrip,
    left: TEXT_LEFT,
    top: TEXT_TOP,
  }])
  .webp({ quality: 85 })
  .toFile(OUTPUT);

console.log(`✅ Watermark blurred and saved → ${OUTPUT}`);
console.log(`   Backup kept at → ${BACKUP}`);
console.log(`   Now update content.js import: entry_real_clean.webp`);
