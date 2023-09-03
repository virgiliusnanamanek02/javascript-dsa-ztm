function shuffleArray(nums, n) {
  const result = new Array(2 * n);
  let xIndex = 0;
  let yIndex = n;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result[i] = nums[xIndex];
      xIndex++;
    } else {
      result[i] = nums[yIndex];
      yIndex++;
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6];
const n = arr.length / 2;

console.log(shuffleArray(arr, n));
