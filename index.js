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
    //TODO: make badge clickable - were to go license section in readme or actual license website
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
        //console.log(answers);
        writeToFile('README.md', answers);
    })
}

// Function call to initialize app
init();


//////////////////////////////////////////////////////////////////////////////

/*

## TODO:
### NOTE: WE SHOULD HAVE A WAY TO MAKE SOME OF THIS SECTIONS OPTIONAL
### IN THIS STRING Literal WE WILL AN if (provided) conditional
### on prompt side, we will have a quenstion  like/example 'WOULD YOU LIKE TO PROVIDE A how-to-contribute SECTION TO YOUR README FILE? - continue prompt base on answer, or quit and generate README with given information
### BETTER IDEA - PROMT USER TO CHECK BOXES WITH ALL SECTIONS THEY WANT THEIR README TO HAVE AND THEM PORMPT USER only FOR THAT INFORMATION - NOT SURE IF SETUP WILL WORK FINE WITH THIS SOLUTION APPROACH

*/