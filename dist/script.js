// import managerData from "./employees.json" assert { type: "JSON"};

// const {theManager} = require(".././lib/menu")

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
     ${allEngineer.map(function (engineer) {
        console.log("***", engineer.employeeName, engineer.getName())
        return `
        <div>${engineer.getName()}</div>
        `
     }) 

     }

     ${allIntern.map(function (intern) {
        console.log("***", intern.employeeName, intern.getName())
        return `
        <div>${intern.getName()}</div>
        `
     }) 

     }
      
    </body>
    
    </html>`;
    console.log(html)
}
// create(theManager);


module.exports = {create};
