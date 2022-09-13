const fs = require("fs");

//Generate index.html based on user input
function create (theManager, allEngineer, allIntern) {
    console.log("this is whatever")
    console.log(theManager)
    console.log(allEngineer)
    console.log(allIntern)
   
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Team Profile Generator</h1>
      ${theManager.map(function (manager) {
         return `
         <div>${manager.getName()}</div>
         <div>${manager.getRole()}</div>
         <div>${manager.getID()}</div>
         <div>${manager.getEmail()}</div>
         <div>${manager.getOfficenumber()}</div>
         `
      })}
     ${allEngineer.map(function (engineer) {
        console.log("***", engineer.employeeName, engineer.getName())
        return `
        <div>${engineer.getName()}</div>
        <div>${engineer.getRole()}</div>
        <div>${engineer.getID()}</div>
        <div>${engineer.getEmail()}</div>
        <div>${engineer.getGitHub()}</div>
        `
     }) 

     }

     ${allIntern.map(function (intern) {
        console.log("***", intern.employeeName, intern.getName())
        return `
        <div>${intern.getName()}</div>
        <div>${intern.getRole()}</div>
        <div>${intern.getID()}</div>
        <div>${intern.getEmail()}</div>
        <div>${intern.getSchool()}</div>
        `
     }) 

     }
      
    </body>
    
    </html>`;

    //write the index.html
    fs.writeFile("./dist/index.html", html, (error) => error ? console.log("File not saved.") : console.log("File saved successfully."));
};

module.exports = {create};
