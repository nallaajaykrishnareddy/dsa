/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * What is anagram -> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sObj = {};
  for (const char of s) {
    sObj[char] = (sObj[char] || 0) + 1;
  }

  for (const char of t) {
    if (!sObj[char]) {
      return false;
    }
    sObj[char]--;
  }
  return true;
};
