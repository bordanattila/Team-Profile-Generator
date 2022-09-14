const {Employee} = require("../lib/employee");

describe("lib/employee.js", () => {
    describe("employee", () => {
        it("initiates employee name, id, email, role", () => {
            const employee = new Employee("Timmy", "2", "email", "role");
            expect(employee.employeeName).toBe("Timmy");
            expect(employee.employeeID).toBe("2");
            expect(employee.employeeEmail).toBe("email");
            expect(employee.employeeRole).toBe("role");
        });
        it("returns emplyee name when getName is called", () => {
            const employee = new Employee("Timmy", "2", "email", "role");
            expect(employee.getName()).toBe("Timmy");
        });
        it("returns emplyee ID when getID is called", () => {
            const employee = new Employee("Timmy", "2", "email", "role");
            expect(employee.getID()).toBe("2");
        });
        it("returns emplyee email when getEmail is called", () => {
            const employee = new Employee("Timmy", "2", "email", "role");
            expect(employee.getEmail()).toBe("email");
        });
        it("returns emplyee role when getRole is called", () => {
            const employee = new Employee("Timmy", "2", "email", "role");
            expect(employee.getRole()).toBe("role");
        });

    }); 
        
    
})

