class Employee {
    constructor(name, employeeID, email, employeeRole) {
        this.employeeName = name;
        this.employeeID = employeeID;
        this.employeeEmail = email;
        this.employeeRole = employeeRole
    }
    getName() {
        return this.employeeName
    }

    getID() {
        return this.employeeID
    }

    getEmail() {
        return this.employeeEmail
    }

    getRole() {
        return this.Role
    }
}

class Manager extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Mananger";
        this.officenumber = additional;
    }
}

class Engineer extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Engineer";
        this.github = additional;
    }
}

class Intern extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Intern";
        this.school = additional;
    }
}

module.exports = {
    Manager,
    Engineer,
    Intern,
};