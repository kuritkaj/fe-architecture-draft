const { getDirectories, getFileNamesWithoutExt } = require("./fs");
const path = require("path");

const STRUCT_DIR = path.resolve(__dirname, "../../src/domain/struct");
const getDomainDir = (domain) => path.resolve(STRUCT_DIR, domain);

exports.getDomains = () => getDirectories(STRUCT_DIR);
exports.getEntities = (domain) => getFileNamesWithoutExt(getDomainDir(domain));
