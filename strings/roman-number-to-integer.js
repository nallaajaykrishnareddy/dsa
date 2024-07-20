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
  let length = str.length;

  for (let i = 0; i < length; i++) {
    const char = str[i];
    const currentValue = romanToNumberMap[char];
    if (i + 1 < length) {
      const nextChar = str[i + 1];
      const nextValue = romanToNumberMap[nextChar];
      if (currentValue < nextValue) {
        sum -= currentValue;
      } else {
        sum += currentValue;
      }
    } else {
      sum += currentValue;
    }
  }

  return sum;
};

// console.log(romanToNumber("III"));
// console.log(romanToNumber("LVIII"));
console.log(romanToNumber("MCMXCIV"));
