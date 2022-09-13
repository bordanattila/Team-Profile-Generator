const {menu} = require("../lib/menu");
const Manager = require("../lib/menu")
const {enterEngineer} = require("../lib/menu")

describe("menu", () => {
    describe("Calling the function", () => {
        it("should create an instance of Manager based on user input", () => {
            const enteredManager = new Manager ("Timmy", "3", "manager@mail.com", "Manager", "2");
            expect(menu()).toBe(enteredManager)
            expect(enteredManager.employeeName).toEqual("Timmy");
            expect(enteredManager.employeeID).toEqual("3");
            expect(enteredManager.employeeEmail).toEqual("manager@mail.com");
            expect(enteredManager.employeeRole).toEqual("Manager");
            expect(enteredManager.officenumber).toEqual("2");
        });

        it("should throw an error if name is not provided", () => {
            const cb = () => new Manager ("3", "manager@mail.com", "Manager", "2");
            expect(cb).toThrow();
        });

    });
});

describe("enterEngineer", () => {
    describe("Calling the function", () => {
        it("should create an instance of Engineer based on user input", () => {
            expect(enterEngineer()).toBe(enteredEngineer)
            const enteredEngineer = new Engineer ("Toby", "4", "engineer@mail.com", "Engineer", "github");
            expect(enteredEngineer.employeeName).toEqual("Toby");
            expect(enteredEngineer.employeeID).toEqual("3");
            expect(enteredEngineer.employeeEmail).toEqual("engineer@mail.com");
            expect(enteredEngineer.employeeRole).toEqual("Engineer");
            expect(enteredEngineer.github).toEqual("github");
        });

        it("should throw an error if name is not provided", () => {
            const cb = () => new Engineer ("4", "engineer@mail.com", "Engineer", "github");
            expect(cb).toThrow();
        });

    });
});