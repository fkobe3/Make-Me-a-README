// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log('Do you want assistance creating a README?');
console.log('Please answer all questions to the best of your ability to assist with teh README creation.');
// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: "input",
        name: "title",
        message: "What is the name of the project in question?",
        },
    //Description
    {
        type: "input",
        name: "description",
        message: "Please describe the project in as much detail as you see fit.",
        },
    //Installation
    {
        type: "input",
        name: "installation",
        message: "How does one install the project?",
        },
    //Usage
    {
        type: "input",
        name: "usage",
        message: "Please give examples and instructions of use.",
        },
    //License
    {
        type: "list",
        name: "license",
        message: "If your project is licensed, what license is it under?",
        choices: ["MIT", "Apache", "GPL", "BSD", "No License Applied"],
        },
    //Contributing
    {
        type: "input",
        name: "contributing",
        message: "If there was any contributors besides yourself, please list them with links o their Github profile, as well as any contribution guidelines of the project.",
        },
    //Tests
    {
        type: "input",
        name: "testing",
        message: "Please provide any test examples and how to run them, if desired.",
        },
    //Questions
    {
    type: "input",
    name: "github",
    message: "Please enter your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter an email for contact.",
        }

];

// TODO: Create a function to write README file
function writetoFile (fileName, data) {
    fs.writeFile (fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Thank you for your answers. Please look at the generated README to make sure it matches your expectations.");
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (answers) {
        console.log(generateMarkdown(answers))
        fs.writeFileSync("./README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
