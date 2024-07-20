const chunkArray = (arr, size) => {
  if (arr.length < 0) {
    return [];
  }

  let i = 0;
  const temp = [];
  while (i < arr.length) {
    temp.push(arr.slice(i, i + size));
    i += size;
  }
  return temp;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6], 1));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 4));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 5));
