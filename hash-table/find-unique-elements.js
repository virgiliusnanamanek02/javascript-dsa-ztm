const findUniqueElements = (nums) => {
  const numsMap = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.hasOwnProperty(nums[i])) {
      numsMap[nums[i]]++;
    } else {
      numsMap[nums[i]] = 1;
    }
  }

  for (const key in numsMap) {
    if (numsMap.hasOwnProperty(key)) {
      if (numsMap[key] === 1) {
        result.push(parseInt(key));
      }
    }
  }

  return result;
};


console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueElements([2, 2, 1, 1, 3]));
