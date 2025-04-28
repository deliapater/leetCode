const { numberOfSteps } = require("./numberOfSteps");

describe("numberOfSteps", () => {
  it("should return 6 for input 14", () => {
    expect(numberOfSteps(14)).toBe(6);
  });

  it("should return 4 for input 8", () => {
    expect(numberOfSteps(8)).toBe(4);
  });

  it("should return 12 for input 123", () => {
    expect(numberOfSteps(123)).toBe(12);
  });

  it("should handle a large number correctly", () => {
    expect(numberOfSteps(10000000)).toBeGreaterThan(0);
  });
});