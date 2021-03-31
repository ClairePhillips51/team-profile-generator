const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return the employee's name", () => {
        expect(new Employee("John Smith",464678,"jsmith@company.com").getName()).toBe("John Smith");
    });

    it("should return the employee's id", () => {
        expect(new Employee("John Smith",464678,"jsmith@company.com").getId()).toBe(464678);
    });

    it("should return the employee's email", () => {
        expect(new Employee("John Smith",464678,"jsmith@company.com").getEmail()).toBe("jsmith@company.com");
    });

    it("should return the employee's role", () => {
        expect(new Employee("John Smith",464678,"jsmith@company.com").getRole()).toBe("Employee");
    });
});