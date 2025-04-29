Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function")
    throw new Error("not a callback function");

  const arr = this;
  const n = arr.length;

  if (n === 0 && initialValue === undefined) {
    throw new TypeError("Reduce with no initial value and empty arr");
  }

  let acc;
  let startIndex;

  if (initialValue === undefined) {
    acc = arr[0];
    startIndex = 1;
  } else {
    acc = initialValue;
    startIndex = 0;
  }

  for (let i = startIndex; i < n; i++) {
    if (arr[i]) {
      acc = callback(acc, arr[i]);
    }
  }
  return acc;
};

console.log([1, 2, 3, ,].myReduce((acc, val) => acc + val, 0));
console.log([].myReduce((acc, val) => acc + val, 5));
console.log([].myReduce((acc, val) => acc + val));
