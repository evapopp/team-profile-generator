const Employee  = require("../lib/employee")

describe('Employee test', () => {
    it("should return Employee's name", () => {
        const employeeTest = new Employee ("Zander", 999, "zander@gmail.com")
        expect(employeeTest.getRole()).toBe("Employee");
    })

})