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
  let input = await prompt(prompts.welcome);

  while (input !== tokens.quit) {
    input = await prompt(prompts.instructions);

    const entries = input.split(tokens.limiter);
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
