const fs = require("fs");
const inquirer = require("inquirer");
const {Manager, Engineer, Intern} = require("./employee");

const { resolve } = require("path");

const theManager = [];
const allEngineer = [];
const allIntern = [];

const menu = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter team manager's name: ",
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter team manager's ID: ",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter team manager's email: ",
        },
        {
            type: "input",
            name: "officenumber",
            message: "Enter team manager's office number: ",
        },
        
    ])
    .then((manager) => {
        const enteredManager = new Manager (manager.managerName, manager.managerID, manager.managerEmail, manager.role, manager.officenumber)
        theManager.push(enteredManager)
        console.log(theManager)
        const v = enteredManager.getName();
        console.log(v)
        selectToEnter()
    })
}

const selectToEnter = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menuchoice",
            message: "What would you like to enter next? If done choose exit. ",
            choices: ["Engineer", "Intern", "Exit"],
        }
    ])
    .then((selected) => selectEmployee(selected))

}

function selectEmployee(toEnter) {
    let loop = true;
    while (loop) {

        if (toEnter.menuchoice === "Engineer") {
            console.log("entering engineer");
            enterEngineer();
            break;
        } else if (toEnter.menuchoice === "Intern") {
            console.log("entering intern");
            enterIntern();
            break;
        } else {
            loop = false;
           
            resolve();
        }
        
    } 
}

function enterEngineer () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name? ",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the Engineer's ID? ",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's email? ",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's GitHub username? ",
        },
    ])
    .then((engineerInfo) => {
        const enteredEngineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.role, engineerInfo.engineerGithub);
        allEngineer.push(enteredEngineer);
        console.log("")
        console.log("++++++++++++++++++++++++");
        console.log(allEngineer);
        selectToEnter();
    })
}

function enterIntern () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name? ",
        },
        {
            type: "input",
            name: "internID",
            message: "What is the Intern's ID? ",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's email? ",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the Intern's school? ",
        },
    ])
    .then((internInfo) => {
        const enteredIntern = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.role, internInfo.internSchool);
        allIntern.push(enteredIntern);
        console.log("++++++++++++++++++++++++");
        console.log(allIntern);
        selectToEnter();
    })
}

module.exports = {
    menu,
    theManager,
    allEngineer,
    allIntern,
};