class TestSuite {
    constructor(id, name, fullname, result) {
        this.id = id;
        this.name = name;
        this.fullname = fullname;
        this.result = result;
        this.testCases = [];
        this.testSuites = [];
        this.properties = [];
    }

    addTestCase(testCase) {
        this.testCases.push(testCase);
    }

    addTestSuite(testSuite) {
        this.testSuites.push(testSuite);
    }
}

module.exports = TestSuite;