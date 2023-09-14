const cumulativeSum = (nums) => {
  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }

  return result;
};

console.log(cumulativeSum([1, 2, 3, 4]));
console.log(cumulativeSum([1, 1, 1, 1, 1]));
