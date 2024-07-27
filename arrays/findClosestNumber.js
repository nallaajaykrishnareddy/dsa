const findClosestNumber = (nums) => {
  let closest = nums[0];
  for (const num of nums) {
    if (
      Math.abs(num) < Math.abs(closest) ||
      (Math.abs(num) === Math.abs(closest) && num > closest)
    ) {
      closest = num;
    }
  }

  return closest;
};

console.log(findClosestNumber([-1, -1, 1]));
