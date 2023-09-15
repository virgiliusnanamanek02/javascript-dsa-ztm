const mergeHashTables = (hashOne = {}, hashTwo = {}) => {
  for (const key in hashTwo) {
    if (hashTwo.hasOwnProperty(key)) {
      if (hashOne.hasOwnProperty(key)) {
        hashOne[key] += hashTwo[key];
      } else {
        hashOne[key] = hashTwo[key];
      }
    }
  }

  return hashOne;
};

console.log(mergeHashTables({ a: 1, b: 2 }, { b: 3, c: 4 }));
