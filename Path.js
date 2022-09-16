const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);

const b = path.basename('/Desktop/Full-Stack/Node.JS/index.js');
console.log(b);

const d = path.dirname('/Desktop/Full-Stack/Node.JS/index.js');
console.log(d);

const e = path.extname('app.tsx');
console.log(e);

const f = path.extname(__filename);
console.log(__filename, f);