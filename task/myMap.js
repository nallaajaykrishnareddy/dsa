Array.prototype.myMap = function (callback, thisArg) {
  console.log(thisArg);
  const newArray = [];
  const length = this.length;

  for (let i = 0; i < length; i++) {
    let value = callback(this[i], i, this); // call with proper arguments
    newArray.push(value);
  }

  return newArray;
};

const arr = [1, 2, 3];

console.log(arr.myMap((a) => a * 2));
