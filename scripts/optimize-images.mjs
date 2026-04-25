import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';

const SRC = 'src/assets/projekt';
const OUT_LARGE = 'public/projekt';
const OUT_THUMB = 'public/projekt/thumb';

// Multi-size variants för srcset. Mobile-friendly LCP.
const VARIANTS = [
  { w: 400, suffix: '-400', q: 80 },
  { w: 800, suffix: '-800', q: 82 },
  { w: 1200, suffix: '-1200', q: 84 },
  { w: 1600, suffix: '', q: 85 }, // default size = 1600px (no suffix för bakåtkompatibilitet)
];

mkdirSync(OUT_LARGE, { recursive: true });
mkdirSync(OUT_THUMB, { recursive: true });

const files = readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f));
console.log(`Processing ${files.length} images × ${VARIANTS.length} variants...`);

let processed = 0;
let totalVariants = 0;
for (const f of files) {
  const src = join(SRC, f);
  const base = basename(f, extname(f));
  const outName = base.replace(/\s+/g, '_').toLowerCase();
  try {
    // Full-res variants (för card/hero use)
    for (const v of VARIANTS) {
      await sharp(src)
        .rotate() // auto EXIF
        .resize({ width: v.w, withoutEnlargement: true })
        .webp({ quality: v.q, effort: 5 })
        .toFile(join(OUT_LARGE, `${outName}${v.suffix}.webp`));
      totalVariants++;
    }
    // Thumb (smaller crop för project list cards) — keep original behavior
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
console.log(`Done: ${processed} sources → ${totalVariants} variants + ${processed} thumbs`);
