// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter your project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation process?: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of the project: ",
        name: "usage"

    },
    {
        type: "list",
        message: "What licenses are used for the project?: ",
        name: "licenses",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "Enter contributing information: ",
        name: "contribute"

    }, {
        type: "input",
        message: "What tests you are running for your project?: ",
        name: "tests"
    }, 
    {
        type: "input",
        message: "What is your Github username?: ",
        name: "userName"

    },
    {
        type: "input",
        message: "What is your email?: ",
        name: "email"
    }

    
];

// function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync (fileName, data)
};

// function to initialize app
const init = async() => {
    const answers = await inquirer.prompt (questions)
    const markdown = generateMarkdown(answers)
    writeToFile ("MyREADME_File.md", markdown)
};

// Function call to initialize app
init();
