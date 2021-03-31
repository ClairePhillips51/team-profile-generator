const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the Engineer's name", () => {
        expect(new Engineer("John Smith",464678,"jsmith@company.com","JSmith123").getName()).toBe("John Smith");
    });

    it("should return the Engineer's id", () => {
        expect(new Engineer("John Smith",464678,"jsmith@company.com","JSmith123").getId()).toBe(464678);
    });

    it("should return the Engineer's email", () => {
        expect(new Engineer("John Smith",464678,"jsmith@company.com","JSmith123").getEmail()).toBe("jsmith@company.com");
    });

    it("should return the Engineer's role", () => {
        expect(new Engineer("John Smith",464678,"jsmith@company.com","JSmith123").getRole()).toBe("Engineer");
    });

    it("should return the Engineer's GitHub", () => {
        expect(new Engineer("John Smith",464678,"jsmith@company.com","JSmith123").getGitHub()).toBe("JSmith123");
    });
});