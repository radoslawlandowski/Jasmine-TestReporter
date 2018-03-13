class TestCase {
    constructor(id, name, fullname, result, properties, time, asserts) {
        this.id = id;
        this.name = name;
        this.fullname = fullname;
        this.result = result;
        this.properties = properties || [];
        this.time = time || 0.000;
        this.asserts = asserts || 0;
    }

    addProperty(property) {
        this.properties.push(property);
    }
}

module.exports = TestCase;

