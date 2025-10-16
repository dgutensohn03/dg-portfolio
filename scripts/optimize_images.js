// scripts/optimize_images.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(process.cwd(), "public", "images", "projects");

(async () => {
  const walk = (dir) => fs.readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return fs.statSync(p).isDirectory() ? walk(p) : [p];
  });

  const files = walk(root).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    const out = file.replace(/\.(png)$/i, ".jpg");
    await sharp(file)
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out);
    if (/\.png$/i.test(file)) fs.unlinkSync(file);
    console.log("Optimized:", out.replace(process.cwd(), ""));
  }
  console.log("✅ Optimization complete");
})();
