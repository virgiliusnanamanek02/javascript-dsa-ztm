function reverseArray(nums) {
  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(nums[i]);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray([1, 2, 3, 4, 5]));

// Optimize

function reverseArrOpt(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }

  return nums;
}

console.log(reverseArrOpt([1, 2, 3, 4, 5]));
