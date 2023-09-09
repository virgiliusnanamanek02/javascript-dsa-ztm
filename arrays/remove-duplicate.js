function removeDuplicate(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(nums[i]);
    }
  }

  return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicateOpt(nums) {
  const uniqueSet = new Set();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueSet.has(nums[i])) {
      uniqueSet.add(nums[i]);
      result.push(nums[i]);
    }
  }

  return result;
}

console.log(removeDuplicateOpt([1, 2, 2, 3, 4, 4, 5]));
