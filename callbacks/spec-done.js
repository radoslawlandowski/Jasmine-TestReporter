function specDoneModule() {
    this.specDone = function(result) {
        for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: '
            + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    }
  }
  
  module.exports = specDoneModule;