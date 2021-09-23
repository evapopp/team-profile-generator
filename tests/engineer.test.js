const Engineer  = require("../lib/engineer")

describe('Engineer test', () => {
    it("should return Engineer's github", () => {
        const engineerTest = new Engineer("Joe", 111, "joe@gmail.com", "joegithub")
        expect(engineerTest.getGithub()).toBe("joegithub");
    })

})