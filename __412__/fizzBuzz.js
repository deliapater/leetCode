/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  // Initialize an empty array called result
  let result = [];

  // For i from 1 to n:
  for (let i = 1; i <= n; i++) {
    // If i is divisible by both 3 and 5:
    if (i % 3 === 0 && i % 5 === 0) {
      // Append "FizzBuzz" to result
      result.push("FizzBuzz");
    }
    // Else if i is divisible by 3:
    else if (i % 3 === 0) {
      // Append "Fizz" to result
      result.push("Fizz");
    }
    // Else if is divisible by 5:
    else if (i % 5 == 0) {
      // Append "Buzz" to result
      result.push("Buzz");
    } else {
      // Convert i to string and append to result
      result.push(i.toString());
    }
  }
  return result;
};

module.exports = fizzBuzz;
