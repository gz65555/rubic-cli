const fs = require("fs");
const path = require("path");

module.exports = createLibrary = libName => {
  console.log(libName);
  // const exist = fs.existsSync('.');
  const fromPath = path.join(__dirname, "./templates/library");
  const targetPath = path.join("./", libName);
  console.log(targetPath);
  console.log()
  return;
  copydir.sync(fromPath, "/my/target/path", {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true // cover file when exists, default is true
  });
  console.log(__dirname);
  console.log(files);
};
