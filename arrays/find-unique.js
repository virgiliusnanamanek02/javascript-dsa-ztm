function findInteger(nums) {
  const numCount = new Map();

  for (const num of nums) {
    const absNum = Math.abs(num);
    if (numCount.has(absNum)) {
      numCount.set(absNum, numCount.get(absNum) + 1);
    } else {
      numCount.set(absNum, 1);
    }
  }

  for (const [num, count] of numCount) {
    if (count === 1) {
      const foundNum = nums.find((element) => Math.abs(element) === num);
      if (foundNum !== undefined) {
        return foundNum;
      }
    }
  }

  return null;
}

const arr1 = [1, -1, 2, -2, 3];
console.log(findInteger(arr1)); // Output: 3, expected output: 3

const arr2 = [-3, 1, 2, 3, -1, -4, -2];
console.log(findInteger(arr2)); // Output: -4, expected output: -4

const arr3 = [1, -1, 2, -2, 3, 3];
console.log(findInteger(arr3)); // Output: null Output, expected output: 3
