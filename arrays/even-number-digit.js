const evenNumberOfDigits = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const digitCount = countDigits(nums[i]);
    if (digitCount % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
};

function countDigits(number) {
  let count = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

console.log(
  evenNumberOfDigits([42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]),
);

const evenNumberOfDigitsOpt = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if ((Math.abs(nums[i]) + "").length % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
};

console.log(
  evenNumberOfDigitsOpt([42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]),
);
