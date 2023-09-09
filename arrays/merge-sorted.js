function mergeSortedArr(firstArr, secArr) {
  let lengthArr = 0;
  let firstIdxArr = 0;
  let secIdxArr = 0;
  let result = [];

  const totalLengthArr = firstArr.length + secArr.length;

  while (lengthArr < totalLengthArr) {
    let isFirstArrDepleted = firstIdxArr >= firstArr.length;
    let isSecArrDepleted = secIdxArr >= secArr.length;
    if (
      !isFirstArrDepleted &&
      (isSecArrDepleted || firstArr[firstIdxArr] < secArr[secIdxArr])
    ) {
      result[lengthArr] = firstArr[firstIdxArr];
      firstIdxArr++;
    } else {
      result[lengthArr] = secArr[secIdxArr];
      secIdxArr++;
    }

    lengthArr++;
  }

  return result;
}

console.log(mergeSortedArr([1, 3, 5, 7], [2, 4, 6]));
