var Handlebars = require('handlebars');
var FileReader = require('./file-reader');

var templateServiceModule = {

    templateBasePath: process.cwd() + "/templates/",
    compiledTemplates: {},

    get: function(templateName) {
        if(this.compiledTemplates.hasOwnProperty(templateName)) {
            return this.compiledTemplates[templateName];
        } else {
            throw new Error("The requested template has not been registered!");
        }
    },

    init: function() {
        var testRun = FileReader.readAsString(this.templateBasePath + "test-run.hbs");
        var testCase = FileReader.readAsString(this.templateBasePath + "test-case.hbs");

        this.compiledTemplates = {
            "test-run": Handlebars.compile(testRun),
            "test-case": Handlebars.compile(testCase)
        }
    }
}

module.exports = templateServiceModule;