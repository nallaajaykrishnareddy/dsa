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

const sortUsingDutchFlag = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low += 1;
      mid += 1;
    } else if (nums[mid] === 1) {
      mid += 1;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high -= 1;
    }
  }
  return nums;
};

const nums = [2, 0, 1];

// console.log(sort(nums));
console.log(sortUsingDutchFlag(nums));
