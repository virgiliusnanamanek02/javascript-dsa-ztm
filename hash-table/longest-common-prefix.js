// ["flower", "flow", "flight"]) -> "fl"
// ["dog", "racecar", "car"]) -> ""

function longestCommonPrefix(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix([["dog", "racecar", "car"]]));


function longestCommonPrefixOpt(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

console.log(longestCommonPrefixOpt(["flower", "flow", "flight"]));
console.log(longestCommonPrefixOpt(["dog", "racecar", "car"]));
