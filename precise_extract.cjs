const fs = require('fs');
const path = require('path');
const { loadImage, createCanvas } = require('canvas');

async function extractIcon() {
  const dirPath = 'C:\\Users\\PAZHANI SABARI RAJ\\.gemini\\antigravity\\brain\\6ecd1e90-8fe9-4d5d-b545-045607edeec6';
  const files = fs.readdirSync(dirPath);
  const mediaFiles = files.filter(f => f.startsWith('media_') && f.endsWith('.png')).sort().reverse();
  
  if (mediaFiles.length === 0) {
    console.log("No media files found.");
    return;
  }
  
  const imgPath = path.join(dirPath, mediaFiles[0]);
  console.log('Using latest image:', imgPath);
  
  const img = await loadImage(imgPath);
  console.log('Original dimensions:', img.width, img.height);
  
  // Create a canvas for the crop. The icon is on the extreme right.
  // We'll grab the rightmost 80 pixels.
  const cropW = 80;
  const cropH = img.height;
  const startX = img.width - cropW - 10;
  
  const canvas = createCanvas(cropW, cropH);
  const ctx = canvas.getContext('2d');
  
  // Draw just that segment
  ctx.drawImage(img, startX, 0, cropW, cropH, 0, 0, cropW, cropH);
  
  const imgData = ctx.getImageData(0, 0, cropW, cropH);
  const data = imgData.data;
  
  // Make everything that isn't white (or close to white) transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    if (r > 200 && g > 200 && b > 200) {
      data[i] = 255;
      data[i+1] = 255;
      data[i+2] = 255;
    } else {
      data[i+3] = 0;
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
  
  // Trim transparent edges
  let minX = cropW, minY = cropH, maxX = 0, maxY = 0;
  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const alpha = data[(y * cropW + x) * 4 + 3];
      if (alpha > 50) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  if (minX <= maxX && minY <= maxY) {
    const finalW = maxX - minX + 1;
    const finalH = maxY - minY + 1;
    const finalCanvas = createCanvas(finalW, finalH);
    finalCanvas.getContext('2d').drawImage(canvas, minX, minY, finalW, finalH, 0, 0, finalW, finalH);
    
    fs.writeFileSync('public/images/hero_btn_icon.png', finalCanvas.toBuffer('image/png'));
    console.log('Successfully cropped precise icon:', finalW, finalH);
  } else {
    console.log('Failed bounds');
  }
}

extractIcon();
