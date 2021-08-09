const Engineer = require('./lib/engineer');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require('inquirer');
const fs = require("fs");

function buildTeam(){
    function addEmployee(){
        inquirer
            .prompt([
                {
                type:"input",
                name:"employeeName",
                message: "What is your employee's name?",
                },
                {
                type:"input",
                name: "employeeId",
                message: "what is your employee's id?"
                },
                {
                type:"input",
                name: "employeeEmail",
                message: "what is your employee's email?"
                }
            ])
        .then((data) => {
        
        })    
    }
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
        .then((data) => {

        })
    }
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
                name: "managerOfficeNuber",
                message: "what is your manager's office number?"
                }
            ])
        .then((data) => {
        
        })
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
        .then((data) => {
        
        })
    }
}