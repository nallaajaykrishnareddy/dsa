function getCount(nums) {
  let maxLen = 0;
  let count = 0;
  for (const num of nums) {
    if (num === 1) {
      count += 1;
      maxLen = Math.max(count, maxLen);
    } else {
      count = 0;
    }
  }
  return maxLen;
}

const prices = [1, 1, 1, 0, 1, 1, 1, 1];

console.log(getCount(prices));
