const inquirer = require("inquirer");

const menu = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "menuchoice",
            message: "Would you like to enter next? If done choose exit. ",
            choices: ["Engineer", "Intern", "Exit"],
        }
    ])
    .then((response) => {
        enterEmployee(response)
    })
}

function enterEmployee(toEnter) {
    console.log(toEnter)
    if (toEnter.menuchoice === "Engineer") {
        console.log("entering engineer")
    } else if (toEnter.menuchoice === "Intern") {
        console.log("entering intern")
    } else {
        return
    }
}

// module.exports = enterEmployee
module.exports = menu