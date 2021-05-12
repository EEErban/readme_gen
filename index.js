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
        choices: [
            "MIT License",
            "Code Project Open License (CPOL)",
            "Common Development and Distribution License (CDDL)",
            "Microsoft Public License (Ms-PL)",
            "Mozilla Public License 1.1 (MPL 1.1)",
            "Common Public License Version 1.0 (CPL)",
            "Eclipse Public License 1.0",
            "Apache License, Version 2.0"
        ]
    },
    {
        type: "input",
        message: "Enter contributing information: ",
        name: "contribute"

    }, {
        type: "input",
        message: "What tests you are running for your project?: ",
        name: "tests"
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = () => {};

// Function call to initialize app
init();
