const fs = require('node:fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });

const sync = fs.readFileSync('file.txt');
console.log(sync.toString())

console.log("Finish Reading File");