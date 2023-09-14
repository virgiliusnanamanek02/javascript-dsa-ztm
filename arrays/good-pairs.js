// Given an array of integers nums, return the number of
// good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function goodPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(goodPairs([1, 1, 2, 3, 2]));
console.log(goodPairs([1, 1, 1]));
console.log(goodPairs([1, 2, 3]));
console.log(goodPairs([1, 2, 3, 1, 1, 3]));

const goodPairsOpt = (nums) => {
  const numsMap = {};
  let count = 0;

  for (const num of nums) {
    if (numsMap[num]) {
      count += numsMap[num];
      numsMap[num]++;
    } else {
      numsMap[num] = 1;
    }
  }

  return count;
};

console.log(goodPairsOpt([1, 1, 2, 3, 2]));
console.log(goodPairsOpt([1, 1, 1]));
console.log(goodPairsOpt([1, 2, 3]));
console.log(goodPairsOpt([1, 2, 3, 1, 1, 3]));
