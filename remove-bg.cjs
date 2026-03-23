const Jimp = require('jimp');

async function removeBackground() {
  try {
    console.log("Reading image...");
    const image = await Jimp.read('C:\\Users\\abena\\.gemini\\antigravity\\brain\\5b866156-bb39-40bf-bc94-dc281dc57262\\braids_haven_logo_var2_1773802308969.png');
    
    console.log("Processing pixels...");
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red > 220 && green > 220 && blue > 220) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    image.autocrop();

    console.log("Saving image...");
    await image.writeAsync('public/logo.png');
    console.log("Success! Background removed.");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

removeBackground();
