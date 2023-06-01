const fs = require('fs'); 
const inquirer = require('inquirer');
const pageHTML = require('./src/starterTemplate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamProfile = [];

const newManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?'
           
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the managers ID."
           
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the managers email.",
    
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            
        }
    ])
    .then(managerData => {
        const  {name, id, email, officeNumber} = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        teamProfile.push(manager);
    })
};

const newEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAdd} = employeeData;
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } 
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

        }

        teamProfile.push(employee); 

        if (confirmAdd) {
            return newEmployee(teamProfile);

        } 
        else {
            return teamProfile;

        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } 
        else {
            console.log("Your team has officially been generated!")
        }
    })
}; 

const initApp = () => {
    newManager()
        .then(newEmployee)
        .then(teamProfile => { 
            return pageHTML(teamProfile);

    })
        .then(pageHTML => {
            return writeFile(pageHTML);

  })};

  initApp();