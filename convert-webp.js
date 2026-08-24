const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicImagesDir = path.join('d:\\dev projects\\pahalwan lassi wale', 'public', 'images');

const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const parsed = path.parse(fullPath);
        const webpPath = path.join(parsed.dir, parsed.name + '.webp');
        
        try {
          console.log(`Converting: ${fullPath}`);
          await sharp(fullPath)
            .webp({ quality: 90 }) // HD quality
            .toFile(webpPath);
          console.log(`Converted to: ${webpPath}`);
        } catch (err) {
          console.error(`Error converting ${fullPath}:`, err);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting image conversion...');
  await processDirectory(publicImagesDir);
  console.log('Finished image conversion.');
}

run();
