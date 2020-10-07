// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Write the description of the project:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Write the Installation instruction:'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Write about usage information:'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'What are contribution guidelines?:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write about tests instructions:'
    },
];

var inquirer = require('inquirer');

var filesystem = require("fs");
// function to write README file
function writeToFile(fileName, data) {
    filesystem.writeFile('readme.md',"", writeToFile)
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    

}

// function call to initialize program
init();
