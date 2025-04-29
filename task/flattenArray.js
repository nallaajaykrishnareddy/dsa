const flattenArray = (numbers, depth = Infinity) => {
  const result = [];
  console.log(Infinity);

  numbers.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...flattenArray(element, depth - 1));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(flattenArray([1, [2], [4], [4, [[5], [9]]]]));
