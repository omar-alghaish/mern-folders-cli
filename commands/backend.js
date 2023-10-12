const readline = require("readline");
const { success } = require("../utils/messages");
const { addNodeFolders } = require("../utils/addFolders");
const { addNodeFiles } = require("../utils/addFiles");
const { execSync } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const create = (options) => {
  rl.question("Project name: ".color("lime"), (input) => {
    const name = input.trim();

    addNodeFolders(name);
    process.chdir(name);
    execSync(`npm init -y  `, { stdio: "inherit" });
    execSync(`npm pkg set type="module" `, { stdio: "inherit" });

    execSync(
      `npm i cors dotenv express express-async-handler express-rate-limit express-validator jsonwebtoken mongodb mongoose morgan multer nodemailer sharp slugify uuid stylesh`,
      { stdio: "inherit" }
    );
    process.chdir('..')
    addNodeFiles(name);
    success(name);
    process.exit(1);
  });
};

module.exports = { create };
