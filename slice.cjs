const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function processUserUpload() {
  try {
    const files = fs.readdirSync('C:\\Users\\PAZHANI SABARI RAJ\\.gemini\\antigravity\\brain\\6ecd1e90-8fe9-4d5d-b545-045607edeec6');
    const mediaFiles = files.filter(f => f.startsWith('media_') && f.endsWith('.png')).sort().reverse();
    
    // Explicitly grab the newest original 1024x576 or 16:9 composite upload
    const latestUpload = 'C:\\Users\\PAZHANI SABARI RAJ\\.gemini\\antigravity\\brain\\6ecd1e90-8fe9-4d5d-b545-045607edeec6\\' + mediaFiles[0];
    const img = await loadImage(latestUpload);
    
    // Total width is 1024.
    // 1. Left (Phone/Taxi): x=0 to x=360
    // 2. Center (VDrive Logo): x=360 to x=680
    // 3. Right (Woman): x=680 to 1024
    
    const sliceAndSave = (x, w, h, outPath, mirror = false) => {
      const c = createCanvas(w, h);
      const cx = c.getContext('2d');
      // Create a solid navy background matching the About section so the cut lines blend perfectly
      cx.fillStyle = '#0B1B3B';
      cx.fillRect(0, 0, w, h);
      
      if (mirror) {
        cx.translate(w, 0);
        cx.scale(-1, 1);
      }
      
      cx.drawImage(img, x, 0, w, h, 0, 0, w, h);
      fs.writeFileSync(outPath, c.toBuffer('image/png'));
    };
    
    sliceAndSave(0, 360, img.height, 'public/images/about_left.png');
    sliceAndSave(360, 320, img.height, 'public/images/about_center.png');
    sliceAndSave(680, 344, img.height, 'public/images/about_right.png', true);

    console.log('Precisely sliced and mirrored right character!');
  } catch (err) {
    console.error('Error slicing image:', err);
  }
}

processUserUpload();
