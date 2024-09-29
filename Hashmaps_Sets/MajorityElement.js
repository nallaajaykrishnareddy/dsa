/**
 * Majority Element
 
    Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Example 1:
    Input: nums = [3,2,3]
    Output: 3


    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const requiredAppears = len / 2;

  for (const [key, value] of map) {
    if (value > requiredAppears) {
      return key;
    }
  }
  return 0;
};

// Boyer-Moore Voting Algorithm:

const majorityElement1 = (nums) => {
  let candidate = null;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};

console.log(majorityElement1([2, 2, 1, 1, 1, 2, 2]));
