const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "template",
      message: "Which one do you want to create",
      type: "list",
      choices: ["typescript-npm-library", "umi project"]
    }
  ])
  .then(answers => {
    console.log(answers);
  });
