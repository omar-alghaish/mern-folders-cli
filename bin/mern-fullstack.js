const program = require("commander");
const { create } = require("../commands/fullstack");

program
  .command("create")
  .description("Create fullstack")
  .option("--sass", "Enable Sass")
  .action((options) => {
    create(options);
  });

program.parse(process.argv);
