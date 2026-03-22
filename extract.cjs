const fs = require('fs');
const { loadImage, createCanvas } = require('canvas');

async function extractIcon() {
  const imgPath = 'C:\\Users\\PAZHANI SABARI RAJ\\.gemini\\antigravity\\brain\\6ecd1e90-8fe9-4d5d-b545-045607edeec6\\media__1773237055672.png';
  const img = await loadImage(imgPath);
  console.log('Original dimensions:', img.width, img.height);
  
  // The given image is a crop of a button. The right side has the icon.
  // Let's create a transparent PNG of just the white shape on the right.
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imgData.data;
  
  // Make everything that isn't white (or close to white) transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // If it's mostly white
    if (r > 200 && g > 200 && b > 200) {
      // Keep it, but make it pure white with original alpha estimation based on brightness if antialiased
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
      // Keep alpha high
    } else {
      // Make transparent
      data[i+3] = 0;
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
  
  // Now crop to the bounding box of the non-transparent pixels
  let minX = img.width, minY = img.height, maxX = 0, maxY = 0;
  for (let y = 0; y < img.height; y++) {
    for (let x = img.width / 2; x < img.width; x++) { // Only look at right half (icon)
      const alpha = data[(y * img.width + x) * 4 + 3];
      if (alpha > 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  if (minX <= maxX && minY <= maxY) {
    const croppedW = maxX - minX + 1;
    const croppedH = maxY - minY + 1;
    const croppedCanvas = createCanvas(croppedW, croppedH);
    const croppedCtx = croppedCanvas.getContext('2d');
    croppedCtx.drawImage(canvas, minX, minY, croppedW, croppedH, 0, 0, croppedW, croppedH);
    
    fs.writeFileSync('public/images/hero_btn_icon.png', croppedCanvas.toBuffer('image/png'));
    console.log('Successfully cropped icon:', croppedW, croppedH);
  } else {
    console.log('Failed to find icon bounds');
  }
}

extractIcon();
