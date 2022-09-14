const {Intern} = require("../lib/employee");
const name = "Bill";
const id = "9";
const email = "intern@mail";
const role = "Intern";
const school = "school";

describe("intern", () => {
    it("initiates intern name, id, email, role, school", () => {
        const employee = new Intern(name, id, email, role, school);
        expect(employee.employeeName).toBe(name);
        expect(employee.employeeID).toBe(id);
        expect(employee.employeeEmail).toBe(email);
        expect(employee.employeeRole).toBe(role);
        expect(employee.school).toBe(school)
    });
    it("returns intern name when getName is called", () => {
        const employee = new Intern(name, id, email, role, school);
        expect(employee.getName()).toBe(name);
    });
    it("returns intern ID when getID is called", () => {
        const employee = new Intern(name, id, email, role, school);
        expect(employee.getID()).toBe(id);
    });
    it("returns intern email when getEmail is called", () => {
        const employee = new Intern(name, id, email, role, school);
        expect(employee.getEmail()).toBe(email);
    });
    it("returns intern role when getRole is called", () => {
        const employee = new Intern(name, id, email, role, school);
        expect(employee.getRole()).toBe(role);
    });

    it("returns school name when getSchool is called", () => {
        const employee = new Intern(name, id, email, role, school)
        expect(employee.getSchool()).toBe(school);
    })

});