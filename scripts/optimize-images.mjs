import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';

const SRC = 'src/assets/projekt';
const OUT_LARGE = 'public/projekt';
const OUT_THUMB = 'public/projekt/thumb';
mkdirSync(OUT_LARGE, { recursive: true });
mkdirSync(OUT_THUMB, { recursive: true });

const files = readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f));
console.log(`Processing ${files.length} images...`);

let processed = 0;
for (const f of files) {
  const src = join(SRC, f);
  const base = basename(f, extname(f));
  const outName = base.replace(/\s+/g, '_').toLowerCase();
  try {
    // Large: 1600px max width, preserve aspect ratio, EXIF auto-rotate
    await sharp(src)
      .rotate() // auto EXIF
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 85, effort: 5 })
      .toFile(join(OUT_LARGE, `${outName}.webp`));
    // Thumb: 800px max width, smart crop for cards
    await sharp(src)
      .rotate()
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(join(OUT_THUMB, `${outName}.webp`));
    processed++;
  } catch (e) {
    console.log(`  skip ${f}: ${e.message}`);
  }
}
console.log(`Done: ${processed} images → webp (large + thumb)`);
