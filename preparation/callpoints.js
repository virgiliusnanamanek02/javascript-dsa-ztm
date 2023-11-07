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
