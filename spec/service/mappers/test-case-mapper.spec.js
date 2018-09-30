describe("Test case mapper tests", function() {

    beforeEach(function() {
        this.testCaseMapper = require("../../../service/mappers/test-case-mapper");
    })

    describe("When jasmine spec is passed", function() {
        it(`TestCase object is returned`, function() {  
            var spec = {
                deprecationWarnings: [],
                description: "specDescr",
                failedExpectations: [],
                fullName: "",
                id: "",
                passedExpectations: [],
                pendingReason: "",
                status: "",
            }

            var testCase = this.testCaseMapper.mapSpec(spec);

            expect(testCase.name).toEqual(spec.description);
            expect(testCase.result).toEqual(spec.status);
        });
    });
});  