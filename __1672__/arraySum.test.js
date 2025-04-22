const { maximumWealth } = require("./arraySum");

describe("maximumWealth", () => {
  test("returns 6 for two customers with equal wealth", () => {
    const accounts = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    expect(maximumWealth(accounts)).toBe(6);
  });

  test("returns 0 for an empty array", () => {
    expect(maximumWealth([])).toBe(0);
  });

  test("returns 10 for multiple customers with varying wealth", () => {
    const accounts = [
      [1, 5],
      [7, 3],
      [3, 5],
    ];
    expect(maximumWealth(accounts)).toBe(10);
  });

  test("returns 17 for customers with different account balances", () => {
    const accounts = [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ];
    expect(maximumWealth(accounts)).toBe(17);
  });
});
