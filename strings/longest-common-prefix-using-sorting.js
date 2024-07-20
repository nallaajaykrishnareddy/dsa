const longestCommonPrefix = (strs) => {
  const minLength = Math.min(...strs.map((str) => str.length));

  for (const str of strs) {
    for (let index = 0; index < minLength; index++) {
      if (str[index] !== strs[0][index]) {
        return str.substring(0, index);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flow", "flower", "flight"]));
console.log(longestCommonPrefix(["cat", "cata", "cat"]));
