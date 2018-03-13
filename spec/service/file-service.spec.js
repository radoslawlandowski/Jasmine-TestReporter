describe("File reader tests", function() {

    beforeEach(function() {
        this.fileReader = require("../../service/file-service");
    })

    describe("When user loads file", function() {
        it(`it is returned as string`, function() {
            expect(this.fileReader.readAsString(`${process.cwd()}/spec/resources/example.hbs`)).toEqual("<lol>OMG</lol>");
        });
    });
});  