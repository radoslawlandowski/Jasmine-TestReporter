describe("Test reporter tests", function() {

    beforeEach(function() {
        var fakeFileService = {
            makeDirectory: jasmine.createSpy('makeDirectory'),
            takeScreenshot: jasmine.createSpy('takeScreenshot'),
            saveStringToFile: jasmine.createSpy('saveStringToFile')
        }
        var reporter = require("../test-reporter");
        this.testReporter = new reporter(fakeFileService);
    })

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

    describe("When jasmine is started", function() {
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
  });