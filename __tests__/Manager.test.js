const {Manager} = require("../lib/employee");
const name = "Rob";
const id = "1";
const email = "manager@mail";
const role = "Manager";
const officeno = "6";

describe("manager", () => {
    it("initiates manager name, id, email, role, officenumber", () => {
        const employee = new Manager(name, id, email, role, officeno);
        expect(employee.employeeName).toBe(name);
        expect(employee.employeeID).toBe(id);
        expect(employee.employeeEmail).toBe(email);
        expect(employee.employeeRole).toBe(role);
        expect(employee.officenumber).toBe(officeno)
    });
    it("returns manager name when getName is called", () => {
        const employee = new Manager(name, id, email, role, officeno);
        expect(employee.getName()).toBe(name);
    });
    it("returns manager ID when getID is called", () => {
        const employee = new Manager(name, id, email, role, officeno);
        expect(employee.getID()).toBe(id);
    });
    it("returns manager email when getEmail is called", () => {
        const employee = new Manager(name, id, email, role, officeno);
        expect(employee.getEmail()).toBe(email);
    });
    it("returns manager role when getRole is called", () => {
        const employee = new Manager(name, id, email, role, officeno);
        expect(employee.getRole()).toBe(role);
    });

    it("returns office number username when getOfiicenumber is called", () => {
        const employee = new Manager(name, id, email, role, officeno)
        expect(employee.getOfficenumber()).toBe(officeno);
    })

});