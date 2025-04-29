const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

const groupBy = (arr, key) => {
  return arr.reduce((prev, curr) => {
    if (!prev[curr[key]]) {
      prev[curr[key]] = [curr];
    } else {
      prev[curr[key]] = [...prev[curr[key]], curr];
    }

    return prev;
  }, {});
};

console.log(groupBy(users, "age"));
