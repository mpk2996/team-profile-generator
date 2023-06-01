const createManager = function (manager) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="px-6 py-4 bg-gradient-to-r from-yellow-300 to-yellow-500">
            <h3 class="text-xl font-bold text-gray-800">${manager.name}</h3>
            <h4 class="text-gray-700 font-bold">Manager</h4>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700"><span class="font-bold">ID:</span> ${manager.id}</p>
            <p class="text-gray-700"><span class="font-bold">Email:</span> ${manager.email}</p>
            <p class="text-gray-700"><span class="font-bold">Office Number:</span> ${manager.officeNumber}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  const createEngineer = function (engineer) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="px-6 py-4 bg-gradient-to-r from-blue-300 to-blue-500">
            <h3 class="text-xl font-bold text-gray-800">${engineer.name}</h3>
            <h4 class="text-gray-700 font-bold">Engineer</h4>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700"><span class="font-bold">ID:</span> ${engineer.id}</p>
            <p class="text-gray-700"><span class="font-bold">Email:</span> ${engineer.email}</p>
            <p class="text-gray-700"><span class="font-bold">Github:</span> <a href="https://github.com/${engineer.github}" class="text-blue-500">${engineer.github}</a></p>
          </div>
        </div>
      </div>
    `;
  }
  
  const createIntern = function (intern) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="px-6 py-4 bg-gradient-to-r from-green-300 to-green-500">
            <h3 class="text-xl font-bold text-gray-800">${intern.name}</h3>
            <h4 class="text-gray-700 font-bold">Intern</h4>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700"><span class="font-bold">ID:</span> ${intern.id}</p>
            <p class="text-gray-700"><span class="font-bold">Email:</span> ${intern.email}</p>
            <p class="text-gray-700"><span class="font-bold">School:</span> ${intern.school}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  
  const createTeamPage = function (employeeCards) {   
    return`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-200">
        <header>
          <nav class="bg-blue-500">
            <div class="max-w-6xl mx-auto px-4">
              <div class="flex items-center justify-between h-16">
                <div class="flex">
                  <span class="text-white text-xl font-bold">Team Profile</span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div class="container mx-auto py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${employeeCards}
            </div>
          </div>
        </main>
      </body>
      </html>
    `;
  }
  
  const pageHTML = (data) => {
    const employeesArray = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      if (role === 'Intern') {
        const internCard = createIntern(employee);
        employeesArray.push(internCard);
      }
  
      if (role === 'Engineer') {
        const engineerCard = createEngineer(employee);
        employeesArray.push(engineerCard);
      }
      
      if (role === 'Manager') {
        const managerCard = createManager(employee);
        employeesArray.push(managerCard);
      }
    }
  
    const employeeCards = employeesArray.join('')
    const generateTeam = createTeamPage(employeeCards); 
    return generateTeam;
  }
  
  module.exports = pageHTML;