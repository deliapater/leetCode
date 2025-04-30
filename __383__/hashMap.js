/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  // Create a has map (or object) to count characters in magazine
  const letterCounts = {};

  // For each character in magazine:
  for (let char of magazine) {
    // Increment its count in the hash map
    letterCounts[char] = (letterCounts[char] || 0) + 1;
  }

  // For each character in ransomNote:
  for (let char of ransomNote) {
    // If the character is not in the hash map its count is 0:
    if (!letterCounts[char]) {
      // Return false (not enough letters)
      return false;
    }
    // Otherwise:
    // Decrement the count of that character in the hash map
    letterCounts[char]--;
  }

  // If all characters in ransomNote are matched:
  return true;
};

module.exports = { canConstruct };