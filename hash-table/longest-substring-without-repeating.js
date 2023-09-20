
function longestSubstringWithoutRepeating(str) {
  // Inisialisasi variabel-variabel
  let start = 0;
  let end = 0;
  let maxSubstringLength = 0;
  const charIndexMap = new Map();

  // Iterasi melalui string
  while (end < str.length) {
    const currentChar = str[end];

    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
      // Jika karakter sudah pernah muncul dan masih dalam substring saat ini
      start = charIndexMap.get(currentChar) + 1;
    }

    // Update indeks terakhir munculnya karakter
    charIndexMap.set(currentChar, end);

    // Hitung panjang substring saat ini
    const currentSubstringLength = end - start + 1;

    // Perbarui panjang maksimum jika ditemukan yang lebih panjang
    maxSubstringLength = Math.max(maxSubstringLength, currentSubstringLength);

    // Perpanjang substring dengan menggerakkan end ke kanan
    end++;
  }

  return maxSubstringLength;
}


console.log(longestSubstringWithoutRepeating("abcabcbb"));
