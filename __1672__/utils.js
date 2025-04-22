// Benefits of implementing a utils.js file
// 1. Reusability - can be used accross different parts of your app
// 2. Separation of Concerns - keep logic modular and focused
// 3. Easier Testing - individual functions are simpler to test
// 4. Cleaner Main File - reduces clutter and improves readability

// Utility to clean each row
const cleanRow = (rowString) => {
  return (
    rowString
      // Remove brackets
      .replace(/[\[\]]/g, "")
      .split(",")
      // Trim whitespace from each value
      .map((val) => val.trim())
      // Filter out non-numbers
      .filter((val) => !isNaN(val))
      // Convert the rest to numbers
      .map(Number)
  );
};
module.exports = { cleanRow };
