/**
  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  You can use each character in text at most once. Return the maximum number of instances that can be formed.
    Example 1:
    Input: text = "nlaebolko"
    Output: 1

    Example 2:
    Input: text = "loonbalxballpoon"
    Output: 2

    Example 3:
    Input: text = "leetcode"
    Output: 0
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const balloonObj = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (const char of text) {
    if (balloonObj.hasOwnProperty(char)) {
      balloonObj[char] += 1;
    }
  }

  const { a, b, l, o, n } = balloonObj;

  return Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n);
};

console.log(maxNumberOfBalloons("nlaebolko")); // Output: 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // Output: 2
console.log(maxNumberOfBalloons("leetcode")); // Output: 0
