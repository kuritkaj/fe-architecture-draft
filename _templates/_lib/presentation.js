const { getDirectories } = require("./fs");
const path = require("path");

const MODULES_DIR = path.resolve(__dirname, "../../src/presentation/component");

exports.getModules = () => getDirectories(MODULES_DIR);
