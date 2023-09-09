function twoSum(nums, target) {
  const sumMap = {};

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (sumMap.hasOwnProperty(comp)) {
      return [sumMap[comp], i];
    }

    sumMap[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([1, 2, 3, 4], 7));
