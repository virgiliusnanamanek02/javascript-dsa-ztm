function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray([1, 2, 3, 4, 5]);

// The Big O Notation for this function is O(n * n) --> Because we nested two loops

// Rule 4: Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// The Big O Notation for this function is O(n + n^2) --> Because we have two different inputs

// Rule 5: Amortized Time

function doubleArray(array) {
    array.forEach(function (item) {
        array.push(item);
    });
}

console.log(doubleArray([1, 2, 3, 4, 5]));


// Rule 6: Space Complexity
//

function tripleArray(array) {

  
}
