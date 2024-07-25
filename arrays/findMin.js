const findMin = (nums) => {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
