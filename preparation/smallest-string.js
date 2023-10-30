var getSmallestString = function(n, k) {
  const result = new Array(n).fill('a'); // Initialize the result string with 'a's.

  k -= n; // We have already used 'n' characters.

  for (let i = n - 1; i >= 0; i--) {
    if (k >= 25) {
      result[i] = 'z';
      k -= 25;
    } else {
      result[i] = String.fromCharCode(97 + k); // 97 is the ASCII code for 'a'.
      break; // No need to continue, as we've used up all available value.
    }
  }

  return result.join('');
};

// Example usage:
console.log(getSmallestString(3, 27)); // Output: "aay"
console.log(getSmallestString(5, 73)); // Output: "aaszz"

