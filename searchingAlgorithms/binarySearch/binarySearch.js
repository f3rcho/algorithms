/**
 * Write a function called binarySearch which accepts a sorted array and a value and returns
 * the index at which the value exists. Otherwise return -1.
 * This algorithms should be more efficient than linearSearch
 */
function binarySearch(arr, val) {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2)
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === val) {
    return middle
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 14, 20], 9))
