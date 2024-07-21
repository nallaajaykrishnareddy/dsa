const isValid = (str) => {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const seen = [];

  for (const char of str) {
    if (map[char]) {
      if (seen.pop() !== map[char]) {
        return false;
      }
    } else {
      seen.push(char);
    }
  }
  return seen.length === 0;
};

console.log(isValid("()[]{}"));
