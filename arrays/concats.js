// Given an integer array nums of length n, you want to
// create an array ans of length 2n where ans[i] == nums[i]
// and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

function concatArray(nums) {
  const n = nums.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    ans[i] = ans[i + n] = nums[i];
  }

  return ans;
}

console.log(concatArray([1, 2, 3]));
