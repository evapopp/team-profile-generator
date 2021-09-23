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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>Employee Team</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 ms-4">`;
    fs.writeFile('index.html', html,  (err) => err ? econsole.error(err) : console.log('file generated!')
    );
};

function endHTML() {
    const closeTag = 
    `</div>
    </body>
    </html>`;
    fs.appendFile('index.html', closeTag, (err) => err ? console.err(err) : console.log('team complete!'));
}

async function addEmployee(){
    const addingEmployee = await inquirer.prompt([
        {
        type: "list",
        name: "anotherEmployee",
        message: "Would you like to add another employee?",
        choices: [
            "Yes",
            "No",
        ]},
    ])
    .then(({ anotherEmployee }) => {
        if(anotherEmployee === 'Yes'){
            buildTeam();
        } else if(anotherEmployee === 'No'){
            endHTML();
        }
    })    
};

const engineerQuestions = [{
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
]


async function addEngineer(){
    const addingEngineer = await inquirer.prompt(engineerQuestions)
    .then((answer) => {
        const engineerEmpl = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
        const engineerRole = engineerEmpl.getRole();
        const engineerCard = `<div class="col">
        <div class="card mt-3" style="width: fit-content;">
        <div class="card-body">
          <h5 class="card-title text-center fw-bold text-uppercase" id="engineer-name">${engineerEmpl.name}</h5>
          <p class="card-text text-center"><i>${engineerRole}</i></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineerEmpl.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineerEmpl.email}"> ${engineerEmpl.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineerEmpl.github}"> ${engineerEmpl.github}</a></li>
        </ul>
        </div>
        </div>`;
        fs.appendFile('index.html', engineerCard, (err) => err ? console.err(err) : console.log('Engineeer created!'));
    })
    addEmployee();
}


const managerQuestions = [{
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
]

async function addManager(){
    const addingManager = await inquirer.prompt(managerQuestions)
    .then((answer) => {
        const managerEmpl = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
        const managerRole = managerEmpl.getRole();
        const managerCard = `<div class="col">
            <div class="card mt-3" style="width: fit-content;">
            <div class="card-body">
            <h5 class="card-title text-center fw-bold text-uppercase" id="engineer-name">${managerEmpl.name}</h5>
            <p class="card-text text-center"><i>${managerRole}</i></p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerEmpl.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerEmpl.email}"> ${managerEmpl.email}</a></li>
            <li class="list-group-item">Office Number: ${managerEmpl.officeNumber}</li>
            </ul>
            </div>
            </div>`
        fs.appendFile('index.html', managerCard, (err) => err ? console.err(err) : console.log('Manager created!'));
    })
    addEmployee();
}        

const internQuestions = [{
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
    }]

async function addIntern(){
    const addingIntern = await inquirer.prompt(internQuestions)
    .then((answer) => {
        const internEmpl = new Intern (answer.internName, answer.internId, answer.internEmail, answer.internSchool)
        const internRole = internEmpl.getRole();
        const internCard = `<div class="col">
            <div class="card mt-3" style="width: fit-content;">
            <div class="card-body">
            <h5 class="card-title text-center fw-bold text-uppercase" id="engineer-name">${internEmpl.name}</h5>
            <p class="card-text text-center"><i>${internRole}</i></p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internEmpl.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${internEmpl.email}"> ${internEmpl.email}</a></li>
            <li class="list-group-item">School: ${internEmpl.school}</li>
            </ul>
            </div>
            </div>`
        fs.appendFile('index.html', internCard, (err) => err ? console.err(err) : console.log('Intern created!'));
    })
    addEmployee();
}

function buildTeam(){
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
        if (employeeType === 'Engineer'){
            addEngineer();
        } else if(employeeType === 'Manager'){
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
