const prompt = require("../helpers/prompt");
const calculate = require("./core");

const tokens = {
  quit: "q",
  limiter: " ",
};

const prompts = {
  welcome: "Welcome to the RPN calculator.",
  instructions:
    "Enter numbers or operators ('+', '-', '*', '/'), either one at a time or space-limited (i.e. 5 5 +).",
  exit: "Thanks for using the RPN calculator.",
  errors: "Calculation attempt resulted in the following errors: ",
};

async function cliInterface() {
  let response = null;
  const inputs = [];

  console.log(prompts.welcome);

  while (response !== tokens.quit) {
    response = await prompt(prompts.instructions);

    inputs.push(response);

    const fullInput = inputs.join(tokens.limiter);
    const entries = fullInput.split(tokens.limiter);
    const { result, errors } = calculate(entries);

    if (errors.length === 0) {
      console.log(`Total: ${result}`);
    } else {
      console.log(prompts.errors, errors.join(`\n`));
    }
  }

  console.log(prompts.exit);
}

module.exports = cliInterface;
