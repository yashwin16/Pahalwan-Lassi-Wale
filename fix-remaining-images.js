const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicImagesDir = path.join('d:\\dev projects\\pahalwan lassi wale', 'public', 'images');
const targetDirs = [
  path.join('d:\\dev projects\\pahalwan lassi wale', 'app'),
  path.join('d:\\dev projects\\pahalwan lassi wale', 'components'),
  path.join('d:\\dev projects\\pahalwan lassi wale', 'utils')
];

const extensionsToProcess = ['.png', '.jpg', '.jpeg'];

async function convertImages(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertImages(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (extensionsToProcess.includes(ext)) {
        const parsed = path.parse(fullPath);
        const webpPath = path.join(parsed.dir, parsed.name + '.webp');
        
        try {
          console.log(`Converting: ${fullPath}`);
          await sharp(fullPath)
            .webp({ quality: 90 })
            .toFile(webpPath);
          console.log(`Converted to: ${webpPath}`);
          
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`Error converting ${fullPath}:`, err);
        }
      }
    }
  }
}

async function updateCodebase(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await updateCodebase(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.ts', '.tsx', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf-8');
        let modified = false;

        extensionsToProcess.forEach(imgExt => {
          const regex = new RegExp(`\\.(${imgExt.slice(1)})`, 'gi');
          if (regex.test(content)) {
            content = content.replace(regex, '.webp');
            modified = true;
          }
        });

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf-8');
          console.log(`Updated references in: ${fullPath}`);
        }
      }
    }
  }
}

async function run() {
  console.log('--- Starting Missing Images Conversion ---');
  await convertImages(publicImagesDir);
  
  console.log('--- Starting Codebase Update ---');
  for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
      await updateCodebase(dir);
    }
  }
  console.log('--- Finished ---');
}

run();
