const obj = [
  {
    key: "Sample 1",
    data: "Datal",
  },
  {
    key: "Sample 1",
    data: "Datal",
  },
  {
    key: "Sample 2",
    data: "Data2",
  },
  {
    key: "Sample 1",
    data: "Datal",
  },
  {
    key: "Sample 3",
    data: "Datal",
  },
  { key: "Sample 4", data: "Datal" },
];

const keys = [...new Set(obj.map((b) => b.key))];

let output = {};

keys.forEach((key) => {
  output[key] = obj.filter((o) => o.key === key);
});

console.log(output);

// using inbuilt method
const result = Object.groupBy(obj, ({ key }) => key);

console.log("result", result);
