function plusMinus(arr) {
  let min = 0;
  let plus = 0;
  let zero = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      min++;
    } else if (arr[i] > 0) {
      plus++;
    } else {
      zero++;
    }
  }

 const positiveFraction = plus / n;
  const negativeFraction = min / n;
  const zeroFraction = zero / n;

  const result = [
    parseFloat(positiveFraction.toFixed(6)),
    parseFloat(negativeFraction.toFixed(6)),
    parseFloat(zeroFraction.toFixed(6))
  ];

  return result; //embalikan array dengan angka desimal
}

const result = plusMinus([-4, 3, -9, 0, 4, 1]);
console.log(result); // Mencetak array angka desimal

