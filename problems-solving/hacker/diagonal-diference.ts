// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const input = [ 
  [ 11, 2, 4 ], 
  [ 4, 5, 6 ], 
  [ 10, 8, -12 ] 
]

function diagonalDiference(arr: number[][]) {
  let principal = 0
  let secondary = 0
  for (let i = 0; i < arr.length; i++) {
    principal += arr[i][i]
    secondary += arr[i][arr.length - i - 1]
  }
  return Math.abs(principal - secondary)
}

console.log(diagonalDiference(input))