/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const n = nums.length;
  let maxSum = 0;
  let currSum = 0;
  let i = 0;
  const seen = new Set();
  for (let j = 0; j < n; j++) {
    const element = nums[j];

    while (seen.has(element)) {
      seen.delete(nums[i]);
      currSum -= nums[i];
      i += 1;
    }

    seen.add(element);
    currSum += element;

    if (j - i + 1 === k) {
      maxSum = Math.max(maxSum, currSum);
      seen.delete(nums[i]);
      currSum -= nums[i];
      i += 1;
    }
  }

  return maxSum;
};

function maximumSubarraySum1(numbers, k) {
  let maxSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const window = numbers.slice(i, i + k);

    const set = new Set(window);
    console.log(set);

    if (set.size === k) {
      const currentSum = window.reduce((sum, val) => sum + val, 0);
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
console.log(maximumSubarraySum1([1, 5, 4, 2, 9, 9, 9], 3));
