describe("When user puts context into test-suite partial", function() {
    beforeEach(function() {
        this.templateService = require("../../service/template-service");
        this.templateService.init();
        this.testCase = this.templateService.get("test-suite");
    })

    it(`the 'test-case' partial is nested within it`, function() {
        var testSuiteContext = {
            "id": "testSuiteId",
            "testCases": [
                {id: "testCaseId1"},
                {id: "testCaseId2"},
                {id: "testCaseId3"},
            ]
        }

        var testSuiteWithContext = this.testCase(testSuiteContext);
        
        expect(testSuiteWithContext).toContain("<test-case");
        expect(testSuiteWithContext).toContain("</test-case>");
        expect(testSuiteWithContext).toContain(testSuiteContext.testCases[0].id);
    });

    it(`and there are no test cases defined, no test case partial is injected`, function() {
        var testSuiteContext = {
            "id": "testSuiteId"
        }

        var testSuiteWithContext = this.testCase(testSuiteContext);

        expect(testSuiteWithContext).not.toContain("<test-case");
        expect(testSuiteWithContext).not.toContain("</test-case>");
    });

    it(`and the test cases array has no elements, no test case partial is injected`, function() {
        var testSuiteContext = {
            "id": "testSuiteId",
            "testCases": []
        }

        var testSuiteWithContext = this.testCase(testSuiteContext);

        expect(testSuiteWithContext).not.toContain("<test-case");
        expect(testSuiteWithContext).not.toContain("</test-case>");
    });

    it(`and it contains properties, the properties partial is injected`, function() {
        var testSuiteContext = {
            "id": "testSuiteId",
            "properties": [
                {name: "propName1", value: "propVal1"},
                {name: "propName2", value: "propVal2"}
            ]
        }

        var testSuiteWithContext = this.testCase(testSuiteContext);

        expect(testSuiteWithContext).toContain("<properties>");
        expect(testSuiteWithContext).toContain("</properties>");
    });

    it(`and it contains nested test suites, the proper count of partials is injected`, function() {
        var testSuiteContext = {
            "id": "testSuiteId",
            "testSuites": [
                { id: "testSuiteId1" },
                { id: "testSuiteId2" },
                { id: "testSuiteId3" },
            ]
        }

        var testSuiteWithContext = this.testCase(testSuiteContext);

        expect(testSuiteWithContext).toContain(`id="testSuiteId1"`);
        expect(testSuiteWithContext).toContain(`id="testSuiteId2"`);
        expect(testSuiteWithContext).toContain(`id="testSuiteId3"`);
    });
});