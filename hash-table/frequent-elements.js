const findMostFrequentElement = (nums) => {
  const numsMap = {};
  let mostFrequentElement;
  let highestFrequency = 0;

  for (const num of nums) {
    if (numsMap.hasOwnProperty(num)) {
      numsMap[num]++;
    } else {
      numsMap[num] = 1;
    }
  }

  for (const num in numsMap) {
    if (numsMap.hasOwnProperty(num)) {
      if (numsMap[num] > highestFrequency) {
        highestFrequency = numsMap[num];
        mostFrequentElement = num;
      }
    }
  }

  return mostFrequentElement;
};

console.log(findMostFrequentElement([1, 2, 2, 3, 4, 4, 4, 5]));
