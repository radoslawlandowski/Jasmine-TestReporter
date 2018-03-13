describe("Test suite mapper tests", function() {

    beforeEach(function() {
        this.testSuiteMapper = require("../../../service/mappers/test-suite-mapper");
    })

    describe("When jasmine suite is passed", function() {
        it(`TestSuite object is returned`, function() {  
            var suite = {
                deprecationWarnings: [],
                description: "",
                failedExpectations: [],
                fullName: "",
                id: "",
                status: ""
            }

            var testSuite = this.testSuiteMapper.mapSuite(suite);

            expect(testSuite.name).toEqual(suite.description);
        });
    });
});  