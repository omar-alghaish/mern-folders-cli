require("stylesh")
const success = (name) =>{
    console.log(
        `folders structure created<>project name: ${name.color(
          "lime"
        )}`.createRoundedBorder("lime")
      );
}

module.exports = {success}