const anagramGroups = (words) => {
  const groupMaps = {};
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const elm = words[i];
    const sortedElm = elm.split("").sort().join("");
    if (!groupMaps[sortedElm]) {
      groupMaps[sortedElm] = [];
    }
    groupMaps[sortedElm].push(elm);
  }

  for (let key in groupMaps) {
    result.push(groupMaps[key]);
  }

  return result;
}

console.log(anagramGroups(["listen", "silent", "hello", "world", "act", "cat"]))
