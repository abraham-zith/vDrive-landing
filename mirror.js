const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function mirrorImage(inputPath, outputPath) {
  try {
    const img = await loadImage(inputPath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');

    // Flip horizontally
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    ctx.drawImage(img, 0, 0);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    console.log('Successfully mirrored the image!');
  } catch (err) {
    console.error('Error mirroring image:', err);
  }
}

// Target the newly attached image (from the third position in the reference upload)
// Note: since the user provided one merged reference image, I will download it 
// from their prompt attachments if accessible, otherwise I will parse the request.
// However, the provided image looks like a full screen composite again. 
// Let me just CSS mirror the element directly in the code to ensure it's non-destructive.
mirrorImage('public/images/about_right.png', 'public/images/about_right_mirrored.png');
