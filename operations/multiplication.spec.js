const { expect } = require("chai");
const multiplication = require("./multiplication");

describe("Multiplication (*)", () => {
  const { operation: multiply } = multiplication;

  it("handles basic input", () => {
    const a = 8;
    const b = 12.5;
    const c = -6;

    expect(multiply(a, b)).to.equal(100);
    expect(multiply(b, c)).to.equal(-75);
  });
});
