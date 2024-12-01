const searchInRotatedArray = (arr, target) => {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      //left side sorted
      if (arr[low] <= target && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //right side sorted
      if (arr[mid] < target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
