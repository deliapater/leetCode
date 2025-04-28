/**
 * @param {number} number
 * @return {number}
 */

const numberOfSteps = (num) => {
  // Initialize a steps counter to 0
  let steps = 0;

  // While num is not equal to 0
  while (num !== 0) {
    // If num is even (num % 2 === 0)
    if (num % 2 === 0) {
      // Divide num by 2
      num = num / 2;
    } else {
      // Subtract 1 from num
      num = num - 1;
    }
    // Increment the steps counter by 1
    steps++;
  }
  // Return the steps counter
  return steps;
};
module.exports = { numberOfSteps };
