var TestSuite = require("../../model/test-suite");

var testSuiteMapperModule = {
    mapSuite: function(spec) {
        return new TestSuite(spec.id, 
            spec.description, 
            spec.fullName,
            spec.status,
            null,
            null,
            null
        );
    }
}

module.exports = testSuiteMapperModule;
