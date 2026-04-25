import sharp from "sharp";
import { writeFile } from "fs/promises";

const FILES = [
  "src/assets/projekt/mark_image2.jpg",      // 4000x1800
  "src/assets/projekt/foretag_3.jpeg",        // 4608x2184
  "src/assets/projekt/foretag_8.jpeg",        // 4032x3024
  "src/assets/projekt/bygg_image2.jpg",       // 4000x1800
  "src/assets/projekt/foretag_2.jpeg",        // 3302x2476 (Persikan)
  "src/assets/projekt/foretag_15.jpeg",       // 3298x2473 (T11)
  "src/assets/projekt/foretag_25.jpeg",       // 3298x2473
  "src/assets/projekt/portfolj_image29.png",  // 2216x1566
];

for (const f of FILES) {
  const meta = await sharp(f).metadata();
  // Generate 600px thumbnail to preview visually
  const out = `/tmp/preview-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).resize(600).jpeg({ quality: 80 }).toFile(out);
  console.log(`${f} (${meta.width}x${meta.height}) → ${out}`);
}
