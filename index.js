// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of the project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Any special installation requirements?: ",
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Academic",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributers to this project?"
        },
        {
            type: "input",
            name: "questions",
            message: "What to do if issues arise? "
        },
        {
            type: "input",
            name: "username",
            message: "Input GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Input contact email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Generated README.md complete!');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();