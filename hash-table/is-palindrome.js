const isPalindrome = (str) => {
  const map = {};

  if (str.length === 0) {
    return false;
  }

  if (str.length === 1) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let char in map) {
    if (map[char] !== 1) {
      return true;
    }
  }

  return false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("ab"));
