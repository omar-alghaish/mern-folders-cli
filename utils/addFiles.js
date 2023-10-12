const fs = require("fs");
const {
  indexFile,
  appFile,
  scssmain,
  abstractsScss,
  layoutScss,
  utilitiesScss,
} = require("./reactFiles");
const {
  nodeIndex,
  serverConfig,
  dbConfig,
  errorMiddleware,
  limiter,
  uploadImage,
  validatorMiddle,
  apiError,
  apiFeatures,
  sendEmail,
  dotenv,
  morgan,
  configEnv,
  routesIndex,
} = require("./nodeFiles");

const addFile = (path, content) => {
  fs.writeFileSync(path, content, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File created and content written successfully.");
    }
  });
};

const addReactFiles = (name, sass) => {
  addFile(`${name}/src/index.jsx`, indexFile);
  addFile(`${name}/src/App.jsx`, appFile);
  if (sass) {
    addFile(`${name}/src/sass/style.scss`, scssmain);

    addFile(`${name}/src/sass/abstracts/_index.scss`, abstractsScss);
    addFile(`${name}/src/sass/abstracts/_variables.scss`, " ");
    addFile(`${name}/src/sass/abstracts/_media-query`, " ");
    addFile(`${name}/src/sass/abstracts/_colors.scss`, " ");

    addFile(`${name}/src/sass/layout/_index.scss`, layoutScss);
    addFile(`${name}/src/sass/layout/_header.scss`, " ");
    addFile(`${name}/src/sass/layout/_sidebar.scss`, " ");
    addFile(`${name}/src/sass/layout/_footer.scss`, " ");

    addFile(`${name}/src/sass/pages/_index.scss`, " ");
    addFile(`${name}/src/sass/themes/_index.scss`, " ");
    addFile(`${name}/src/sass/components/_index.scss`, " ");

    addFile(`${name}/src/sass/utilities/_index.scss`, utilitiesScss);
    addFile(`${name}/src/sass/utilities/_main.scss`, " ");
    addFile(`${name}/src/sass/utilities/_container.scss`, " ");
  }
};

const addNodeFiles = (name) => {
  addFile(`${name}/index.js`, nodeIndex);
  addFile(`${name}/configs/server.js`, serverConfig);
  addFile(`${name}/configs/dotenv.js`, dotenv);
  addFile(`${name}/configs/morgan.js`, morgan);
  addFile(`${name}/config.env`, configEnv);

  addFile(`${name}/configs/database.js`, dbConfig);
  addFile(`${name}/middlewares/error.middleware.js`, errorMiddleware);
  addFile(`${name}/middlewares/validatorMiddleware.js`, validatorMiddle);
  addFile(`${name}/utils/apiError.js`, apiError);
  addFile(`${name}/routes/index.js`, routesIndex);



};
module.exports = { addFile, addReactFiles, addNodeFiles };
