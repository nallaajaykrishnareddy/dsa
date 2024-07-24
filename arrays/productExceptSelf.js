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

  console.log(left);

  // Calculate right products and result
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  console.log(right);

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const output = productExceptSelf(nums);
console.log(output); // Output: [24, 12, 8, 6]
