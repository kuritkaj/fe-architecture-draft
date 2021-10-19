const fs = require("fs");
const path = require("path");

exports.getDirectories = (dir) =>
  fs
    .readdirSync(dir, {
      withFileTypes: true
    })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

exports.getFileNamesWithoutExt = (dir) =>
  fs
    .readdirSync(dir, {
      withFileTypes: true
    })
    .filter((item) => !item.isDirectory())
    .map((item) => path.basename(item.name, path.extname(item.name)));
