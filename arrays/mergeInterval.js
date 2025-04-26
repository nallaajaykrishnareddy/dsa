/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (const interval of intervals) {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }

  return result;
};
//[[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
