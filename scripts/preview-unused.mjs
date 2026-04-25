import sharp from "sharp";
const FILES = [
  "src/assets/projekt/foretag_25.jpeg",
  "src/assets/projekt/bygg_image3.jpg",
  "src/assets/projekt/foretag_26.jpeg",
  "src/assets/projekt/foretag_11.jpeg",
  "src/assets/projekt/foretag_10.jpeg",
  "src/assets/projekt/foretag_4.jpeg",
  "src/assets/projekt/bygg_image2.jpg",
  "src/assets/projekt/mark_image2.jpg",
];
for (const f of FILES) {
  const out = `/tmp/u-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).rotate().resize(600).jpeg({ quality: 80 }).toFile(out);
  console.log(out);
}
