function runningSum(nums) {
  // Initializes an empty array to store the running sums
  let result = [];
  // Sets a sum variable to start from 0
  let sum = 0;

  // For loop that goes from index 0 to the end of the nums array
  for (let i = 0; i < nums.length; i++) {
    // Adds the current number to be running sum
    sum += nums[i];
    // Adds the current running sum to the result array
    result.push(sum);
  }
  // Returns result
  return result;
}

// Exports function for testing purposes
module.exports = { runningSum };
