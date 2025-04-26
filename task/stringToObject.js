const stringToObject = (str, val) => {
  const keys = str.split(".");
  let result = {};
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = {};
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = val;
  return result;
};

const output = stringToObject("a.b.c", "someValue");
console.log(output);
