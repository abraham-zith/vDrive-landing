const fs = require('fs');
const { loadImage } = require('canvas');

async function checkImg() {
  const img = await loadImage('public/images/hero_features_raw.png');
  console.log(`Dimensions: ${img.width}x${img.height}`);
  const canvas = require('canvas').createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  
  let hasTrans = false;
  let hasDots = false;
  
  // Sample corners to see background
  console.log(`Top Left Pixel: ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}`);
  
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 255) hasTrans = true;
  }
  
  console.log('Has transparent pixels:', hasTrans);
}

checkImg();
