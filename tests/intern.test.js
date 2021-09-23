const Intern  = require("../lib/intern")

describe('Intern test', () => {
    it("should return Intern's school", () => {
        const internTest = new Intern("Stevie", 333, "stevie@gmail.com", "U of O")
        expect(internTest.getSchool()).toBe("U of O");
    })

})