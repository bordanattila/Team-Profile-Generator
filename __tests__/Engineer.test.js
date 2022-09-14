const {Engineer} = require("../lib/employee");

describe("engineer", () => {
    it("initiates engineer name, id, email, role, github", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "Engineer", "github");
        expect(employee.employeeName).toBe("Toby");
        expect(employee.employeeID).toBe("3");
        expect(employee.employeeEmail).toBe("eng@email");
        expect(employee.employeeRole).toBe("Engineer");
        expect(employee.github).toBe("github")
    });
    it("returns engineer name when getName is called", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "engineer", "github");
        expect(employee.getName()).toBe("Toby");
    });
    it("returns engineer ID when getID is called", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "engineer", "github");
        expect(employee.getID()).toBe("3");
    });
    it("returns engineer email when getEmail is called", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "engineer", "github");
        expect(employee.getEmail()).toBe("eng@email");
    });
    it("returns engineer role when getRole is called", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "Engineer", "github");
        expect(employee.getRole()).toBe("Engineer");
    });

    it("returns GitHub username when getGithub is called", () => {
        const employee = new Engineer("Toby", "3", "eng@email", "Engineer", "github")
        expect(employee.getGitHub()).toBe("github");
    })

});