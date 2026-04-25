import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

const SRC = "src/assets/projekt";
const files = await readdir(SRC);
const results = [];
for (const f of files) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  try {
    const meta = await sharp(path.join(SRC, f)).metadata();
    results.push({ file: f, w: meta.width, h: meta.height, format: meta.format, size: meta.size });
  } catch (e) {
    results.push({ file: f, error: e.message });
  }
}
results.sort((a, b) => (b.w || 0) - (a.w || 0));
for (const r of results) {
  console.log(`${(r.w + 'x' + r.h).padEnd(12)} ${(r.format || '?').padEnd(5)} ${r.file}`);
}
