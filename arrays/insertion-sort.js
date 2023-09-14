const insertionSort = (nums) => {
  let holePosition = 0;
  let valueToInsert = 0;

  for (let i = 0; i < nums.length; i++) {
    /* select value to be inserted */
    valueToInsert = nums[i];
    holePosition = i;
    /*locate hole position for the element to be inserted */
    while (holePosition > 0 && nums[holePosition - 1] > valueToInsert) {
      nums[holePosition] = nums[holePosition - 1];
      holePosition = holePosition - 1;
    }
    /* insert the number at hole position */
    nums[holePosition] = valueToInsert;
  }

  return nums;
};

const randomArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(insertionSort([...randomArray]));
