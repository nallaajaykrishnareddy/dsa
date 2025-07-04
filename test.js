const equalPairs = (numbers) => {
  const map = new Map();
  let count = 0;
  const n = numbers.length;

  for (const number of numbers) {
    const key = number.join(",");
    map.set(key, (map.has(key) || 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(numbers[j][i]);
    }
    const key = col.join(",");

    if (map.has(key)) {
      count += map.get(key);
    }
  }

  return count;
};

const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];

console.log(equalPairs(grid));
