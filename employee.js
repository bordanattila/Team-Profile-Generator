class Employee {
    constructor(name, employeeID, email, additional) {
        this.employeeName = name;
        this.employeeID = employeeID;
        this.employeeEmail = email;
        this.additional = additional
    }
}

class Manager extends Employee {
    constructor(name, employeeID, email, additional) {
        super(name, employeeID, email, additional);
        this.officenumber = additional
    }
}

class Engineer extends Employee {
    constructor(name, employeeID, email, additional) {
        super(name, employeeID, email, additional);
        this.github = additional
    }
}

class Intern extends Employee {
    constructor(name, employeeID, email, additional) {
        super(name, employeeID, email, additional);
        this.school = additional
    }
}

module.exports = Manager
module.exports = Engineer
module.exports = Intern