var Handlebars = require('handlebars');

var templateServiceModule = {

    templateSources: {
        "test-run": `<test-run 
                        id="{{id}}" 
                        name="{{name}}" 
                        fullname="{{fullname}}" 
                        testcasecount="{{testCaseCount}}" 
                        result="{{result}}" 
                        time="{{time}}" 
                        total="{{total}}" 
                        passed="{{passed}}" 
                        failed="{{failed}}" 
                        inconclusive="{{inconclusive}}" 
                        skipped="{{skipped}}" 
                        asserts="{{asserts}}" 
                        run-date="{{runDate}}" 
                        start-time="{{startTime}}">
                    </test-run>`,
        "test-case": ``
    },

    get: function(templateName) {
        return Handlebars.compile(this.templateSources[templateName]);
    }
}

module.exports = templateServiceModule;