const positiveCumulativeSum = (nums) => {
  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > 0) {
      result.push(sum);
    }
  }

  return result;
};

console.log(positiveCumulativeSum([1, -2, 3, 4, -6]));
console.log(positiveCumulativeSum([1, -1, -1, -1, 1]));
