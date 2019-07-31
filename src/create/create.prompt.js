const inquirer = require("inquirer");
const createLibrary = require("./create.library.template");

const createFuncMap = new Map();

createFuncMap.set("typescript-npm-library", createLibrary);

module.exports = createPrompt = () => {
  return inquirer
    .prompt([
      {
        name: "template",
        message: "Which one do you want to create",
        type: "list",
        choices: [...createFuncMap.keys()]
      },
      {
        name: "name",
        message: "what's your library name?",
        type: "input"
      }
    ])
    .then(answers => {
      const { template, name } = answers;
      console.log(template);
      const func = createFuncMap.get(template);
      func(name);
    });
};
