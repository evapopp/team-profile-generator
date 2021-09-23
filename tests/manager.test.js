const Manager  = require("../lib/manager")

describe('Manager test', () => {
    it("should return Manager's office number", () => {
        const managerTest = new Manager ("Amy", 222, "amy@gmail.com", 99)
        expect(managerTest.getOfficeNumber()).toBe(99);
    })

})