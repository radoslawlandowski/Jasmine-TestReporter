var fs = require('fs');

var fileServiceModule = {
    readAsString: function(filename) {
        return fs.readFileSync(filename, 'utf8');
    },

    saveStringToFile: function(fileName, fileContent) {
        fs.writeFileSync(fileName, fileContent, function (err) {
            if (err) 
                return console.log(err);
            console.log('Wrote Hello World in file helloworld.txt, just check it');
        });
    }
}

module.exports = fileServiceModule;