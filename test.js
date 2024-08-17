var summaryRanges = function (nums) {
  const ans = [];

  let i = 0;
  while (i < nums.length) {
    let start = nums[i];
    while (nums[i + 1] === nums[i] + 1) {
      i += 1;
    }

    if (start !== nums[i]) {
      ans.push(start + "->" + nums[i]);
    } else {
      ans.push(nums[i].toString());
    }

    i += 1;
  }

  return ans;
};

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
