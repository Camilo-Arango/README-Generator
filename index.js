// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps to test your application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you need?:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'Unlicense', 'BSD 2-Clause', 'LGPLv3', 'AGPLv3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
async function writeToFile(answers) {
    fs.writeFileSync('./README.md', 
`# ${answers.title}
<sub>${answers.license}</sub>

---
## Video Preview
[Tutorial Video](https://drive.google.com/file/d/1UpKD2gbVouDmSITwjOPZ0PcPns-AG71h/view)
## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Usage Guidelines
${answers.usage}
## Contribution Guidelines
${answers.contribution}
## Test Instructions
${answers.test}
## Questions
If you have any questions, please contact me at ${answers.email} or visit my github profile at [${answers.github}](https://github.com/${answers.github}).
`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error('Prompts could not be rendered in current environment!')
        } else {
            console.error(`Something went wrong!`, error)
        }
    });
}

// Function call to initialize app
init();
