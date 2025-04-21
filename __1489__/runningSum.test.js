const { runningSum } = require("./runningSum");

test("runningSum of [1, 2, 3, 4] return [1, 3, 6, 10]", () => {
  expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test("runningSum of [1, 1, 1] returns [1, 2, 3]", () => {
  expect(runningSum([1, 1, 1])).toEqual([1, 2, 3]);
});