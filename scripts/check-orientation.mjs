import sharp from "sharp";
const FILES = [
  "src/assets/projekt/foretag_15.jpeg",
  "src/assets/projekt/foretag_25.jpeg",
  "src/assets/projekt/mark_image2.jpg",
  "src/assets/projekt/bygg_image2.jpg",
];
for (const f of FILES) {
  const meta = await sharp(f).metadata();
  console.log(`${f}: ${meta.width}x${meta.height} orient=${meta.orientation}`);
}
