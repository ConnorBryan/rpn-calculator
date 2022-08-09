const chai = require("chai");
const { expect } = chai;
const almost = require("chai-almost");
const addition = require("./addition");

chai.use(almost());

describe("Addition (+)", () => {
  const { operation: add } = addition;

  it("handles basic input", () => {
    const a = 5;
    const b = -6;
    const c = 13.2;

    expect(add(a, b)).to.equal(-1);
    expect(add(a, c)).to.almost.equal(18.2);
    expect(add(b, c)).to.almost.equal(7.2);
  });
});
