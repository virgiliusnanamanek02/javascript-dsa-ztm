function isPanagram(string) {
  string = string.toLowerCase();

  const allLetters = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (/a-z/.test(char)) {
      allLetters.add(char);
    }
  }

  return allLetters.size === 26;
}
