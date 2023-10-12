const program = require("commander");
const { create } = require("../commands/backend");

program
  .command("create")
  .description("Create backend")
  .action((options) => {
    create(options);
  });

program.parse(process.argv);
