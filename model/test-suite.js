class TestSuite {
    constructor(id, name, fullname, result) {
        this.id = id;
        this.name = name;
        this.fullname = fullname;
        this.result = result;
        this.testCases = [];
        this.testSuites = [];
        this.properties = [];
        this.isDone = false;
    }

    addTestCase(testCase) {
        this.testCases.push(testCase);
    }

    addTestSuite(testSuite) {
        this.testSuites.push(testSuite);
    }

    setDone() {
        this.isDone = true;
    }
}

module.exports = TestSuite;