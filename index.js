
const fs = require('fs');
console.log('Inside file');
const file  = process.env.FILE;
console.log("file" +file);

const fileStream = fs.createReadStream(file);
console.log("filestream"+filestream);