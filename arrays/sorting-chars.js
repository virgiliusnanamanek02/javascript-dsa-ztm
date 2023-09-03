function shortingChars(chars) {
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        // Check if current element is greater than next element
        const temp = chars[i]; // strore current element into temp
        chars[i] = chars[j]; // swab current element with next element
        chars[j] = temp; // assign temp to next element
      }
    }
  }

  return chars;
}

console.log(shortingChars(["r", "b", "z", "j"]));
