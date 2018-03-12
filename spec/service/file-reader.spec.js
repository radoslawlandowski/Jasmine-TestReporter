describe("File reader tests", function() {

    beforeEach(function() {
        this.fileReader = require("../../service/file-reader");
    })

    describe("When user loads file", function() {
        it(`it is read as string`, function() {
            expect(this.fileReader.readAsString(process.cwd() + "/spec/resources/example.hbs")).toEqual("<lol>OMG</lol>");
        });
    });
});  