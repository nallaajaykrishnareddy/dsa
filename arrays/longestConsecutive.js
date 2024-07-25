const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let maxStreak = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentStreak = 1;
      let currentNum = num;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      maxStreak = Math.max(maxStreak, currentStreak);
    }
  }

  return maxStreak;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
