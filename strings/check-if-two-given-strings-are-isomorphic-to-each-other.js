function areIsomorphic(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1.charAt(i);
    const char2 = str2.charAt(i);

    if (map1.has(char1)) {
      if (map1.get(char1) !== char2) {
        return false;
      }
    } else {
      map1.set(char1, char2);
    }

    if (map2.has(char2)) {
      if (map2.get(char2) !== char1) {
        return false;
      }
    } else {
      map2.set(char2, char1);
    }
  }

  return true;
}

console.log(areIsomorphic("abc", "xyz"));
