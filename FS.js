const fs = require('node:fs');

fs.writeFile('File.txt', 'Learning Back-End With Node.JS!', () => {
    console.log("Written to the File");
});

fs.readFile('File.txt', 'utf8', (err, data) => {
    console.log(err, data);
});

const write = fs.writeFileSync('File.txt', "Learning Back-End With Node.JS", () => {
    console.log(write)
});

const read = fs.readFileSync('File.txt');
console.log(read.toString());

console.log("Finish Reading File");