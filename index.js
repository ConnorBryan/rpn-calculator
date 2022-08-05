const { prompt } = require("./prompt");
const config = require("./config");

const CONFIG = {
  QUIT_KEY: "q",
};

async function listenForInput() {
  let input = null;

  while (input !== CONFIG.QUIT_KEY) {
    input = await prompt(config.WELCOME_PROMPT);

    console.log("You input ", input);
  }
}

(async () => {
  await listenForInput();
  console.info(config.EXIT_PROMPT);
  process.exit(0);
})();
