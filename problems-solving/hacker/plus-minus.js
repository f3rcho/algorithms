const plusMinusInput = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
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
