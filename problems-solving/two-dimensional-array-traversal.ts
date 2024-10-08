// see Readme for codesignal

function solution(field: number[][], figure: number[][]) {
  const height = field.length;
  const width = field[0].length;
  const figureSize = figure.length;

  for (let column = 0; column <= width - figureSize; column++) {
    let row = 1;
    while (row < height - figureSize + 1) {
      let canFit = true;
      for (let dx = 0; dx < figureSize; dx++) {
        for (let dy = 0; dy < figureSize; dy++) {
          if (field[row + dx][column + dy] === 1 && figure[dx][dy] === 1) {
            canFit = false;
          }
        }
      }
      if (!canFit) break;
      row++;
    }
    row--;

    for (let dx = 0; dx < figureSize; dx++) {
      let rowFilled = true;
      for (let columnIndex = 0; columnIndex < width; columnIndex++) {
        if (
          !(field[row + dx][columnIndex] === 1 ||
          (column <= columnIndex &&
            columnIndex < column + figureSize &&
            figure[dx][columnIndex - column] === 1))
        ) {
          rowFilled = false;
        }
      }
      if (rowFilled) return column;
    }
  }
  return -1;
}

const field = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
];
const figure = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
];

console.log(solution(field, figure)); //2
// const field = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 0, 1],
// ];

// const figure = [
//   [1, 1, 0],
//   [1, 0, 0],
//   [1, 0, 0],
// ];

// console.log(solution(field, figure)); // -1
