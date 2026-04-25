import sharp from "sharp";
const FILES = ["src/assets/projekt/mark_image3.jpg", "src/assets/projekt/foretag_8.jpeg", "src/assets/projekt/mark_image2.jpg"];
for (const f of FILES) {
  const out = `/tmp/p4-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).rotate().resize(600).jpeg({ quality: 80 }).toFile(out);
  console.log(out);
}
