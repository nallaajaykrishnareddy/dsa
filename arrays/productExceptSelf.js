function productExceptSelf(nums) {
  const n = nums.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const result = new Array(n).fill(0);

  // Calculate left products
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Calculate right products and result
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

// Alternate solution
const productExceptSelf1 = (arr) => {
  const n = arr.length;
  const output = Array.from(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }
  return output;
};

// Example usage:
const nums = [1, 2, 3, 4];
const output = productExceptSelf(nums);
const output1 = productExceptSelf1(nums);
console.log(output);
console.log(output1);
