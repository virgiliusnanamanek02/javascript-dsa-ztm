const findsDuplicates = (nums) => {
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
      if (numsMap[key] % 2 === 0) {
        result.push(parseInt(key));
      }
    }
  }

  return result;
};

console.log(findsDuplicates([1, 2, 2, 3, 4, 4, 5])); // [2,4]

const findsDuplicatesOpt = (nums) => {
  const seen = new Set();
  const result = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      result.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(result);
};

console.log(findsDuplicatesOpt([1, 2, 2, 3, 4, 4, 5]));
