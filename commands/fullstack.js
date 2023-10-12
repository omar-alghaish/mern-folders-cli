const readline = require("readline");
const { execSync } = require("child_process");
const filesToDelete = require("../utils/fileToDeleteReact");
const { success } = require("../utils/messages");
const { addReactFiles } = require("../utils/addFiles");
const { addReactFolders, addReactFoldersSass } = require("../utils/addFolders");
const { addNodeFolders } = require("../utils/addFolders");
const { addNodeFiles } = require("../utils/addFiles");

require("stylesh");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const create = (options) => {
  if (options.sass) {
    const name = "client";
    execSync(`npx create-react-app ${name}`, { stdio: "inherit" });
    filesToDelete(name);
    addReactFoldersSass(name);
    addReactFiles(name, options?.sass);
  } else {
    const name = "client";
    execSync(`npx create-react-app ${name}`, { stdio: "inherit" });
    filesToDelete(name);
    addReactFolders(name);
    addReactFiles(name, options?.sass);
  }

  //

  const name = "server";

  addNodeFolders(name);
  process.chdir(name);
  execSync(`npm init -y  `, { stdio: "inherit" });
  execSync(`npm pkg set type="module" `, { stdio: "inherit" });

  execSync(
    `npm i cors dotenv express express-async-handler express-rate-limit express-validator mongodb mongoose morgan slugify stylesh`,
    { stdio: "inherit" }
  );
  process.chdir("..");
  addNodeFiles(name);
  success(name);
  process.exit(1);
};


module.exports = {create}