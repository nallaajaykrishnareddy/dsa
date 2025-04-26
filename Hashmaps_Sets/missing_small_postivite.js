const missingSmallestPositive = (numbers) => {
  const seen = new Set();

  for (const number of numbers) {
    if (number > 0) {
      seen.add(number);
    }
  }

  let missing = 1;
  while (seen.has(missing)) {
    missing += 1;
  }
  return missing;
};

console.log(missingSmallestPositive([1, 3, 6, 4, 1, 2]));
console.log(missingSmallestPositive([1, 2, 3]));
console.log(missingSmallestPositive([-1, -3]));
