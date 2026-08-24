const fs = require('fs');
['utils/restro-data.ts', 'utils/generic-data.ts'].forEach(f => {
  let d = fs.readFileSync(f, 'utf8');
  d = d.replace(/[ \t]*"image": "",?\r?\n/g, '');
  fs.writeFileSync(f, d);
  console.log(f + ' updated');
});
