describe("Test reporter tests", function() {

    describe("test-reporter module", function () {

        beforeEach(function() {
            this.testReporter = require("../test-reporter");
        });
        
        var expectedCallbacks = 
            ["specStarted", 
            "specDone", 
            "suiteStarted", 
            "jasmineStarted"];

        expectedCallbacks.forEach(callback => {
            it(`has the '${callback}' callback defined`, function() {
                expect(this.testReporter[callback]).toBeDefined();
            })
        })
    });

    describe("When jasmine is started", function() {
        beforeEach(function() {
            this.testReporter = require("../test-reporter");
        });

        it("test run model is created", function() {
            var suiteInfo = {};

            this.testReporter.jasmineStarted(suiteInfo);

            expect(this.testReporter.testRun).toBeDefined();
        });

        it("main test suite is added to test run", function() {
            var suiteInfo = {};

            this.testReporter.jasmineStarted(suiteInfo);

            expect(this.testReporter.testRun.testSuite).toBeDefined();
        });

        afterEach(function() {
            this.testReporter.jasmineDone({});
        })
    });

    describe("When test suite is started", function() {

        beforeEach(function() {
            this.testReporter = require("../test-reporter");
        });

        xit("test suite object is added to the main testsuite", function() {
            var suiteInfo = {};
            var result = {};

            this.testReporter.jasmineStarted(suiteInfo);
            this.testReporter.suiteStarted(result);

            expect(this.testReporter.testRun.testSuite.testSuites.length).toEqual(1);
        });

        afterEach(function() {
            this.testReporter.jasmineDone({});
        })
    });

    describe("When test case is started", function() {
        beforeEach(function() {
            this.testReporter = require("../test-reporter");
        });

        xit("it's added to the test suite", function() {
            var suiteInfo = {
                fullName: "name"
            };
            var suiteResult = {
                fullName: "name"
            };
            var specResult = {
                fullName: "name testname"
            };

            this.testReporter.jasmineStarted(suiteInfo);
            this.testReporter.suiteStarted(suiteResult);
            this.testReporter.specStarted(specResult);

            expect(this.testReporter.testRun.testSuite.testSuites[0].testCases.length).toEqual(1);
        });

        afterEach(function() {
            this.testReporter.jasmineDone({});
        })
    });
    
    describe("When test case is started", function() {
        beforeEach(function() {
            this.testReporter = require("../test-reporter");
        });

        xit("it's added to the test suite", function() {
            var suiteInfo = {};
            var result = {};

            this.testReporter.jasmineStarted(suiteInfo);
            this.testReporter.suiteStarted(result);
            this.testReporter.specStarted(result);

            expect(this.testReporter.testRun.testSuite.testSuites[0].testCases.length).toEqual(1);
        });

        afterEach(function() {
            this.testReporter.jasmineDone({});
        })
    });

    describe("When test case run has test suites", function() {
        it("they exist in a summary", function() {
        });

        it("they have test cases setup inside them", function() {
        });
    });

    describe("When test case passes", function() {
        it("the screenshot is not made and no new file made", function() {
        });
    });

    describe("When test case fails", function() {
        it("the screenshot is made and saved to file", function() {
        });
      });


    describe("When test run is done", function() {
        it("the result file is saved in the given directory", function() {
            
        });

        it("the screenshots are in proper folder", function() {
        });

        it("the result file with screenshot folder is zipped into archive", function() {
        });
        
    });
  });