var request = require('request');
var fs = require('fs');

const writeStream = fs.createWriteStream('output.html');
const requestStream = request('http://www.google.com');

requestStream.pipe(writeStream);

requestStream.on('end', () => {
    writeStream.end();
})