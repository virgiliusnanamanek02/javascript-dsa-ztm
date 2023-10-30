
/**
 *
 * Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
 *
 */


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let points = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      points.push(points[points.length - 1] + points[points.length - 2]);
    } else if (operations[i] === "D") {
      points.push(points[points.length - 1] * 2);
    } else if (operations[i] === "C") {
      points.pop();
    } else {
      points.push(parseInt(operations[i]));
    }
  }

  if (points.length === 0) {
    return 0; // Atau nilai lain yang sesuai
  }
  return points.reduce((a, b) => a + b);
};


console.log(calPoints(["5", "2", "C", "D", "+"]));
