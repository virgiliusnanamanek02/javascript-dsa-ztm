function romanToInt(str){
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const currentRoman = romans[str[i]];
    const nextRoman = romans[str[i+1]];

    if (nextRoman && currentRoman < nextRoman) {
      result += nextRoman - currentRoman;
      i++; // Skip the next character since it's already been processed
    } else {
      result += currentRoman;
    }
  }

  return result;
}

console.log(romanToInt("IV"));
