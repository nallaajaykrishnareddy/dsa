Array.prototype.groupBy = function (fn) {
  if (typeof fn !== "function") {
    throw new Error("Not a valid callback function");
  }

  const results = {};
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const element = this[i];
    const callbackfnValue = fn(element);
    if (!results.hasOwnProperty(callbackfnValue)) {
      results[callbackfnValue.toString()] = [];
    }
    results[callbackfnValue].push(element);
  }
  return results;
};

const array1 = [{ id: "1" }, { id: "2" }, { id: "1" }];

const re = array1.groupBy((item) => {
  return item.id;
});

console.log(re);
