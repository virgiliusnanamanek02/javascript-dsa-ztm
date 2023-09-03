function pascalTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const rows = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        rows.push(1);
      } else {
        rows.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    triangle.push(rows);
  }

  return triangle;
}

console.log(pascalTriangle(6));
