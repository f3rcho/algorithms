function miniMaxSum(arr) {
  // Write your code here
  const arrSorted = arr.sort((a, b) => a - b);
  console.log(arrSorted, "<<");
  const minimun = arr.slice(0, 4).reduce((a, b) => a + b);
  const maximum = arr.slice(1).reduce((a, b) => a + b);
  console.log(minimun, " ", maximum);
}
miniMaxSum([7, 69, 2, 221, 8974]);
