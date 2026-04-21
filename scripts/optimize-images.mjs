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
  const sz = statSync(src).size;
  if (sz < 20000) continue; // skippa små ikoner
  const outName = base.replace(/\s+/g, '_').toLowerCase();
  try {
    await sharp(src)
      .resize(1600, 1200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(join(OUT_LARGE, `${outName}.webp`));
    await sharp(src)
      .resize(800, 600, { fit: 'cover', position: 'attention' })
      .webp({ quality: 80 })
      .toFile(join(OUT_THUMB, `${outName}.webp`));
    processed++;
  } catch (e) {
    console.log(`  skip ${f}: ${e.message}`);
  }
}
console.log(`Done: ${processed} images → webp (large + thumb)`);
