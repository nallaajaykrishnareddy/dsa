function longestSubArrayWithSumK(nums, k) {
  //   let maxLength = 0;
  //   const n = nums.length;
  //   for (let i = 0; i < n; i++) {
  //     let currSum = 0;
  //     for (let j = i; j < n; j++) {
  //       currSum += nums[j];
  //       if (currSum === k) {
  //         maxLength = Math.max(maxLength, j - i + 1);
  //       }
  //     }
  //   }
  //   return maxLength;

  let maxLength = 0;
  const n = nums.length;
  const map = new Map();
  let currSum = 0;
  for (let i = 0; i < n; i++) {
    currSum += nums[i];

    if (currSum === k) {
      maxLength = i + 1;
    }

    if (map.has(currSum - k)) {
      maxLength = Math.max(maxLength, i - map.get(currSum - k));
    }

    if (!map.has(currSum)) {
      map.set(currSum, i);
    }
  }
  return maxLength;
}

const array = [2, 3, 5, 1, 9];
console.log(longestSubArrayWithSumK(array, 10));
