const mergeInterval = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (current[1] >= interval[0]) {
      current[1] = Math.max(interval[1], current[1]);
    } else {
      merged.push(current);
      current = interval;
    }
  }

  merged.push(current);

  return merged;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
// const intervals = [
//   [1, 4],
//   [2, 3],
// ];
console.log(mergeInterval(intervals));
