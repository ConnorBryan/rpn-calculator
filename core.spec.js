const { expect } = require("chai");
const calculate = require("./core");

describe("Core Calculation Functionality", () => {
  it("should handle a collection of valid symbols", () => {
    const entriesA = ["5", "8", "+"];
    expect(calculate(entriesA).result).to.equal(13);

    const entriesB = ["5", "5", "5", "8", "+", "+", "-"];
    expect(calculate(entriesB).result).to.equal(-13);

    const entriesC = ["-3", "-2", "*", "5", "+"];
    expect(calculate(entriesC).result).to.equal(11);

    const entriesD = ["5", "9", "1", "-", "/"];
    expect(calculate(entriesD).result).to.equal(0.625);
  });

  describe("Gracefully handling a collection of invalid symbols", () => {
    it("should handle the case where there are not enough values before an operation is attempted", () => {
      const badEntries = ["5", "+"];
      const { result, errors } = calculate(badEntries);

      expect(result).to.be.NaN;
      expect(errors).to.have.length(1);
      expect(errors[0].toString()).to.equal(
        "Error: Not enough values to perform an operation"
      );
    });

    it("should handle the case where invalid inputs are provided", () => {
      const badEntries = ["5", "!", "12", "?"];
      const { result, errors } = calculate(badEntries);

      expect(result).to.be.NaN;
      expect(errors).to.have.length(2);
      expect(errors[0].toString()).to.equal(
        "Error: Invalid input at index 1: ! is neither a number nor an operation symbol"
      );
      expect(errors[1].toString()).to.equal(
        "Error: Invalid input at index 3: ? is neither a number nor an operation symbol"
      );
    });
  });
});
