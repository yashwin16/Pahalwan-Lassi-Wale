const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join('d:\\dev projects\\pahalwan lassi wale', 'app'),
  path.join('d:\\dev projects\\pahalwan lassi wale', 'components'),
  path.join('d:\\dev projects\\pahalwan lassi wale', 'utils')
];

const extensionsToReplace = ['.png', '.jpg', '.jpeg'];

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.ts', '.tsx', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf-8');
        let modified = false;

        extensionsToReplace.forEach(imgExt => {
          // Replace case-insensitive occurrences of .png, .jpg, .jpeg
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
  console.log('Starting codebase update...');
  for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir);
    }
  }
  console.log('Finished codebase update.');
}

run();
