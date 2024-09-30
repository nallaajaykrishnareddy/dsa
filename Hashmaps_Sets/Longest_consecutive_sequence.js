/**
 *  Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *  Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxStreak = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let currentStreak = 1;
      let currentNumber = num;

      while (set.has(currentNumber + 1)) {
        currentNumber = currentNumber + 1;
        currentStreak += 1;
      }
      maxStreak = Math.max(maxStreak, currentStreak);
    }
  }
  return maxStreak;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
