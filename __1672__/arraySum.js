// 2D array accounts. Where each row represents a customer, and each element in the row is the ammount they have in bank.
// Goal: Find the maximum sum of any row - that is, the wealthiest customer.

// Option 1: Implementing nested loops;
// the first one will loop through customers and the second one through their bank accounts
// and the check the sum of each row

/**
 * @param {number[][]} accounts
 * @return {number}
 */
// const maximumWealth = (accounts) => {
//     let maxWealth = 0;

//     for (let customer of accounts) {
//         let sum = 0;

//         for (let bankAmount of customer) {
//             sum += bankAmount;
//         }

//         if (sum > maxWealth) {
//             maxWealth = sum;
//         }
//     }

//     return maxWealth;
// }

// Option 2: Using .reduce()

const maximumWealth = (accounts) => {
  // Goes through each customer
  return accounts.reduce((max, customer) => {
    // Calculates the total wealth for that customer.
    const sum = customer.reduce((acc, balance) => acc + balance, 0);
    // Compares it with the current max wealth
    return Math.max(max, sum);
    // Initial value for max is 0
  }, 0);
};

module.exports = { maximumWealth };
