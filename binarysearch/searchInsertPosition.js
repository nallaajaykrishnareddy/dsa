const searchInsertPosition = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // Output: 1
