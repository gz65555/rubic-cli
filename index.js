const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "template",
      message: "Which one do you want to create",
      type: "list",
      choices: ["typescript-npm-library"]
    },
    {
      name: "name",
      message: "what's your library name?",
      type: "input"
    }
  ])
  .then(answers => {
    console.log(answers);
  });
