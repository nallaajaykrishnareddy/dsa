const productExceptSelf = (nums) => {
  const n = nums.length;

  const output = Array.from(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  console.log(output);

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }
  return output;
};

const nums = [1, 2, 3, 4];
const output = productExceptSelf(nums);
console.log(output);
