import fs from 'fs';
import path from 'path';

const keepFiles = new Set([
  'entry_real_clean.webp',
  'gallery1.webp',
  'gallery2.webp',
  'gallery3.webp',
  'gallery4.webp',
  'gallery5.webp',
  'gallery7.webp',
  'lights_real.webp'
]);

const srcGallery = path.resolve('src/assets/gallery');
const files = fs.readdirSync(srcGallery);

let deletedCount = 0;
for (const file of files) {
  if (!keepFiles.has(file)) {
    fs.unlinkSync(path.join(srcGallery, file));
    console.log('Deleted from src/assets/gallery:', file);
    deletedCount++;
  } else {
    console.log('Kept:', file);
  }
}

const publicGallery = path.resolve('public/gallery');
if (fs.existsSync(publicGallery)) {
  fs.rmSync(publicGallery, { recursive: true, force: true });
  console.log('Deleted unused public/gallery directory.');
}

console.log(`\nDone! Kept ${keepFiles.size} active WebP images. Deleted ${deletedCount} unused images.`);
