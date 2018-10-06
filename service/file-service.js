var fs = require('fs');
var zip = new require('node-zip')();
var path = require('path');

var fileServiceModule = {
    readAsString: function(filename) {
        return fs.readFileSync(filename, 'utf8');
    },

    removeDirectory: function(path) {
        fs.rmdirSync(path);
    },

    makeDirectory: function(path) {
        fs.mkdirSync(path);
    },

    saveStringToFile: function(fileName, fileContent) {
        fs.writeFileSync(fileName, fileContent, function (err) {
            if (err) return console.log(err);
        });
    },

    takeScreenshot: function(fileName, browser) {
        var self = this;
        browser.takeScreenshot().then(function (png) {
            self.__writeScreenShot(png, fileName);
        });
    },

    zipFile: function(outputFilename, baseDir, fileNames) {
        for(var i = 0 ; i < fileNames.length ; i++) {
            zip.file(fileNames[i], fs.readFileSync(path.join(baseDir, fileNames[i])));
        }
        
        var data = zip.generate({ base64:false, compression: 'DEFLATE' });
        
        fs.writeFileSync(outputFilename, data, 'binary');
    },

    __writeScreenShot: function(data, filename) {
        fs.writeFileSync(filename, new Buffer(data, 'base64'), function (err) {
             if (err) return console.log(err);
        });
     },
}

module.exports = fileServiceModule;