
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
      message: 'Please describe the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide instructions for installation.',
    },
    {
      type: 'input',
      name: 'use',
      message: 'Please enter usage guidance.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please enter your contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter your testing protocols.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Which license would you like to use',
      // I think this needs to be a choice
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


//markdown file generation
const generateMD = (answers) => {
    return `# ${answers.title}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)

  ## Project Description
  * ${answers.description}

  ## Installation Instructions
  * ${answers.installation}

  ## Usage Information
  * ${answers.use}

  ## Contributor Guidelines
  * ${answers.contribute}
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

  ## Test Instructions
  * ${answers.test}

  ## License
  * licensed under the ${answers.license}

  ## Questions
  * If you have any questions, please do not hesitate to reach out at ${answers.email} or ${answers.linkedin}.
  * You can find  [${answers.github}](http://github.com/${answers.github})`;
    
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