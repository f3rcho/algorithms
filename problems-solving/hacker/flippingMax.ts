const q =1
const n = 2
/*
112 42 83 119
56 125 56 49
15 78 101 43
62 98 114 108
Expected Output
414

reverse col 2
112 42 114 119
56 125 101 43
15 78 56 49
62 98 83 108

reverse row 0
119 114 42  112
56  125 101 43
15  78  56  49
62  98  83  108

the sum of values in the n x n submatrix in the upper-left quadrant is
119 + 114 + 125 + 56 = 414
*/

function flippingMax(matrix: number[][]): number {
  const n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          console.log({i, j})
          const topLeft = matrix[i][j];
          console.log([i], [j])
          const topRight = matrix[i][2 * n - j - 1];
          console.log([i], [2 * n - j - 1])
          const bottomLeft = matrix[2 * n - i - 1][j];
          console.log([2 * n - i - 1],[j])
          const bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];
          console.log([2 * n - i - 1], [2 * n - j - 1])

          console.log({topLeft, topRight, bottomLeft, bottomRight})

          maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
          console.log({maxSum})
      }
  }
  console.log(maxSum);
  return maxSum;
}

flippingMax([
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
])