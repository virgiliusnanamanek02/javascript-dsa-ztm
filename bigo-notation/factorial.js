const factorial = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }

  if (n < 2) {
    return 1;
  }

  memo[n] = n * factorial(n - 1, memo);

  return memo[n];
};

console.log(factorial(50));
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(2));
