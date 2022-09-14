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
        return this.employeeRole
    }
}

class Manager extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Manager";
        this.officenumber = additional;
    }
    getOfficenumber () {
        return this.officenumber
    }
}

class Engineer extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Engineer";
        this.github = additional;
    }
    getGitHub () {
        return this.github
    }
}

class Intern extends Employee {
    constructor(name, employeeID, email, employeeRole, additional) {
        super(name, employeeID, email, employeeRole);
        this.employeeRole = "Intern";
        this.school = additional;
    }
    getSchool () {
        return this.school
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern,
};