import * as path from "path";

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);

const b = path.basename('/Desktop/Full-Stack/Node.JS/index.js');
console.log(b);

const d = path.dirname('/Desktop/Full-Stack/Node.JS/index.js');
console.log(d);

const e = path.extname('app.tsx');
console.log(e);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(__dirname);

const __filename = (import.meta.url);
console.log(__filename);

const filename = path.extname(import.meta.url);
console.log(filename);