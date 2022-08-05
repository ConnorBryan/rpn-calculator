const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((r) => readlineInterface.question(query, r));

exports.prompt = prompt;
