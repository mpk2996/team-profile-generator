const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// page html
const generateHTML = require ('./src/starterTemplate');

const employees = [];

function collectEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email:",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:",
      },
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
      employees.push(manager);
      addEmployee();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select the employee role:',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
      },
    ])
    .then((answers) => {
      if (answers.role === 'Finish building my team') {
        generateHTML();
      } else {
        promptEmployeeInfo(answers.role);
      }
    });
}

function promptEmployeeInfo(role) {
  const roleSpecificQuestions = {
    Engineer: {
      name: "Enter the engineer's name:",
      id: "Enter the engineer's ID:",
      email: "Enter the engineer's email:",
      specific: "Enter the engineer's GitHub username:",
    },
    Intern: {
      name: "Enter the intern's name:",
      id: "Enter the intern's ID:",
      email: "Enter the intern's email:",
      specific: "Enter the intern's school:",
    },
  };

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: roleSpecificQuestions[role].name,
      },
      {
        type: 'input',
        name: 'id',
        message: roleSpecificQuestions[role].id,
      },
      {
        type: 'input',
        name: 'email',
        message: roleSpecificQuestions[role].email,
      },
      {
        type: 'input',
        name: 'specific',
        message: roleSpecificQuestions[role].specific,
      },
    ])
    .then((answers) => {
      const { name, id, email, specific } = answers;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, specific);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, specific);
      }

      employees.push(employee);
      addEmployee();
    });
}

// Call the collectEmployeeInfo function to start the application
collectEmployeeInfo();