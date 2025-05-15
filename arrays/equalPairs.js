/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  const map = new Map();
  let count = 0;

  for (const g of grid) {
    const key = g.join(",");
    map.set(key, (map.get(key) || 0) + 1);
  }

  console.log(map);

  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(grid[j][i]);
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
