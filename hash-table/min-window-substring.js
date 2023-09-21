function minWindowSubstring(s, t) {
  const requiredChars = new Map();
  const windowChars = new Map();
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minSubstring = "";

  // Menghitung jumlah karakter yang diperlukan dari string t
  for (const char of t) {
    requiredChars.set(char, (requiredChars.get(char) || 0) + 1);
  }

  // Jumlah karakter yang diperlukan
  let requiredCount = requiredChars.size;

  while (right < s.length) {
    const char = s[right];
    // Memperbarui tabel hash windowChars
    windowChars.set(char, (windowChars.get(char) || 0) + 1);

    // Jika karakter saat ini memenuhi jumlah yang diperlukan
    if (
      requiredChars.has(char) &&
      windowChars.get(char) === requiredChars.get(char)
    ) {
      requiredCount--;
    }

    // Coba memperpendek jendela
    while (left <= right && requiredCount === 0) {
      const currentLength = right - left + 1;
      // Jika panjang jendela saat ini lebih pendek dari yang telah ditemukan sebelumnya
      if (currentLength < minLength) {
        minLength = currentLength;
        minSubstring = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      // Memperbarui tabel hash windowChars
      windowChars.set(leftChar, windowChars.get(leftChar) - 1);

      // Jika karakter saat ini diperlukan, dan jendela tidak lagi memenuhi jumlah yang diperlukan
      if (
        requiredChars.has(leftChar) &&
        windowChars.get(leftChar) < requiredChars.get(leftChar)
      ) {
        requiredCount++;
      }

      left++;
    }

    right++;
  }

  return minSubstring;
}

// Contoh penggunaan:
const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindowSubstring(s, t);
console.log(result); // Output: "BANC"
