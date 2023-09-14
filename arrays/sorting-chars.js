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

function shortingCharsOpt(chars) {
  if (chars.length <= 1) {
    return chars;
  }

  let pivot = chars[0];
  let left = [];
  let right = [];

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] < pivot) {
      left.push(chars[i]);
    } else {
      right.push(chars[i]);
    }
  }

  return [...shortingCharsOpt(left), pivot, ...shortingCharsOpt(right)];
}

console.log(shortingCharsOpt(["r", "b", "z", "j"]));
