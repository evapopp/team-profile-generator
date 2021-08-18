const Engineer = require('./lib/engineer');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require('inquirer');
const fs = require("fs");

function createHTML(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
         
    </body>
    </html>`;
    fs.writeFile('index.html', html,  (err) => err ? econsole.error(err) : console.log('file generated!')
    );
};


function addEngineer(){
    inquirer
        .prompt([
            {
            type:"input",
            name:"engineerName",
            message: "What is your engineer's name?",
            },
            {
            type:"input",
            name: "engineerId",
            message: "what is your engineer's id?"
            },
            {
            type:"input",
            name: "engineerEmail",
            message: "what is your engineer's email?"
            },
            {
            type:"input",
            name: "engineerGithub",
            message: "what is your engineer's gihub?"
            }
        ])
    .then((answer) => {
        console.log(answer);
        const engineerEmpl = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
        console.log(engineerEmpl)
    })
//     const engineerCard = `<div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title" id="engineer-name">${engineerEmpl.name}</h5>
//       <p class="card-text" id="engineer-role"></p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item" id="engineer-id">${engineerEmpl.id}</li>
//       <li class="list-group-item" id="engineer-email">${engineerEmpl.engineerEmail}</li>
//       <li class="list-group-item" id="engineer-github">${engineerEmpl.engineerGithub}</li>
//     </ul>
//   </div>`
    // 
    // fs.appendFile('index.html', engineerCard, (err) => err ? console.err(err) : console.log('Engineeer created!'));
}



function addIntern(){
    inquirer
        .prompt([
            {
            type:"input",
            name:"internName",
            message: "What is your intern's name?",
            },
            {
            type:"input",
            name: "internId",
            message: "what is your intern's id?"
            },
            {
            type:"input",
            name: "internEmail",
            message: "what is your Intern's email?"
            },
            {
            type:"input",
            name: "internSchool",
            message: "what is your Intern's school?"
            }
        ])
    .then((answer) => {
    console.log(answer);
    const internEmpl = new Intern (answer.internName, answer.internId, answer.internEmail, answer.internSchool)
    console.log(internEmpl)
    })
}

        

function buildTeam(){
    function addManager(){
        inquirer
            .prompt([
                {
                type:"input",
                name:"managerName",
                message: "What is your manager's name?",
                },
                {
                type:"input",
                name: "managerId",
                message: "what is your manager's id?"
                },
                {
                type:"input",
                name: "managerEmail",
                message: "what is your manager's email?"
                },
                {
                type:"input",
                name: "managerOfficeNumber",
                message: "what is your manager's office number?"
                }
            ])
        .then((answer) => {
        console.log(answer);
        const managerEmpl = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
        console.log(managerEmpl)
        })
    }
   inquirer
    .prompt([
        {
            type:"list",
            name:"employeeType",
            message: "Which employee would you like to add?",
            choices: [
                "Engineer",
                "Manager",
                "Intern",
            ],
        }
    ])
    .then(({employeeType}) => {
        console.log(employeeType)
        if (employeeType === 'Engineer'){
            addEngineer();
        } else if(employeeType = 'Manager'){
            addManager();
        } else if(employeeType === "Intern"){
            addIntern();
        }  else(err) => {
            console.log(err)
        }
    }) 
}

createHTML();
buildTeam();
