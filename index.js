// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];



// TODO: Create a function to initialize app
function init() {}





const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'installation:',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },

    //The lines for the read me
    {
        type: 'input',
        name: 'hobby',
        message: 'Project title?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
  ]);
};




//test

//test

// Create a function to write README file



const generateMD = (answers) => {
    return `# ${answers.projectTitle}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)
  ## Project Description
  * ${answers.description}
  ## Installation Instructions
  * ${answers.install}
  ## Usage Information
  * ${answers.use}
  ## Contributor Guidelines
  * ${answers.contributions}
  ## Code of Conduct
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
  ## Test Instructions
  * ${answers.test}
  ## License
  * licensed under the ${answers.license}
  ## Questions
  * For additional help or questions about collaboration, please reach out to ${answers.email}
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
    
  }
  

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateMD(answers)))
    .then(() => console.log('Your README was created successfully!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();