var $ = require("jquery");

describe("Template service tests", function() {

    beforeEach(function() {
        this.templateService = require("../../service/template-service")
    })

    describe("When service is created user can get compiled template: ", function() {

        var expectedTemplates = ["test-run"];
        var templateDirectory = "templates";

        expectedTemplates.forEach(templateName => {
            it(`'${templateName}'`, function() {
                var template = this.templateService.get(templateName);
                
                expect(template).toBeDefined();
            });
        })

        var contexts = {
            "test-run": {
                id: "myId",
                name: "myName"
            }
        }

        for(var templateName in contexts) {
            it(`'${templateName}' and fill it with context properly`, function() {
                var template = this.templateService.get(templateName);
                
                var templateWithContext = template(contexts[templateName]);

                expect(templateWithContext).toContain(contexts[templateName][Object.keys(contexts[templateName])[0]]);
            });
        }
    });

    describe("When user gets uncompiled template", function() {
        it(`exception is thrown`, function() {
            expect(() => { this.templateService.get("Non existant template");}).toThrowError(/You must pass a string or Handlebars AST/);
        });
    });
});  