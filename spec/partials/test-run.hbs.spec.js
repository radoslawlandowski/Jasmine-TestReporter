describe("When user puts context into test-run partial", function() {
    beforeEach(function() {
        this.templateService = require("../../service/template-service");
        this.templateService.init();
        this.testRun = this.templateService.get("test-run");
    })

    it(`the main 'test-suite' partial is nested within it`, function() {
        var testRunContext = {
            "id": "testSuiteId",
            "testSuite": { id: "testCaseId1" }
        }

        var testRunWithContext = this.testRun(testRunContext);
        
        expect(testRunWithContext).toContain("<test-suite");
        expect(testRunWithContext).toContain("</test-suite>");
        expect(testRunWithContext).toContain(testRunContext.testSuite.id);
    });
});