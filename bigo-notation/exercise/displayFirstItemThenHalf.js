function displayFirstItemThenHalf(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]); // O(n/2) --> Because while loop only run a half of items length
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi'); // O(100) --> Because for loops only run 100 items
    }
}


// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n + 1) --> Only care about how the line move as the input increase
// O(n) --> Drop the entire constants
