var Handlebars = require('handlebars');
var FileReader = require('./file-service');

var templateServiceModule = {

    templateBasePath: `${process.cwd()}/templates`,
    compiledTemplates: {},

    init: function() {
        var testRunSource = FileReader.readAsString(`${this.templateBasePath}/test-run.hbs`);
        var testCaseSource = FileReader.readAsString(`${this.templateBasePath}/test-case.hbs`);
        var propertiesSource = FileReader.readAsString(`${this.templateBasePath}/properties.hbs`);
        var testSuiteSource = FileReader.readAsString(`${this.templateBasePath}/test-suite.hbs`);

        this.compiledTemplates = {
            "test-run": Handlebars.compile(testRunSource),
            "test-case": Handlebars.compile(testCaseSource),
            "properties": Handlebars.compile(propertiesSource),
            "test-suite": Handlebars.compile(testSuiteSource)
        }

        this.__registerPartials(this.compiledTemplates);
    },

    get: function(templateName) {
        if(this.compiledTemplates.hasOwnProperty(templateName)) {
            return this.compiledTemplates[templateName];
        } else {
            throw new Error("The requested template has not been registered!");
        }
    },

    __registerPartials: function(partials) {
        for(var partial in partials) {
            Handlebars.registerPartial(partial, partials[partial]);
        };
    }

}

module.exports = templateServiceModule;