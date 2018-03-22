var TestRun = require("./model/test-run");
var TestSuite = require("./model/test-suite");
var TestCase = require("./model/test-case");
var Property = require("./model/property");
var TemplateService = require("./service/template-service");
var TestSuiteMapper = require("./service/mappers/test-suite-mapper");
var TestCaseMapper = require("./service/mappers/test-case-mapper");

const resultsPath = "./results";

class TestReporter {

    constructor(fileService) {
        if(fileService == undefined) {
            this.fileService = require("./service/file-service");
        } else {
            this.fileService = fileService;
        }

        this.testRun = undefined;
        this.screenshotNumber = 0;
    }
    
    jasmineStarted(suiteInfo) {
        this.testRun = new TestRun(1, "testRun", new TestSuite(1, "testSuite", "Main testSuite"));

        this.fileService.makeDirectory(resultsPath);
    }

    suiteStarted(result) {
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
    }

    specStarted(result) {

    }

    specDone(result) {
        var testCase = TestCaseMapper.mapSpec(result);

        if((result.status === "failed") && browser != undefined) {
            var screenshotName = `screenshot-${this.screenshotNumber++}.jpg`;
            this.fileService.takeScreenshot(`${resultsPath}/${screenshotName}`, browser);
            testCase.addProperty(new Property("attachment", screenshotName));
        }

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
    }
    
    suiteDone(result) {

    }

    jasmineDone(result) {
        TemplateService.init();
        var resultFile = TemplateService.get("test-run")(this.testRun);
        this.fileService.saveStringToFile(`${resultsPath}/test-result.xml`, resultFile);
        this.testRun = undefined;
    }
}

module.exports = TestReporter;

