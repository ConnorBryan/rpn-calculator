const operations = require("../operations");

/**
 * @desc Core calculator implementation is a stack-based calculation approach.
 * @param {string[]} entries - A series of characters to be reverse-polish-notarized (i.e. ['5', '5', '-'])
 */
function calculate(entries) {
  const errors = [];
  const values = [];

  let index = 0;
  for (const entry of entries) {
    if (isBasicNumber(entry)) {
      values.push(parseInt(entry, 10));
    } else if (isOperationSymbol(entry)) {
      if (values.length >= 2) {
        const operandB = values.pop();
        const operandA = values.pop();
        const operation = operations[entry];
        const result = operation(operandA, operandB);

        values.push(result);
      } else {
        errors.push(new Error("Not enough values to perform an operation"));
      }
    } else {
      errors.push(
        new Error(
          `Invalid input at index ${index}: ${entry} is neither a number nor an operation symbol`
        )
      );
    }

    index++;
  }

  return {
    result: parseFloat(last(values)),
    errors,
  };
}

module.exports = calculate;

function isBasicNumber(entry) {
  const parsed = parseInt(entry, 10);
  return typeof parsed === "number" && !isNaN(parsed);
}

function isOperationSymbol(character) {
  return Object.keys(operations).includes(character);
}

function last(array) {
  return array[array.length - 1];
}
