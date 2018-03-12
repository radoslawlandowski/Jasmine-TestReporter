describe("Test reporter tests", function() {

    beforeEach(function() {
        this.testReporter = require("../test-reporter");
    });

    describe("test-reporter module", function () {

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

    describe("When test suite is started", function() {
        it("main result skeleton is created", function() {
        });
    });

    describe("When test case is executed", function() {
        it("it's added to result summary", function() {
        });
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