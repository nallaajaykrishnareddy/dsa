function isSortedAndRotated(nums) {
  let rotationCount = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      rotationCount++;
    }
  }

  // A valid sorted and rotated array can have at most one rotation point
  return rotationCount <= 1;
}

// Example usage
const nums1 = [3, 4, 5, 1, 2]; // True
const nums2 = [2, 1, 3, 4, 5]; // False
const nums3 = [1, 2, 3, 4, 5]; // True (sorted but not rotated)
const nums4 = [1, 1, 1]; // True (all elements the same)
const nums5 = [3, 4, 2, 1, 5]; // False

console.log(isSortedAndRotated(nums1)); // Output: true
// console.log(isSortedAndRotated(nums2)); // Output: false
// console.log(isSortedAndRotated(nums3)); // Output: true
// console.log(isSortedAndRotated(nums4)); // Output: true
// console.log(isSortedAndRotated(nums5)); // Output: false
