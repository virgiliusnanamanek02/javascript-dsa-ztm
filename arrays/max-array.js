function maxValArray(nums) {
  let maxValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }

  return maxValue;
}

console.log(maxValArray([3, 7, 2, 8, 6, 9, 20])); // 20
