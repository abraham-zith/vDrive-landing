const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function processImage(inputPath, outputPath) {
  try {
    const img = await loadImage(inputPath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    // Tolerance for green removal (adjust if needed depending on DALL-E compression)
    const thresholdG = 150;
    const thresholdRB = 100;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // If it looks like bright green, make transparent
      if (g > thresholdG && r < thresholdRB && b < thresholdRB) {
        data[i + 3] = 0; // Alpha to 0
      }
    }

    ctx.putImageData(imgData, 0, 0);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Successfully processed: ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err.message);
  }
}

async function run() {
  await processImage(
    'public/images/badge_appstore.png',
    'public/images/badge_appstore.png'
  );
  await processImage(
    'public/images/badge_googleplay.png',
    'public/images/badge_googleplay.png'
  );
}

run();
