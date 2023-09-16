const findMissingElements = (numsOne, numsTwo) => {
  const numsMap = {};
  let result = [];

  for (const num of numsTwo) {
    if (numsMap.hasOwnProperty(num)) {
      numsMap[num]++;
    } else {
      numsMap[num] = 1;
    }
  }

  for (const num of numsOne) {
    if (numsMap.hasOwnProperty(num)) {
      if (numsMap[num] > 0) {
        numsMap[num]--;
      } else {
        result.push(num);
      }
    } else {
      result.push(num);
    }
  }

  return result;
};

console.log(findMissingElements([1, 2, 3, 4, 5], [1, 3, 5]));
console.log(findMissingElements([1, 2, 3], [1, 2]));
