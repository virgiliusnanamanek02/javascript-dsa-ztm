function findMissingNumber(nums) {
  const n = nums.length;
  let total = ((n + 1) / 2) * n;

  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }

  return total;
}

console.log(findMissingNumber([0, 1, 2, 5, 6, 3, 7, 8]));
console.log(findMissingNumber([0, 1]));
