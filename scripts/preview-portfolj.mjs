import sharp from "sharp";
const FILES = ["src/assets/projekt/portfolj_image1.jpeg","src/assets/projekt/portfolj_image2.jpeg","src/assets/projekt/portfolj_image3.jpeg","src/assets/projekt/portfolj_image4.jpeg","src/assets/projekt/portfolj_image5.jpeg","src/assets/projekt/portfolj_image10.jpeg","src/assets/projekt/portfolj_image20.jpeg"];
for (const f of FILES) {
  const out = `/tmp/p-${f.split("/").pop().replace(/\.[^.]+$/, "")}.jpg`;
  await sharp(f).rotate().resize(500).jpeg({ quality: 75 }).toFile(out);
}
console.log("done");
