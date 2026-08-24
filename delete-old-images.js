const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join('d:\\dev projects\\pahalwan lassi wale', 'public', 'images');
const extensionsToDelete = ['.png', '.jpg', '.jpeg'];

async function deleteOldImages(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await deleteOldImages(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (extensionsToDelete.includes(ext)) {
        fs.unlinkSync(fullPath);
        console.log(`Deleted: ${fullPath}`);
      }
    }
  }
}

async function run() {
  console.log('Starting cleanup...');
  await deleteOldImages(publicImagesDir);
  console.log('Finished cleanup.');
}

run();
