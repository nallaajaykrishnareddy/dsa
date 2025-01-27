/**
 *
 * @param {string} str1
 * @param {string} str2
 * @param {number} k
 */
const areKAnagrams = (str1, str2, k) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    map1.set(char1, (map1.get(char1) || 0) + 1);
    map2.set(char2, (map2.get(char2) || 0) + 1);
  }

  let difference = 0;

  for (const [key, count1] of map1.entries()) {
    const count2 = map2.get(key) || 0;
    difference += Math.abs(count1 - count2);
  }

  return difference <= k;
};

console.log(areKAnagrams("abc", "cab", 1)); // true (1 change needed: swap 'a' and 'c')
console.log(areKAnagrams("abc", "xyz", 3)); // true (3 changes needed: replace 'a' with 'x', 'b' with 'y', and 'c' with 'z')
console.log(areKAnagrams("abc", "def", 1)); // false (more than 1 change needed)
console.log(areKAnagrams("abc", "abcd", 1)); // false (lengths are different)
