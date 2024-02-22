// function zigZagSequence(arr: number[]): number[] {
//   // Sort the array in increasing order
//   let midIndex = Math.floor(arr.length / 2);
//   let sortArr = [...arr];
//   sortArr.sort( (a, b) => a - b);
  
//   let lastIndex = arr.length - 1;
  
//   let max = sortArr[lastIndex]
//   sortArr[lastIndex] = sortArr[midIndex];
//   sortArr[midIndex] = max;
  
//   let left = midIndex + 1;
//   let right = lastIndex  - 1;
  
  
//   while (left < right) {
//       let temp = sortArr[left];
//       sortArr[left] = sortArr[right];
//       sortArr[right] = temp;
//       left++;
//       right--;
//   }
//   return sortArr
// }

// // Example usage
// // const inputArray = [2, 3, 5, 1, 4];
// const inputArray = [1, 2, 3, 4, 5, 6, 7];
// const zigZagResult = zigZagSequence(inputArray);
// console.log("Zig-Zag Sequence:", zigZagResult);

function zigZagSequence(arr: number[]): number[] {
  // Sort the array in increasing order
  arr.sort((a, b) => a - b);

  // Swap the largest element to the middle
  const n = arr.length;
  const mid = Math.floor(n / 2);
  [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

  // Reverse the remaining elements
  for (let i = mid + 1, j = n - 2; i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7];
const zigZagResult = zigZagSequence(inputArray);
console.log("Zig-Zag Sequence:", zigZagResult);
