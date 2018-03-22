var TestSuite = require("../../model/test-suite");

var testSuiteMapperModule = {
    mapSuite: function(suite) {
        return new TestSuite(suite.id.replace("suite", ""), 
            suite.description, 
            suite.fullName,
            suite.status,
            null,
            null,
            null
        );
    }
}

module.exports = testSuiteMapperModule;
