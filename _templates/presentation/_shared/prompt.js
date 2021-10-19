const { getModules } = require("../../_lib/presentation");

exports.modulePrompt = {
  type: "select",
  name: "module",
  message: "Which module?",
  choices: getModules()
};
