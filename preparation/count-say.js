var countAndSay = function(n) {
  if (n === 1) {
    return "1"; // Base case
  }

  const previous = countAndSay(n - 1);
  let result = "";
  let count = 1;

  for (let i = 0; i < previous.length; i++) {
    if (previous[i] === previous[i + 1]) {
      count++;
    } else {
      result += count + previous[i];
      count = 1;
    }
  }

  return result;
};

// Example usage:
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(4)); // Output: "1211"

