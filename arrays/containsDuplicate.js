const containsDuplicate = (nums) => {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
};

console.log(containsDuplicate([1, 2, 4, 5, 3, 1, 2, 1]));
