import sharp from "sharp";
const FILES = ["src/assets/projekt/mark_image10.jpeg", "src/assets/projekt/mark_image11.jpeg", "src/assets/projekt/mark_image10.jpg", "src/assets/projekt/mark_image11.jpg"];
for (const f of FILES) {
  try {
    const m = await sharp(f).metadata();
    console.log(`${f}: ${m.width}x${m.height}`);
  } catch(e) { console.log(`${f}: ${e.message.substring(0, 50)}`); }
}
