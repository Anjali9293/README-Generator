// array of questions for user
const MARKDOWN_FILENAME = 'README.md';

const inquirer = require('inquirer');
const filesystem = require("fs").promises;
const Markdown = require("./utils/generateMarkdown")

const USER_QUESTIONS = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team member? (leave blank if done)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username? (leave blank if done)'
    }
];

const QUESTIONS = [
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
        type: "list",
        name: "License",
        message: "Choose license for the project: ",
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What are contribution guidelines?:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write about tests instructions:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
];

// function to write README file
function writeToFile(filename, data) {
    console.log("File has been witten");
    return filesystem.writeFile(filename, data);      
}

// Function to prompt user for information and return user submitions as promise
function promptQuestions() {
    return inquirer.prompt(QUESTIONS);
}

function promptUser() {
    return inquirer.prompt(USER_QUESTIONS);
}

// function to initialize program
async function init() {
    const answers = await promptQuestions();
    console.log("Mention your collaborators, if any:");
    answers.users = [];
    let user = {};
    do {
        user = await promptUser();
        if(user.name) answers.users.push(user);
    } while(user.name != "");
    
    const readMe = Markdown(answers);
    await writeToFile(MARKDOWN_FILENAME, readMe);
}

// function call to initialize program
init();
