const firstOcc = (numbers, target) => {
  const len = numbers.length;
  let low = 0,
    high = len - 1,
    result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (numbers[mid] === target) {
      high = mid - 1;
      result = mid;
    } else if (target < numbers[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
const target = 10;
console.log(firstOcc(numbers, target));
