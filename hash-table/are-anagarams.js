const areAnagrams = (strOne, strTwo) => {
  const firstStr = strOne.replace(/\s/, "").toLowerCase();
  const secondStr = strTwo.replace(/\s/, "").toLowerCase();

  const charCount = {};

  // Length check

  if (firstStr.length !== secondStr.length) {
    return false;
  }

  for (const char of firstStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of secondStr) {
    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("not", "tn"));
