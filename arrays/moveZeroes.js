const moveZeroes = (nums) => {
  //   const temp = [];
  //   for (const num of nums) {
  //     if (num === 0) {
  //       temp.push(num);
  //     } else {
  //       temp.unshift(num);
  //     }
  //   }

  //   Maintain relative order

  //   let lastNonZeroFoundAt = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     const element = nums[i];
  //     if (element !== 0) {
  //       [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
  //       lastNonZeroFoundAt += 1;
  //     }
  //   }

  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i += 1;
    }
    j += 1;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12, 0, 8, 9, 0, 0, 0, 0, 1]));
