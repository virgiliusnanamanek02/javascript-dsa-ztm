const findPairsWithSum = (nums, target) => {
  const pairsMap = {};
  let result = [];

  for (const num of nums) {
    const temp = target - num;
    if (pairsMap.hasOwnProperty(temp)) {
      result.push([pairsMap[temp], num]);
    }

    pairsMap[num] = num;
  }

  return result;
};

console.log(findPairsWithSum([1, 2, 3, 4, 5], 5));
