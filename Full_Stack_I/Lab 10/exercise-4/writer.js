var fs = require('fs');

var file = fs.createWriteStream("./writer.txt");

var writeData= function() {
    for(let i=0; i<=10; i++) {
        file.write("this is some write line text\n");
    }

    file.end();
}

module.exports = {writeData: writeData};