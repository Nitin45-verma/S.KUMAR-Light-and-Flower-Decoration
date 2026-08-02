/**
 * Batch convert all JPG/PNG images in src/assets/gallery/ to WebP format
 * using sharp. Preserves originals.
 */
import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = join(__dirname, '..', 'src', 'assets', 'gallery');

const files = readdirSync(galleryDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Found ${files.length} image(s) to convert in ${galleryDir}`);

for (const file of files) {
  const inputPath = join(galleryDir, file);
  const { name } = parse(file);
  const outputPath = join(galleryDir, `${name}.webp`);

  try {
    const info = await sharp(inputPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    const inputSize = (await import('fs')).statSync(inputPath).size;
    const savings = (((inputSize - info.size) / inputSize) * 100).toFixed(1);
    console.log(`✅ ${file} → ${name}.webp  (${(inputSize/1024).toFixed(0)} KB → ${(info.size/1024).toFixed(0)} KB, saved ${savings}%)`);
  } catch (err) {
    console.error(`❌ Failed: ${file} — ${err.message}`);
  }
}

console.log('\nDone! All images converted to WebP.');
