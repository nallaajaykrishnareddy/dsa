/**
 *
 * @param {Array} numbers
 */
const quickSort = (numbers) => {
  const len = numbers.length;
  if (len <= 1) {
    return numbers;
  }

  const left = [];
  const right = [];
  const pivotElement = numbers[len - 1];
  for (let i = 0; i < len - 1; i++) {
    const element = numbers[i];
    if (element < pivotElement) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [...quickSort(left), pivotElement, ...quickSort(right)];
};

let arr = [5, 3, 8, 4, 2];
console.log(quickSort(arr)); // Output: [2, 3, 4, 5, 8]
