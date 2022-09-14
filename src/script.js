const fs = require("fs");

//Generate index.html based on user input
function create (theManager, allEngineer, allIntern) {
   
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

      <header>
      <h1>Team Profile Generator</h1>
      </header>

      <div class="row margin justify-content-evenly">

      ${theManager.map(function (manager) {
         return `
         <div class="col-9 col-md-6 col-sm-3 margin border border-success background card">
            <div class="card-header">Name: ${manager.getName()}<br>Role: 🧑‍💼 ${manager.getRole()}</div>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${manager.getID()}</li>
               <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: this is the id</a></li>
               <li class="list-group-item">Office Number: ${manager.getOfficenumber()}</li>
            </ul>
         </div>
         `
      })}
      ${allEngineer.map(function (engineer) {        
         return `
         <div class="col-9 col-md-6 col-sm-3 margin border border-success background card">
            <div class="card-header">Name : ${engineer.getName()}<br>Role: 🧑‍🔬 ${engineer.getRole()}</div>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${engineer.getID()}</li>
               <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: this is the id</a></li>
               <li class="list-group-item"><a target="_blank" href="https://www.github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
         </div>
        `
     }).join(" ")

     }
     ${allIntern.map(function (intern) {        
        return `
        <div class="col-9 col-md-6 col-sm-3 margin border border-success background card">
            <div class="card-header">Name : ${intern.getName()}<br>Role: 👩‍🎓 ${intern.getRole()}</div>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${intern.getID()}</li>
               <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: this is the id</a></li>
               <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
         </div>
        `
     }).join(" ") 

     }
      
    </body>
    
    </html>`;

    //write the index.html
    fs.writeFile("./dist/index.html", html, (error) => error ? console.log("index.html was not created") : console.log("index.html created successfully"));
};

module.exports = {create};
