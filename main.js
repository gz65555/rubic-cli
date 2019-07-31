#!/usr/bin/env node

const program = require("commander");
const createPrompt = require("./src/create/create.prompt")

program
  .command("create")
  .alias("c")
  .description("create a project")
  .action(options => {
    createPrompt().then(() => {

    });
    //   console.log(`~~~~~~~~~~`)
  });
// console.log("hello cli");
program.parse(process.argv);