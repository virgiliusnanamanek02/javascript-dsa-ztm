function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n; // Jika k lebih besar dari panjang array.
  const result = [];

  for (let i = 0; i < n; i++) {
    console.log(`${i} + ${n} - ${k} % ${n} = ${(i + n - k) % n} `);
    const newIndex = (i + n - k) % n; // Hitung index baru setelah rotasi
    result.push(nums[newIndex]);
  }

  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
