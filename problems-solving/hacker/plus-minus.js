const plusMinusInput = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const element of arr) {
    if (element > 0) {
      positiveCount++;
    } else if (element < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  const length = arr.length;

  console.log((positiveCount / length).toFixed(6));
  console.log((negativeCount / length).toFixed(6));
  console.log((zeroCount / length).toFixed(6));
}

plusMinus(plusMinusInput);
