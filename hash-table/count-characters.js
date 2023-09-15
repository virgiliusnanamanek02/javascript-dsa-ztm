const countCharacters = (str) => {
  const charsMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charsMap.hasOwnProperty(str[i])) {
      charsMap[str[i]]++;
    } else {
      charsMap[str[i]] = 1;
    }
  }

  return charsMap;
};

console.log(countCharacters("Hellooo"));
