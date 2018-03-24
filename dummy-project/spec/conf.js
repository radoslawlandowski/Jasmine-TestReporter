var reporter = require("../node_modules/jasmine-testreporter/test-reporter");
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['dummy.spec.js'],

    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=1920x1080"]
        }
    },

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new reporter())
     }
  };