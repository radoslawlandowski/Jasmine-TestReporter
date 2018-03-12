var $ = require("jquery");

describe("Template service tests", function() {

    beforeEach(function() {
        this.templateService = require("../../service/template-service")
        this.templateService.init();
    })

    describe("When service is created user can get compiled template: ", function() {

        var expectedTemplates = ["test-run", "test-case"];
        var templateDirectory = "templates";

        expectedTemplates.forEach(templateName => {
            it(`'${templateName}'`, function() {
                var template = this.templateService.get(templateName);
                
                expect(template).toBeDefined();
            });
        })

        var contexts = {
            "test-run": {
                id: "testRunId",
                name: "myName"
            },
            "test-case": {
                id: "testCaseId",
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
            expect(() => { this.templateService.get("Non existant template");}).toThrowError(/The requested template has not been registered!/);
        });
    });
});  