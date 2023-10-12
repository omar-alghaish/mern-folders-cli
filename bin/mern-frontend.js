const program = require("commander");
const { create } = require("../commands/frontend");

program
  .command("create")
  .description("Create frontend")
  .option("--sass", "Enable Sass")
  .action((options) => {
    create(options);
  });

program.parse(process.argv);
