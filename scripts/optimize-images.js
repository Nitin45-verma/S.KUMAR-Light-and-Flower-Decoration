import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function optimizeImages() {
  console.log('Starting image optimization...');

  // 1. Logo PNG -> WebP in src/assets/logo.png
  const srcLogo = path.join(projectRoot, 'src/assets/logo.png');
  const srcLogoWebp = path.join(projectRoot, 'src/assets/logo.webp');
  if (fs.existsSync(srcLogo)) {
    await sharp(srcLogo)
      .resize({ width: 400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(srcLogoWebp);
    console.log(`Converted ${srcLogo} -> ${srcLogoWebp} (${fs.statSync(srcLogoWebp).size} bytes)`);
  }

  // 2. Logo Clean PNG -> WebP
  const logoClean = path.join(projectRoot, 'src/assets/logo_clean.png');
  const logoCleanWebp = path.join(projectRoot, 'src/assets/logo_clean.webp');
  if (fs.existsSync(logoClean)) {
    await sharp(logoClean)
      .webp({ quality: 75 })
      .toFile(logoCleanWebp);
    console.log(`Converted ${logoClean} -> ${logoCleanWebp}`);
  }

  // 3. Public Logo PNG -> WebP
  const pubLogo = path.join(projectRoot, 'public/logo.png');
  const pubLogoWebp = path.join(projectRoot, 'public/logo.webp');
  if (fs.existsSync(pubLogo)) {
    await sharp(pubLogo)
      .resize({ width: 400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(pubLogoWebp);
    console.log(`Converted ${pubLogo} -> ${pubLogoWebp} (${fs.statSync(pubLogoWebp).size} bytes)`);
  }

  // 4. Hero PNG -> WebP
  const heroPng = path.join(projectRoot, 'src/assets/hero.png');
  const heroWebp = path.join(projectRoot, 'src/assets/hero.webp');
  if (fs.existsSync(heroPng)) {
    await sharp(heroPng)
      .webp({ quality: 75 })
      .toFile(heroWebp);
    console.log(`Converted ${heroPng} -> ${heroWebp}`);
  }

  // 5. Compress Banner WebP
  const banner = path.join(projectRoot, 'src/assets/banner.webp');
  if (fs.existsSync(banner)) {
    const bannerBuf = fs.readFileSync(banner);
    const optBanner = await sharp(bannerBuf)
      .resize({ width: 1000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 70 })
      .toBuffer();
    fs.writeFileSync(banner, optBanner);
    console.log(`Optimized banner.webp (${fs.statSync(banner).size} bytes)`);
  }

  // 6. Compress Gallery Images
  const galleryDir = path.join(projectRoot, 'src/assets/gallery');
  const files = fs.readdirSync(galleryDir);
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const filePath = path.join(galleryDir, file);
      const fileBuf = fs.readFileSync(filePath);
      const optBuf = await sharp(fileBuf)
        .resize({ width: 1000, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 72 })
        .toBuffer();
      fs.writeFileSync(filePath, optBuf);
      console.log(`Optimized ${file} (${fs.statSync(filePath).size} bytes)`);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(err => console.error(err));
