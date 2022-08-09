const { expect } = require("chai");
const subtraction = require("./subtraction");

describe("Subtraction (*)", () => {
  const { operation: subtract } = subtraction;

  it("handles basic input", () => {
    const a = 96;
    const b = 15;
    const c = -6;

    expect(subtract(a, b)).to.equal(81);
    expect(subtract(b, c)).to.equal(21);
  });
});
