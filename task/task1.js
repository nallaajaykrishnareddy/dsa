const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

function compute(obj, a, b, c) {
  let temp = {};
  for (const key in obj) {
    const fnOrObj = obj[key];
    if (typeof fnOrObj === "function") {
      temp[key] = fnOrObj(a, b, c);
    }
    if (typeof fnOrObj === "object") {
      temp[key] = compute(fnOrObj, a, b, c);
    }
  }

  return temp;
}

console.log(compute(input, 1, 1, 1));
//{ A: 3, B: -1, C: 2, D: { E: 3 } }
