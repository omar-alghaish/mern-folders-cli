#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");
require("stylesh");
program
  .version(pkg.version)
  .command("frontend", "Create folders & files structure for frontend")
  .command("backend", "Create folders & files structure for backend")
  .command(
    "fullstack",
    "Create folders & files structure for mern stack"
  )
  .parse(process.argv);