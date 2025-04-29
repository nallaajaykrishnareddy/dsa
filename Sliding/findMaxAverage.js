/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }
  let maxAvg = currSum / k;
  for (let i = k; i < nums.length; i++) {
    currSum += nums[i];
    currSum -= nums[i - k];
    maxAvg = Math.max(maxAvg, currSum / k);
  }
  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
