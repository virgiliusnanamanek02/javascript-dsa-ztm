function productExceptSelf(nums) {
  let output = new Array(nums.length);
  output[0] = 1; // Inisialisasi dengan 1
  let product = 1;

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * product;
    product *= nums[i];
  }

  return output; // Mengembalikan array output
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output yang benar: [24, 12, 8, 6]
