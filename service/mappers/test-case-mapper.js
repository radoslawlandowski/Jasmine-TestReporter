var TestCase = require("../../model/test-case");

var testCaseMapperModule = {
    mapSpec: function(spec) {
        return new TestCase(spec.id, 
            spec.description, 
            spec.fullName,
            spec.status,
            null,
            null,
            null
        );
    }
}

module.exports = testCaseMapperModule;