const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

const reverseWords1 = (str) => {
  const len = str.length;
  let word = "";
  let result = "";
  for (let index = len - 1; index >= 0; index--) {
    if (str[index] !== " ") {
      word += str[index] + word;
    } else {
      if (word.length > 0) {
        if (result.length > 0) {
          result += " ";
        }
      }
      result += word;
      word = "";
    }
  }
  return result;
};

// console.log(reverseWords("Ajay Krishna Reddy"));
console.log(reverseWords1("Ajay Krishna Reddy"));
