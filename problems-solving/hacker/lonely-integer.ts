/* Given an array of integers, where all elements but one occur twice, find the unique element.
Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.
*/

function lonelyInteger(arr: number[]) {
  let uniqueElement = 0;

  for (let i = 0; i < arr.length; i++) {
    uniqueElement ^= arr[i];
    // console.log(uniqueElement, "inside");
  }
  return uniqueElement;
}

// console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyInteger([39,15,60,74,1,94,93,28,48,70,98,45,94,42,45,48,1,72,9,24,93,41,70,60,28,11,20,72,35,11,98,31,74,31,41,9,42,20,35,24,39]));