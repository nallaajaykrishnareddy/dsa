const findDuplicate = (nums) => {
  const set = new Set();
  const duplicates = [];
  for (const num of nums) {
    if (set.has(num) && duplicates.includes(num)) {
      duplicates.push(num);
    } else {
      set.add(num);
    }
  }
  return duplicates;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
