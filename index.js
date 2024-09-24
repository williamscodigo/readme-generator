// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'node:fs';
import { renderLicenseBadge, renderLicenseSection } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    name: 'title',
    message: 'What is your app/project title?'
   },
   {
    type: 'input',
    name: 'description',
    message: 'What is your app/project description?',
   },
   {
    type: 'input',
    name: 'installation',
    message: 'Write the installation process for your application!?',
   },
   {
    type: 'input',
    name: 'usage',
    message: 'How to use your application!?',
   },
   {
    type: 'input',
    name: 'contribute',
    message: 'How to contribute?',
   },
   {
    type: 'input',
    name: 'test',
    message: 'How to test your application?',
   },
   {
    type: 'list',
    name: 'license',
    message: 'What license would you choose?',
    choices: ['MIT', 'ISC', 'APACHEv2', 'OTHER']
   },
   {
    type: 'input',
    name: 'username',
    message: 'What is your github profile link?',
   },
   {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    let readmeContent = 
`# ${answers.title} ${renderLicenseBadge(answers.license)}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## How to Contribute

${answers.contribute}

## Tests

${answers.test}

${renderLicenseSection(answers.license)}

## Questions

GitHub Link: [${answers.username}](${answers.username})


Reach me with additional questions at: ${answers.email}
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('file written successfully ✅');
        }
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', answers);
    })
}

// Function call to initialize app
init();