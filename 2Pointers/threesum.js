// const threeSumBrute = (numbers) => {
//   const n = numbers.length;
//   const result = new Set();

//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         const sum = numbers[i] + numbers[j] + numbers[k];
//         if (sum === 0) {
//           const triplet = [numbers[i], numbers[j], numbers[k]].sort(
//             (a, b) => a - b
//           );
//           result.add(JSON.stringify(triplet));
//         }
//       }
//     }
//   }
//   return Array.from(result).map(JSON.parse);
// };

// console.log(threeSumBrute([-1, 0, 1, 2, -1, -4]));

const threeSum = (numbers) => {
  const result = [];
  const n = numbers.length;

  numbers.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        result.push([numbers[i], numbers[left], numbers[right]]);
        while (left < right && numbers[left] === numbers[left + 1]) left++;
        while (left < right && numbers[right] === numbers[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
