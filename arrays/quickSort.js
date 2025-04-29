const quickSort = (numbers) => {
  const n = numbers.length;
  if (n <= 1) {
    return numbers;
  }
  const PE = numbers[n - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < n - 1; i++) {
    const element = numbers[i];
    if (element < PE) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [...quickSort(left), PE, ...quickSort(right)];
};
const nums = [2, 0, 1, 3, 2, 4, 1, 0, 10];

console.log(quickSort(nums));
