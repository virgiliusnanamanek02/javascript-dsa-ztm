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


var countAndSayOpt = function(n) {
  if (n === 1) {
    return "1"; // Base case
  }

  let result = "1"; // Start with the base case

  for (let i = 2; i <= n; i++) {
    let newResult = "";
    let count = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        count++;
      } else {
        newResult += count + result[j];
        count = 1;
      }
    }

    result = newResult;
  }

  return result;
};

console.log(countAndSayOpt(5));