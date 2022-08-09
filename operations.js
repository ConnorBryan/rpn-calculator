const add = (a, b) => b + a;

const subtract = (a, b) => b - a;

const multiply = (a, b) => b * a;

const divide = (a, b) => b / a;

const operatorsToOperations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

const isOperator = (entry) =>
  Object.keys(operatorsToOperations).includes(entry);

module.exports = {
  operatorsToOperations,
  isOperator,
};
