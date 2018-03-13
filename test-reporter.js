var TestRun = require("./model/test-run");
var TestSuite = require("./model/test-suite");
var TestCase = require("./model/test-case");
var TemplateService = require("./service/template-service");
var FileService = require("./service/file-service");

var testReporter = {
    
    testRun: undefined,

    jasmineStarted: function(suiteInfo) {
        this.testRun = new TestRun(1, "testRun", new TestSuite(1, "testSuite"));
    },

    suiteStarted: function(result) {
        this.testRun.testSuite.addTestSuite(new TestSuite(1, "testSuite"));
    },

    specStarted: function(result) {
        var suitesCount = this.testRun.testSuite.testSuites.length;
        this.testRun.testSuite.testSuites[suitesCount - 1].addTestCase(new TestCase(1, "testCase"))
    },

    specDone: function(result) {
    
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

//jasmine.getEnv().addReporter(testReporter);
    
module.exports = testReporter;

