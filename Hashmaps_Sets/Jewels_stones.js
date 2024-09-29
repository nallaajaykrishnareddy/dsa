/**
 You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
 Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels);

  let count = 0;
  for (const stone of stones) {
    if (jewelsSet.has(stone)) {
      count += 1;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
