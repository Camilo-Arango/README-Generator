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
        message: 'What are the test instructions?'
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

inquirer
.prompt(questions)
.then((answers) => {
    writeToFile(answers);
})
.catch((error) => {
    if (error.isTtyError) {
        console.error('Promps could not be rendered in current environment!')
    } else {
        console.error(`Something went wrong!`, error)
    }
});

// TODO: Create a function to write README file
async function writeToFile(answers) {
    fs.writeFileSync('./README.md', 
`# ${answers.title}
## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Deployed Link
[deployed link](${answers.deployedLink})
`);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();