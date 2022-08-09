const { prompt } = require("./prompt");
const config = require("./config");
const { operatorsToOperations, isOperator } = require("./operations");

async function listenForInput() {
  let input = null;
  let values = [];

  console.info(config.prompts.WELCOME);

  while (input !== config.QUIT_KEY) {
    input = await prompt(config.prompts.INSTRUCTIONS);

    const entries = input.split(config.tokens.LIMITER);

    for (const entry of entries) {
      const parsed = parseInt(entry, 10);

      if (!isNaN(parsed)) {
        // Entry was a number, add to stack.
        values.push(parsed);
      } else if (isOperator(entry)) {
        if (values.length >= 2) {
          const operandA = values.pop();
          const operandB = values.pop();
          const operation = operatorsToOperations[entry];
          const result = operation(operandA, operandB);

          values.push(result);
        } else {
          throw new Error("Not enough values to perform an operation");
        }
      } else {
        throw new Error(
          `Invalid input: ${entry} is neither a number nor an operation`
        );
      }
    }

    console.log(parseFloat(last(values)));
  }
}

(async () => {
  await listenForInput();
  console.info(config.EXIT_PROMPT);
  process.exit(0);
})();

function last(array) {
  return array[array.length - 1];
}
