var getSmallestString = function(n, k) {
  const result = new Array(n).fill('a'); // Initialize the result string with 'a's.

  k -= n; // We have already used 'n' characters.

  for (let i = n - 1; i >= 0; i--) { // Start from the end of the string because
    // we need to fill the remaining characters.
    if (k >= 25) { // 25 is the number of characters we can use.
      result[i] = 'z'; // Fill with 'z's
      k -= 25; // Reduce the number of characters we can use.
    } else { // We can use all the characters.
      result[i] = String.fromCharCode(97 + k); // 97 is the ASCII code for 'a'.
      break; // No need to continue, as we've used up all available value.
    }
  }

  return result.join('');
};

// Example usage:
console.log(getSmallestString(3, 27)); // Output: "aay"
console.log(getSmallestString(5, 73)); // Output: "aaszz"
