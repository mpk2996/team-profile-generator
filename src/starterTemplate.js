const newManager = function (manager) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-400">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white">${manager.name}</h3>
              <h4 class="text-lg text-white opacity-75">Manager</h4>
            </div>
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
  
  const newEngineer = function (engineer) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-400">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white">${engineer.name}</h3>
              <h4 class="text-lg text-white opacity-75">Engineer</h4>
            </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700"><span class="font-bold">ID:</span> ${engineer.id}</p>
            <p class="text-gray-700"><span class="font-bold">Email:</span> ${engineer.email}</p>
            <p class="text-gray-700"><span class="font-bold">Github:</span> <a href="https://github.com/${engineer.github}" class="text-indigo-500 hover:underline">${engineer.github}</a></p>
          </div>
        </div>
      </div>
    `;
  }
  
  const newIntern = function (intern) {
    return `
      <div class="flex justify-center">
        <div class="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-400">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white">${intern.name}</h3>
              <h4 class="text-lg text-white opacity-75">Intern</h4>
            </div>
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
      <body class="bg-gray-400">
        <header>
          <nav class="bg-indigo-400">
            <div class="max-w-6xl mx-auto px-4">
              <div class="flex items-center justify-center h-16">
                <div class="flex">
                  <span class="text-white text-3xl font-bold">My Team</span>
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
        const internCard = newIntern(employee);
        employeesArray.push(internCard);
      }
  
      if (role === 'Engineer') {
        const engineerCard = newEngineer(employee);
        employeesArray.push(engineerCard);
      }
      
      if (role === 'Manager') {
        const managerCard = newManager(employee);
        employeesArray.push(managerCard);
      }
    }
  
    const employeeCards = employeesArray.join('')
    const generateTeam = createTeamPage(employeeCards); 
    return generateTeam;
  }
  
  module.exports = pageHTML;