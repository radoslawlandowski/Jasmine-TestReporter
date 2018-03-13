var TestSuite = require("../../model/test-suite");

var testSuiteMapperModule = {
    mapSuite: function(spec) {
        return new TestSuite(spec.id, 
            spec.description, 
            spec.fullname,
            spec.status,
            null,
            null,
            null
        );
    }
}

module.exports = testSuiteMapperModule;

//<test-suite type="TestFixture" id="1023" name="BadFixture" fullname="NUnit.Tests.BadFixture" testcasecount="1" result="Skipped" label="Invalid" time="0.000" total="0" passed="0" failed="0" inconclusive="0" skipped="0" asserts="0">
