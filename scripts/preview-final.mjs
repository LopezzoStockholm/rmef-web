import sharp from "sharp";
const FILES = [
  "src/assets/projekt/portfolj_image29.png",
  "src/assets/projekt/portfolj_image30.png",
  "src/assets/projekt/portfolj_image32.png",
];
for (const f of FILES) {
  const out = `/tmp/f-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).rotate().resize(700).jpeg({ quality: 80 }).toFile(out);
  console.log(out);
}
