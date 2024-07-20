const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

// const reverseWords1 = (str) => {
//   const len = str.length;
//   let word = "";
//   let result = "";
//   for (let index = len - 1; index >= 0; index--) {
//     if (str[index] !== " ") {
//       word += str[index] + word;
//     } else {
//       if (word.length > 0) {
//         if (result.length > 0) {
//           result += " ";
//         }
//       }
//       result += word;
//       word = "";
//     }
//   }
//   return result;
// };

const reverseWords1 = (str) => {
  const wordsArray = [];
  let counter = 0;
  let prevCount = 0;
  let strLength = str.length;
  let reverse = "";

  for (let i = 0; i < strLength; i++) {
    counter += 1;
    if (str[i] === " ") {
      wordsArray.push(str.slice(prevCount, counter - 1));
      prevCount = counter;
    }
  }
  if (prevCount < strLength) {
    wordsArray.push(str.slice(prevCount, strLength));
  }

  for (let i = wordsArray.length - 1; i >= 0; i--) {
    const element = wordsArray[i];
    reverse += element + " ";
  }

  return reverse;
};

// console.log(reverseWords("Ajay Krishna Reddy"));
// console.log(reverseWords1("Ajay Krishna Reddy"));

// other approach would be

const reverseWordsWithoutBuiltIns = (str) => {
  let currentWord = "";
  const wordsArray = [];
  const length = str.length;

  for (let i = 0; i < length; i++) {
    const char = str[i];
    if (char != " ") {
      currentWord += char;
    } else {
      if (currentWord !== "") {
        wordsArray.push(currentWord);
        currentWord = "";
      }
    }
  }

  if (currentWord !== "") {
    wordsArray.push(currentWord);
  }

  let reverse = "";

  // Build the reversed string by iterating wordsArray backwards
  for (let i = wordsArray.length - 1; i >= 0; i--) {
    reverse += wordsArray[i];

    // Add space between words except before the first word
    if (i > 0) {
      reverse += " ";
    }
  }

  return reverse;
};

console.log(reverseWordsWithoutBuiltIns("Ajay Krishna Reddy"));
