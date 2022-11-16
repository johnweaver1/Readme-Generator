const fs = require('fs');  
const util = require('util');
const fileWriting = util.promisify(fs.writeFile);
const inquirer =require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project.',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter usage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test cases for your project.',
        name: 'tests',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['Apache License 2.0', 'BSD 3-Clause \'New\' or \'Revised\' license','Eclipse Public License version 2.0','Mozilla Public License 2.0',  
          'BSD 2-Clause \'Simplified\' or \'FreeBSD\' license', 'Common Development and Distribution License','GNU General Public License (GPL)', 
          'GNU Library or \'Lesser\' General Public License (LGPL)', 'MIT license'  ],
    },
    {
        type: 'input',
        message: 'Write your GitHub Username.',
        name: 'Github',
    }, 
    {
        type: 'input',
        message: 'Write your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Write down any questions here',
        name: 'questions'
    }
]);
}

// The function to write the README file. I used async because it allows for a promise which I found useful.
const writeToFile = async (fileName, data) => {
    try{
        await fileWriting(fileName, data);
        console.log('Your README.md has been written!');
    } catch (err) {
        console.log(err);
        console.log('An error has occured. Please try again.');
    }
};

// Function to initilize the app
const init = async () => {
    console.log('Welcome to the README.md generator!');
        try {
            //when user prompts are finished then return answers to answers array
            const selection = await questions();
            //call the function in generateMarkdoen.js file to create the markdown for the readme file
            const markedDown = generateMarkdown.generateMarkdown(selection);
            //call the writeToFile function and pass it the name 'README.MD' and the completed markdown
            writeToFile('README.md', markedDown);
        } catch (err) {
            console.log(err);
            console.log('There was an error with user input');
        }
};

// Function call to initialize app
init();