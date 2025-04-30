const { canConstruct } = require("./hashMap.js");

describe("canConstruct", () => {
  test('should return false when ransomNote = "a", magazine = "b"', () => {
    expect(canConstruct("a", "b")).toBe(false);
  });
  test('should return false when ransomNote == "aa", magazine = "ab"', () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });
  test('should return true when ransomNote = "aa", magazine = "aab"', () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
  test("should return true for empty ransomNote", () => {
    expect(canConstruct("", "abc")).toBe(true);
  });
  test("should return false for empty magazine and non-empty ransomNote", () => {
    expect(canConstruct("a", "")).toBe(false);
  });
});