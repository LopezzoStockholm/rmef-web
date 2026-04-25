import sharp from "sharp";
const FILES = [
  "src/assets/projekt/foretag_16.jpeg",
  "src/assets/projekt/foretag_26.jpeg",
  "src/assets/projekt/foretag_4.jpeg",
  "src/assets/projekt/mark_image2.jpg",
  "src/assets/projekt/foretag_15.jpeg",
  "src/assets/projekt/foretag_25.jpeg",
];
for (const f of FILES) {
  const out = `/tmp/p3-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).rotate().resize(600).jpeg({ quality: 80 }).toFile(out);
  console.log(out);
}
