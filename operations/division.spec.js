const { expect } = require("chai");
const division = require("./division");

describe("Division (/)", () => {
  const { operation: divide } = division;

  it("handles basic input", () => {
    const a = 60;
    const b = 12;
    const c = -4;

    expect(divide(a, b)).to.equal(5);
    expect(divide(b, c)).to.equal(-3);
  });
});
