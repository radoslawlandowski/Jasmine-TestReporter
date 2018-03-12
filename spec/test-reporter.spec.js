describe("Test reporter tests", function() {

    describe("When test suite is started", function() {
        it("main result skeleton is created", function() {
          a = true;
        });
    });

    describe("When test case is executed", function() {
        it("it's added to result summary", function() {
          a = true;
        });
    });

    describe("When test case run has test suites", function() {
        it("they exist in a summary", function() {
          a = true;
        });

        it("they have test cases setup inside them", function() {
            a = true;
        });
    });

    describe("When test case passes", function() {
        it("the screenshot is not made and no new file made", function() {
          a = true;
        });
    });

    describe("When test case fails", function() {
        it("the screenshot is made and saved to file", function() {
          a = true;
        });
      });


    describe("When test run is done", function() {
        it("the result file is saved in the given directory", function() {
          a = true;
        });

        it("the screenshots are in proper folder", function() {
            a = true;
        });

        it("the result file with screenshot folder is zipped into archive", function() {
            a = true;
        });
        
    });
  });