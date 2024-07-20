const integerToRoman = (number) => {
  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";

  for (let i = 0; i < romanValues.length; i++) {
    const value = romanValues[i];
    while (number >= value) {
      number -= value;
      result += romanSymbols[i];
    }
  }

  return result;
};

console.log(integerToRoman(1994));
