var diffWaysToCompute = function(expression) {
  const results = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === '+' || char === '-' || char === '*') {
      const left = diffWaysToCompute(expression.substring(0, i));
      const right = diffWaysToCompute(expression.substring(i + 1));

      for (const l of left) {
        for (const r of right) {
          if (char === '+') {
            results.push(l + r);
          } else if (char === '-') {
            results.push(l - r);
          } else if (char === '*') {
            results.push(l * r);
          }
        }
      }
    }
  }

  if (results.length === 0) {
    results.push(parseInt(expression));
  }

  return results;
};

// Example usage:
console.log(diffWaysToCompute("2-1-1"));    // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5"));  // Output: [-34, -14, -10, -10, 10]

