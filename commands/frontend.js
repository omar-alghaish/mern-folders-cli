const readline = require("readline");
const { execSync } = require("child_process");
const filesToDelete = require("../utils/fileToDeleteReact");
const { success } = require("../utils/messages");
const { addReactFiles } = require("../utils/addFiles");
const { addReactFolders, addReactFoldersSass } = require("../utils/addFolders");

require("stylesh");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const create = (options) => {
  if (options.sass) {
    rl.question("Project name: ".color("lime"), (input) => {
      const name = input.trim();
      execSync(`npx create-react-app ${name}`, { stdio: "inherit" });
      filesToDelete(name);
      addReactFoldersSass(name);
      addReactFiles(name, options?.sass);
      success(name);
      process.exit(1);
    });
  } else {
    rl.question("Project name: ".color("lime"), (input) => {
      const name = input.trim();
      execSync(`npx create-react-app ${name}`, { stdio: "inherit" });
      filesToDelete(name);
      addReactFolders(name);
      addReactFiles(name, options?.sass);
      success(name);
      process.exit(1);
    });
  }
};

module.exports = { create };
