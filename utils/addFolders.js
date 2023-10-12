const fs = require("fs");

const addReactFolders = (name, sass) => {
  const folders = [
    `${name}/src/components`,
    `${name}/src/components/common`,
    `${name}/src/components/layout`,
    `${name}/src/redux`,
    `${name}/src/redux/features`,
    `${name}/src/hooks`,
    `${name}/src/pages`,
    `${name}/src/utils`,
    `${name}/src/configs`,
    `${name}/src/assets`,
    `${name}/src/assets/images`,
    `${name}/src/routes`,
    `${name}/src/api`,
    `${name}/src/api/client`,
    `${name}/src/api/configs`,
    `${name}/src/api/modules`,
    `${name}/src/style`,
    `${name}/src/style/components`,
    `${name}/src/style/pages`,
    `${name}/src/style/components/common`,
    `${name}/src/style/components/layout`,
  ];
  const foldersSass = [
    `${name}/src/components`,
    `${name}/src/components/common`,
    `${name}/src/components/layout`,
    `${name}/src/redux`,
    `${name}/src/redux/features`,
    `${name}/src/hooks`,
    `${name}/src/pages`,
    `${name}/src/utils`,
    `${name}/src/configs`,
    `${name}/src/assets`,
    `${name}/src/assets/images`,
    `${name}/src/routes`,
    `${name}/src/api`,
    `${name}/src/api/client`,
    `${name}/src/api/configs`,
    `${name}/src/api/modules`,
    `${name}/src/sass`,
    `${name}/src/sass/abstracts`,
    `${name}/src/sass/utilities`,
    `${name}/src/sass/components`,
    `${name}/src/sass/layout`,
    `${name}/src/sass/pages`,
    `${name}/src/sass/themes`,
  ];
  folders.forEach((folder) => {
    fs.mkdirSync(folder);
  });
};

const addReactFoldersSass = (name, sass) => {
  const foldersSass = [
    `${name}/src/components`,
    `${name}/src/components/common`,
    `${name}/src/components/layout`,
    `${name}/src/redux`,
    `${name}/src/redux/features`,
    `${name}/src/hooks`,
    `${name}/src/pages`,
    `${name}/src/utils`,
    `${name}/src/configs`,
    `${name}/src/assets`,
    `${name}/src/assets/images`,
    `${name}/src/routes`,
    `${name}/src/api`,
    `${name}/src/api/client`,
    `${name}/src/api/configs`,
    `${name}/src/api/modules`,
    `${name}/src/sass`,
    `${name}/src/sass/abstracts`,
    `${name}/src/sass/utilities`,
    `${name}/src/sass/components`,
    `${name}/src/sass/layout`,
    `${name}/src/sass/pages`,
    `${name}/src/sass/themes`,
  ];
  foldersSass.forEach((folder) => {
    fs.mkdirSync(folder);
  });
};


addNodeFolders =(name)=>{
const folders = [
  `${name}`,
  `${name}/utils`,
  `${name}/utils/validators`,
  `${name}/controlles`,
  `${name}/middlewares`,
  `${name}/routes`,
  `${name}/models`,
  `${name}/upload`,
  `${name}/configs`,
  `${name}/handlers`,
]

folders.forEach((folder)=>{
  fs.mkdirSync(folder)
})
}

module.exports = { addReactFolders, addReactFoldersSass, addNodeFolders };
