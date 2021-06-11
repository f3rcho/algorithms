// Multiple Pointers
/** Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are duplicates among the arguments passed in. You can sol this using frequency counter patter OR the multiple pointers pattern
 * Examples:
 * areThereDuplicates(1, 2, 3) false
 * areThereDuplicates(1, 2, 2) true
 * areThereDuplicates('a', 'b', 'c', 'a') true
 */

// frequency counter
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}
console.log(areThereDuplicates(1, 2, 3))

// Multiple pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}
console.log(areThereDuplicates(1, 2, 3))

// One linear solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}
console.log(areThereDuplicates(1, 2, 3, 3))
