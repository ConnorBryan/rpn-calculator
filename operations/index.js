const addition = require("./addition");
const subtraction = require("./subtraction");
const multiplication = require("./multiplication");
const division = require("./division");

const operations = [addition, subtraction, multiplication, division].reduce(
  (prev, next) => {
    prev[next.symbol] = next.operation;
    return prev;
  },
  {}
);

module.exports = operations;
