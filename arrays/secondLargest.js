const findSecondLargest = (arr) => {
  const n = arr.length;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if ((secondLargest < arr[i]) & (arr[i] < largest)) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [12, 35, 1, 10, 34, 1];
const arr1 = [10, 5, 10];

console.log(findSecondLargest(arr1));
