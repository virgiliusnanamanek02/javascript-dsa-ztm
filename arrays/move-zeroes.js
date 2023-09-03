function moveZeroes(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      console.log(nums);
      nums.push(0);
      console.log(nums);
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
