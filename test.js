const sort = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      }
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];

console.log(sort(nums));
