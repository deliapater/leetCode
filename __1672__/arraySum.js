// 2D array accounts. Where each row represents a customer, and each element in the row is the ammount they have in bank.
// Goal: Find the maximum sum of any row - that is, the wealthiest customer.

/**
 * @param {number[][]} accounts
 * @return {number}
 */

// 1. Read the .txt file
// 2. Parse each line into an array
// 3. Remove invalid (non-numb) entries
// 4. Convert valid entries to numbers
// 5. Push each cleaned array into a 2D array
// 6. Pass the final 2D array to maximumWealth()

const path = require("path");
const fs = require("fs");
const { cleanRow } = require("./utils");

// Define  maximumWealth
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

const loadAndCleanData = (filename) => {
  try {
    // Ensure that you are always targeting the rigjt file location
    const filePath = path.join(__dirname, filename);
    // Reads the file at filePath synchronously, the script waits until the file is fully read
    const content = fs.readFileSync(filePath, "utf-8");
    // Removes any extra empty lines or spaces at the beginning or end of the file
    const lines = content.trim().split("\n");
    // Loops through every line and passes it into cleanRow
    return lines.map(cleanRow);
  } catch (err) {
    console.error(`Error reading file: ${filename}`, err);
    return [];
  }
};

// Example usage
if (require.main === module) {
  const accounts = loadAndCleanData("data.txt");
  console.log("Clean accounts:", accounts);
  console.log("Max wealth:", maximumWealth(accounts));
}

module.exports = { maximumWealth };
