var fs = require('fs');

var fileReaderModule = {
    readAsString: function(filename) {
        return fs.readFileSync(filename, 'utf8');
    }
}

module.exports = fileReaderModule;