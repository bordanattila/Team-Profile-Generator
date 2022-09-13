const inquirer = require("inquirer");
const {Manager, Engineer, Intern} = require("./employee");

const { create } = require("../dist/script");

//Storing user input 
const theManager = [];
const allEngineer = [];
const allIntern = [];

//Create prompt for user to enter the manager information and create na instance of Manager class
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
        if (!manager.managerName.trim().length) {
            throw new Error("Name was not provided.");            
        }
        if (!manager.managerID.trim().length) {
            throw new Error("ID was not provided.");            
        }
        if (!manager.managerEmail.trim().length) {
            throw new Error("Email was not provided.");            
        }
        if (!manager.officenumber.trim().length) {
            throw new Error("Officenumber was not provided.");            
        }
        const enteredManager = new Manager (manager.managerName, manager.managerID, manager.managerEmail, manager.role, manager.officenumber)
        theManager.push(enteredManager)
        //Call the next function where user can select what to do next
        selectToEnter()
    })
}

//User can select to enter other emplyees or exit the program
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

//Checking for use selection 
function selectEmployee(toEnter) {
    let loop = true;
    while (loop) {

        if (toEnter.menuchoice === "Engineer") {
            enterEngineer();
            break;
        } else if (toEnter.menuchoice === "Intern") {
            enterIntern();
            break;
        } else {
            loop = false;           
            create(theManager, allEngineer, allIntern);
        }
        
    } 
}

//Promting user to enter engineer data and creating a new instance ov Engineer class
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
        selectToEnter();
    })
}

//Promting user to enter intern data and creating a new instance ov Intern class
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
        selectToEnter();
    })
}


module.exports = {
    menu,
    theManager,
    allEngineer,
    allIntern,
    enterEngineer,
};
