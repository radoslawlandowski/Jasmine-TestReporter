var TestRun = require("./model/test-run");
var TestSuite = require("./model/test-suite");
var TestCase = require("./model/test-case");
var TemplateService = require("./service/template-service");
var FileService = require("./service/file-service");
var TestSuiteMapper = require("./service/mappers/test-suite-mapper");
var TestCaseMapper = require("./service/mappers/test-case-mapper");

var testReporter = {
    
    testRun: undefined,

    jasmineStarted: function(suiteInfo) {
        this.testRun = new TestRun(1, "testRun", new TestSuite(1, "testSuite"));
    },

    suiteStarted: function(result) {
        var testSuite = TestSuiteMapper.mapSuite(result);
        this.testRun.testSuite.addTestSuite(testSuite);
    },

    specStarted: function(result) {

    },

    specDone: function(result) {
        var testCase = TestCaseMapper.mapSpec(result);
        var suitesCount = this.testRun.testSuite.testSuites.length;
        this.testRun.testSuite.testSuites[suitesCount - 1].addTestCase(testCase);
        
        if(result.status === "failed") {
            
        }
    },
    
    suiteDone: function(result) {
    },

    jasmineDone: function(result) {
        TemplateService.init();
        var testRunTemplate = TemplateService.get("test-run");
        var resultFile = testRunTemplate(this.testRun);
        FileService.saveStringToFile("./test-result.xml", resultFile);
        this.testRun = undefined;
    }
}

module.exports = testReporter;

