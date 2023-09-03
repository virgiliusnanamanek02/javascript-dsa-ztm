function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4], 7));

const twoSums = (nums, target) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    for (let j = i + 1; j < nums.length; j++) {
      // O(n)
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result; // O(n^2)
};

// console.log(twoSums([1, 2, 3, 4], 7));
