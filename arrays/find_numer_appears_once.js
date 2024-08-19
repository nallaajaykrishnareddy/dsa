function getNumber(nums) {
  //   const n = nums.length;
  //   for (let i = 0; i < n; i++) {
  //     let count = 0;
  //     const curr = nums[i];
  //     for (let j = 0; j < n; j++) {
  //       if (curr === nums[j]) {
  //         count += 1;
  //       }
  //       if (count === 1) {
  //         return arr[j];
  //       }
  //     }
  //   }

  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  for (const [num, count] of map) {
    if (count === 1) {
      return num;
    }
  }
}

const arr = [4, 1, 2, 1, 2];
console.log(getNumber(arr));
