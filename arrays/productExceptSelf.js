const product = (numbers) => {
  const result = [];
  const n = numbers.length;
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < n; i++) {
    const element = numbers[i];
    result[i] = prefix;
    prefix *= element;
  }

  for (let i = n - 1; i >= 0; i--) {
    const element = numbers[i];
    result[i] *= suffix;
    suffix *= element;
  }

  return result;
};

console.log(product([1, 2, 3, 4]));
console.log(product([1, 1, 1, 2]));
