import { addition } from "./addition";
import { subtraction } from "./subtraction";
import { multiplication } from "./multiplication";
import { division } from "./division";

const symbolsToOperations = [
  addition,
  subtraction,
  multiplication,
  division,
].reduce((prev, next) => {
  prev[next.symbol] = next.operation;
  return prev;
}, {});

export function isOperatorSymbol(character) {
  return Object.keys(symbolsToOperations).includes(character);
}
