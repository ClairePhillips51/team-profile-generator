const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return the Manager's name", () => {
        expect(new Manager("John Smith",464678,"jsmith@company.com",1012).getName()).toBe("John Smith");
    });

    it("should return the Manager's id", () => {
        expect(new Manager("John Smith",464678,"jsmith@company.com",1012).getId()).toBe(464678);
    });

    it("should return the Manager's email", () => {
        expect(new Manager("John Smith",464678,"jsmith@company.com",1012).getEmail()).toBe("jsmith@company.com");
    });

    it("should return the Manager's role", () => {
        expect(new Manager("John Smith",464678,"jsmith@company.com",1012).getRole()).toBe("Manager");
    });

    it("should return the Manager's GitHub", () => {
        expect(new Manager("John Smith",464678,"jsmith@company.com",1012).getOfficeNumber()).toBe(1012);
        expect(new Manager("John Smith",464678,"jsmith@company.com","1012a").getOfficeNumber()).toBe("1012a");
    });
});