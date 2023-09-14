const isValidParentheses = (s) => {
  const stack = [];
  const parenthesesMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (parenthesesMap.has(char)) {
      // Ini adalah karakter kurung tutup
      const topElement = stack.length === 0 ? "#" : stack.pop();

      if (topElement !== parenthesesMap.get(char)) {
        return false;
      }
    } else {
      // Ini adalah karakter kurung buka, tambahkan ke tumpukan
      stack.push(char);
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses("{}")); // true
// console.log(isValidParentheses("{]")); // false
// console.log(isValidParentheses("()[]{}")); // true
