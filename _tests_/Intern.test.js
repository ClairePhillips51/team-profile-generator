const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the Intern's name", () => {
        expect(new Intern("John Smith",464678,"jsmith@company.com","MSU").getName()).toBe("John Smith");
    });

    it("should return the Intern's id", () => {
        expect(new Intern("John Smith",464678,"jsmith@company.com","MSU").getId()).toBe(464678);
    });

    it("should return the Intern's email", () => {
        expect(new Intern("John Smith",464678,"jsmith@company.com","MSU").getEmail()).toBe("jsmith@company.com");
    });

    it("should return the Intern's role", () => {
        expect(new Intern("John Smith",464678,"jsmith@company.com","MSU").getRole()).toBe("Intern");
    });

    it("should return the Intern's GitHub", () => {
        expect(new Intern("John Smith",464678,"jsmith@company.com","MSU").getSchool()).toBe("MSU");
    });
});