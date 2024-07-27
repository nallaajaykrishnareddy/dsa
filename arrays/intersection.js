const intersection = (arr1, arr2) => {
  const temp = arr1.filter((element) => arr2.includes(element));
  return [...new Set(temp)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
