const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join('d:\\dev projects\\pahalwan lassi wale', 'public', 'images', 'cravings');
const filesToConvert = ['ourSnacks.png', 'ourSweets.png', 'pahalwanLassii.png', 'restaurant1.png'];

async function run() {
  for (const file of filesToConvert) {
    const fullPath = path.join(dir, file);
    const webpPath = path.join(dir, path.parse(file).name + '.webp');
    
    if (fs.existsSync(fullPath)) {
      try {
        console.log(`Converting: ${file}`);
        await sharp(fullPath)
          .webp({ quality: 90 })
          .toFile(webpPath);
        console.log(`Converted to: ${path.parse(file).name + '.webp'}`);
        fs.unlinkSync(fullPath);
        console.log(`Deleted original: ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    } else {
      console.log(`File not found: ${file}`);
    }
  }
}

run();
