const hasPairWithSum = (data, sum) => {
  let comp = new Set();

  for (let i = 0; i < data.length; i++) {
    if (comp.has(data[i])) {
      return true;
    }

    comp.add(sum - data[i])
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8));
console.log(hasPairWithSum([1, 2, 4, 2], 6));
