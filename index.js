const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./employee");
const Engineer = require("./employee");
const Intern = require("./employee");
const menu = require("./menu")

inquirer
.prompt([
    {
        type: "input",
        name: "manager",
        message: "Enter team manager's name: ",
    },
    {
        type: "input",
        name: "managerID",
        message: "Enter team manager's ID: ",
    },
    {
        type: "input",
        name: "manageremail",
        message: "Enter team manager's email: ",
    },
    {
        type: "input",
        name: "officenumber",
        message: "Enter team manager's office number: ",
    }
])
.then((response) => {
    const mn = new Manager(response.manager, response.managerID, response.manageremail, response.officenumber);
    const on = new Manager(response.officenumber);
    console.log(mn);
    console.log(Manager.additional);
    const eng = new Engineer(response.manager, response.managerID, response.manageremail, response.officenumber);
    console.log("Engineer");
    console.log(eng);
    menu()
})