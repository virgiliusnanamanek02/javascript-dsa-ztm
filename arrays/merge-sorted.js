const mergeSortedArr = function (nums1, m, nums2, n) {
  let i = m - 1; // Last index of nums1
  let j = n - 1; // Indeks terakhir dari nums2
  let k = m + n - 1; // Indeks terakhir dari nums1 setelah penggabungan

  // Mulai dari akhir dan geser ke depan
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Jika elemen-elemen di nums2 masih tersisa, tambahkan mereka ke nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  return nums1;
};

console.log(mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArr([1], 1, [], 0));

const mergeSortedArrOpt = function (nums1, m, nums2, n) {
  let i = m - 1; // Indeks terakhir dari nums1
  let j = n - 1; // Indeks terakhir dari nums2
  let k = m + n - 1; // Indeks terakhir dari nums1 setelah penggabungan

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // Tidak perlu menangani sisa elemen di nums1, karena mereka sudah berada di tempat yang benar.

  // Jika elemen-elemen di nums2 masih tersisa, tambahkan mereka ke nums1 (jika diperlukan)
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  // Kembalikan nums1 yang telah digabungkan (jika diperlukan)
  return nums1;
};

console.log(mergeSortedArrOpt([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArrOpt([1], 1, [1, 2, 0], 2));
