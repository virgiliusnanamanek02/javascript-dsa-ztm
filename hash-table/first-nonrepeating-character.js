const firstNonRepeatingCharacter = (str) => {
  const wordCount = {};

  for (let i = 0; i < str.length; i++) {
    const elm = str[i];
    if (!wordCount[elm]) {
      wordCount[elm] = 1;
    } else {
      wordCount[elm]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const elm = str[i];
    if (wordCount[elm] === 1) {
      return elm;
    }
  }

  return null;
}

console.log(firstNonRepeatingCharacter("programming"));
console.log(firstNonRepeatingCharacter("aabb"));
console.log(firstNonRepeatingCharacter("abbc"));
