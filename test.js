const romanToNumber = (str) => {
  const romanToNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const currVal = romanToNumberMap[str[i]];
    const nextVal = romanToNumberMap[str[i + 1]];
    if (currVal < nextVal) {
      sum -= currVal;
      sum += nextVal;
      i += 1;
    } else {
      sum += currVal;
    }
  }
  return sum;
};

console.log(romanToNumber("III"));
console.log(romanToNumber("LVIII"));
console.log(romanToNumber("IV"));
console.log(romanToNumber("VI"));
console.log(romanToNumber("MCMXCIV"));
