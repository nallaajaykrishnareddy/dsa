function sort(nums) {
  let left = 0,
    mid = 0,
    right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left += 1;
      mid += 1;
    } else if (nums[mid] === 1) {
      mid += 1;
    } else {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right -= 1;
    }
  }
  return nums;
}

const nums = [2, 0, 1];
console.log(sort(nums));
