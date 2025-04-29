/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLen = 0;
  let n = s.length;
  const seen = new Set();
  for (let right = 0; right < n; right++) {
    const element = s[right];
    while (seen.has(element)) {
      seen.delete(s[left]);
      left += 1;
    }
    seen.add(element);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
