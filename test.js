const romanToNumberMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (str) => {
  const n = str.length;
  let number = 0;
  let i = 0;

  while (i < n) {
    const char = str[i];
    const nextChar = str[i + 1];

    if (i + 1 < n && romanToNumberMap[char] < romanToNumberMap[nextChar]) {
      number -= romanToNumberMap[char];
    } else {
      number += romanToNumberMap[char];
    }

    i += 1;
  }

  return number;
};

// Example usage:
console.log(romanToInt("MCMXCIV")); // Output: 1994
