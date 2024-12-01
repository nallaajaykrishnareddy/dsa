/**
 *
 * @param {number[]} numbers
 * @returns
 */
const search = (numbers, target) => {
  const len = numbers.length;
  let low = 0;
  let high = len - 1;
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (numbers[mid] === target) {
      result = mid;
      low = mid + 1;
    }
    if (target < numbers[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
};

const numbers = [1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
console.log(search(numbers, 6));
