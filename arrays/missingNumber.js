const missingNumber = (nums) => {
  const elementsTotal = nums.reduce((prev, curr) => (prev += curr), 0);
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  return totalSum - elementsTotal;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
