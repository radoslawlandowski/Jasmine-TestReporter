var Handlebars = require('handlebars');
var FileReader = require('./file-reader');

var templateServiceModule = {

    templateBasePath: `${process.cwd()}/templates/`,
    compiledTemplates: {},

    get: function(templateName) {
        if(this.compiledTemplates.hasOwnProperty(templateName)) {
            return this.compiledTemplates[templateName];
        } else {
            throw new Error("The requested template has not been registered!");
        }
    },

    init: function() {
        var testRunSource = FileReader.readAsString(`${this.templateBasePath}/test-run.hbs`);
        var testCaseSource = FileReader.readAsString(`${this.templateBasePath}/test-case.hbs`);
        var propertiesSource = FileReader.readAsString(`${this.templateBasePath}/properties.hbs`);

        this.compiledTemplates = {
            "test-run": Handlebars.compile(testRunSource),
            "test-case": Handlebars.compile(testCaseSource),
            "properties": Handlebars.compile(propertiesSource)
        }
    }
}

module.exports = templateServiceModule;