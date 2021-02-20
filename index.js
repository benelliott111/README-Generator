const Inquirer = require('inquirer')
const fs = require('fs')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
   var responses = await Inquirer.prompt([
      /* Pass your questions in here */
      {
          type: 'input',
          message: `What is the title of your project?`,
          name: 'title',
        },
        {
          type: 'input',
          message: `Please enter a description of your project`,
          name: 'description',
        },
        {
          type: 'input',
          message: `Please enter the installation instructions`,
          name: 'installation',
        },
        {
          type: 'input',
          message: `Please enter usage instructions`,
          name: 'usage',
        },
        {
          type: 'input',
          message: `Please enter contribution guidelines`,
          name: 'contribution',
        },
        {
          type: 'input',
          message: `Please enter test instructions`,
          name: 'test',
        },
        {
          type: 'input',
          message: `Please enter test instructions`,
          name: 'test',
        },
        {
          type: 'list',
          message: `Please enter the project license`,
          name: 'license',
          choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'BSD']
        },
        {
          type: 'input',
          message: `Please enter your gitHub profile link`,
          name: 'gitProfile',
        },
        {
          type: 'input',
          message: `Please enter your gitHub username`,
          name: 'gitUsername',
        },
        {
          type: 'input',
          message: `Please enter your email address`,
          name: 'email',
        },
    ]) 
    console.log(reponses)
  }

// Function call to initialize app
init();