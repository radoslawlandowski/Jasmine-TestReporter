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
        this.testRun = new TestRun(1, "testRun", new TestSuite(1, "testSuite", "Main testSuite"));
    },

    suiteStarted: function(result) {
        var testSuite = TestSuiteMapper.mapSuite(result);
        var parentName = testSuite.fullname.split(new RegExp(testSuite.name))[0].trim();

        if(parentName === "") {
            this.testRun.testSuite.testSuites.push(testSuite);
        } else {
            var currentSuite = this.testRun.testSuite;

            for(var i = 0 ; i < currentSuite["testSuites"].length ; i++) {
                var chosenSuite = currentSuite["testSuites"][i];
                if(chosenSuite.fullname == parentName) {
                    chosenSuite.addTestSuite(testSuite);
                    break;
                }
                if(chosenSuite["testSuites"]) {
                    for(var j = 0 ; j < chosenSuite["testSuites"].length ; j++) {
                        var nestedSuite = chosenSuite["testSuites"][j];
                        if(nestedSuite.fullname == parentName) {
                            nestedSuite.addTestSuite(testSuite);
                            break;
                        }
                    }
                }
            }
        }
    },

    specStarted: function(result) {

    },

    specDone: function(result) {
        var testCase = TestCaseMapper.mapSpec(result);
        var suiteName = testCase.fullname.split(new RegExp(testCase.name))[0].trim();

        var currentSuite = this.testRun.testSuite;

        for(var i = 0 ; i < currentSuite["testSuites"].length ; i++) {
            var chosenSuite = currentSuite["testSuites"][i];
            if(chosenSuite.fullname == suiteName) {
                chosenSuite.addTestCase(testCase);
                break;
            }
            if(chosenSuite["testSuites"]) {
                for(var j = 0 ; j < chosenSuite["testSuites"].length ; j++) {
                    var nestedSuite = chosenSuite["testSuites"][j];
                    if(nestedSuite.fullname == suiteName) {
                        nestedSuite.addTestCase(testCase);
                        break;
                    }
                }
            }
        }
        
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

