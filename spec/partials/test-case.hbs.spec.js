describe("When user puts context into test-case partial", function() {
    beforeEach(function() {
        this.templateService = require("../../service/template-service");
        this.templateService.init();
        this.testCase = this.templateService.get("test-case");
    })

    it(`the 'properties' partial is nested within it`, function() {
        var testCaseContext = {
            "id": "testCaseId",
            "properties": [
                {name: "propName1", value: "propValue1"},
                {name: "propName2", value: "propValue2"},
                {name: "propName3", value: "propValue3"},
            ]
        }

        var testCaseWithContext = this.testCase(testCaseContext);
        
        expect(testCaseWithContext).toContain("<properties>");
        expect(testCaseWithContext).toContain("</properties>");
        expect(testCaseWithContext).toContain(testCaseContext.properties[0].name);
    });

    it(`and there are no properties defined, the properties partial is not injected`, function() {
        var testCaseContext = {
            "id": "testCaseId"
        }

        var testCaseWithContext = this.testCase(testCaseContext);

        expect(testCaseWithContext).not.toContain("<properties>");
        expect(testCaseWithContext).not.toContain("</properties>");
    });

    it(`and the properties array has no elements, the properties partial is not injected`, function() {
        var testCaseContext = {
            "id": "testCaseId",
            "properties": []
        }

        var testCaseWithContext = this.testCase(testCaseContext);

        expect(testCaseWithContext).not.toContain("<properties>");
        expect(testCaseWithContext).not.toContain("</properties>");
    });
});