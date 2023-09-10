function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap elemen jika mereka tidak dalam urutan yang benar
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;

        swapped = true;
      }
    }
  } while (swapped);
}

// Contoh penggunaan:
const myArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(myArray);
console.log(myArray);

function bubbleSortOpt(nums) {
  let n = nums.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i < n; i++) {
      if (nums[i - 1] > nums[i]) {
        const temp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = temp;

        swapped = true;
      }
    }
    n -= 1;
  } while (swapped);
}

const myNums = [64, 34, 25, 12, 22, 11, 90];
bubbleSortOpt(myNums);

console.log(myNums);
