const { getDomains, getEntities } = require("../../_lib/domain");

const domainPrompt = {
  type: "select",
  name: "domain",
  message: "Domain?",
  choices: getDomains()
};

const entityPrompt = (domain) => ({
  type: "select",
  name: "entity",
  message: "Entity?",
  choices: getEntities(domain)
});

const domainAndEntityPrompt = (prompter) =>
  prompter.prompt(domainPrompt).then(({ domain }) =>
    prompter.prompt(entityPrompt(domain)).then(({ entity }) => ({
      domain,
      entity
    }))
  );

exports.domainPrompt = domainPrompt;
exports.entityPrompt = entityPrompt;
exports.domainAndEntityPrompt = domainAndEntityPrompt;
