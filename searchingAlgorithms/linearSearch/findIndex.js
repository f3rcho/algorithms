/**
 * @param {[array of numbers]} arr
 * @param {value to search} val
 * @returns index or -1
 */
function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 10, 12], 12));
