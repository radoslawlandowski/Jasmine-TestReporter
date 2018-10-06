var path = require('path');
const { execSync } = require('child_process');
// stderr is sent to stdout of parent process
// you can set options.stdio if you want it to go elsewhere

var httpCommunicationServiceModule = {
    sendFile: function(filePath, hostname, testGroup) {
        const command = `curl -F file=@${filePath} ${hostname}/api/test-groups/${testGroup}/test-runs`
        let stdout = execSync(command);
        console.log(stdout);
    },
}

module.exports = httpCommunicationServiceModule;

