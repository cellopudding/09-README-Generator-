const fs = require('fs')

const path = require('path')

const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',

      //make more
        },
    {
        type: 'input',
        name: 'github',
        
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application, please?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation insitructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will this application be used for?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Were there any contributors?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any testing frameworks?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponse)=>{
       console.log('generateReadMe')
       writeToFile('README.md', generateMarkdown({...userResponse}))
    })
}

// Function call to initialize app
init();







