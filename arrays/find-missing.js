function findMissingNumber(nums) {
  const n = nums.length;
  let total = ((n + 2) * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }

  return total;
}

console.log(findMissingNumber([1, 2, 5, 6, 3, 7, 8]));
