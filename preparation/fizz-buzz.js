function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

// Optized

function fizzBuzzOptimized(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
            ? "Buzz"
            : i.toString()
    );
  }
  return result;
}



function numberToWords(num) {
  if (num === 0) {
    return "zero";
  }

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["", "thousand", "million", "billion"];

  let result = "";
  let index = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[index] + " " + result;
    }
    num = Math.floor(num / 1000);
    index++;
  }

  return result.trim();

  function helper(num) {
    if (num === 0) {
      return "";
    } else if (num < 10) {
      return ones[num] + " ";
    } else if (num < 20) {
      return teens[num - 10] + " ";
    } else {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      return tens[ten] + " " + ones[one] + " ";
    }
  }
}

// Example usage:
console.log(numberToWords(200)); // Output: "two hundred"
