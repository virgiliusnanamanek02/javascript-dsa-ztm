const isPalindromeNumber = (num) => {
  const str = num.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindromeNumber(123));
console.log(isPalindromeNumber(1221));
