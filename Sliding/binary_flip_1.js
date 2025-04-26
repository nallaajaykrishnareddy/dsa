/**
 *
 * @param {Array} numbers
 * @param {number} k
 */

const getCountOf1s = (numbers, k) => {
  let maxZero = 0;
  let i = 0;
  let maxLen = 0;

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] === 0) {
      maxZero += 1;
    }

    while (maxZero > k) {
      if (numbers[i] === 0) {
        maxZero -= 1;
      }
      i += 1;
    }
    maxLen = Math.max(maxZero, j - i + 1);
  }
  return maxLen;
};

const numbers = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0];

console.log(getCountOf1s(numbers, 2));
