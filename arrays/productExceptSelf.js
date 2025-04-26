const moveZeroes = (nums) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12, 0, 8, 9, 0, 0, 0, 0, 1]));
