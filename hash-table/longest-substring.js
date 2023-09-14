function lengthOfLongestSubstring(str) {
  const charIndex = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (charIndex[char] !== undefined && charIndex[char] >= start) {
      // Jika karakter telah muncul dalam substring saat ini,
      // perbarui pointer start ke indeks setelah kemunculan karakter tersebut.

      start = charIndex[char] + 1;
      console.log(charIndex[char]);
    }
    // Perbarui indeks karakter dalam hash table
    charIndex[char] = end;

    // Hitung panjang substring saat ini dan perbarui panjang terpanjang jika diperlukan
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log("Longest:", lengthOfLongestSubstring("abcabcbbc"));
console.log("Longest", lengthOfLongestSubstring("abcdabcdaababcd"));
