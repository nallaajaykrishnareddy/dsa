const reverseOfArray = (nums, right, left) => {
  let i = right;
  let j = left;
  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i = i + 1;
    j = j - 1;
  }
  return nums;
};

const rotateArray = (nums, k) => {
  let n = nums.length;
  //   k = n % k;
  console.log(k);
  reverseOfArray(nums, 0, n - 1);
  reverseOfArray(nums, 0, k - 1);
  reverseOfArray(nums, k, n - 1);

  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 5));
