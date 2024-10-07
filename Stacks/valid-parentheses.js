/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
  const tracker = [];
  const mapper = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (const char of str) {
    if (mapper[char]) {
      const poppedOutValue = tracker.pop();
      if (poppedOutValue !== mapper[char]) {
        return false;
      }
    } else {
      tracker.push(char);
    }
  }
  return tracker.length === 0;
};

{
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
