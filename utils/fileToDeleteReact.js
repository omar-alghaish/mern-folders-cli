const fs = require("fs");
const path = require("path");
require("stylesh");

const filesToDelete = (name) => {
  const filesArray = [
    `${name}/src/app.js`,
    `${name}/src/index.js`,
    `${name}/src/logo.svg`,
    `${name}/src/App.test.js`,
    `${name}/src/reportWebVitals.js`,
    `${name}/src/setupTests.js`,
    `${name}/src/App.css`,
    `${name}/src/index.css`,
    `${name}/public/logo192.png`,
    `${name}/public/logo512.png`,
    `${name}/public/favicon.ico`,
    `${name}/public/robots.txt`,
  ];

  filesArray.forEach((file) => {
    fs.unlinkSync(file);
    console.log(`${"Deleted: ".color("lime")}${file}`);
  });
};

module.exports = filesToDelete;
