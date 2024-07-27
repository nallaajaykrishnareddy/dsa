const mergeAlternately = (word1, word2) => {
  let i = 0;
  let j = 0;
  let temp = "";
  const n1 = word1.length;
  const n2 = word2.length;
  while (i < n1 && j < n2) {
    temp += word1[i];
    temp += word2[j];
    i += 1;
    j += 1;
  }

  if (n1 !== i) {
    temp += word1.slice(i, n1);
  }

  if (n2 !== j) {
    temp += word2.slice(j, n2);
  }
  return temp;
};

const word1 = "ab";
const word2 = "pqrs";

console.log(mergeAlternately(word1, word2));
