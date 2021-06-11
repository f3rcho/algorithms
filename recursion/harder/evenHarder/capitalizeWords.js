/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */
function capitalizedWords(arr) {
  if (arr.length === 0) return false
  let newArr = []
  arr.forEach((el) => {
    newArr.push(el.toUpperCase())
  })
  return newArr
}
let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizedWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']

/** Same approach */
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1))
  res.push(array.slice(array.length - 1)[0].toUpperCase())
  return res
}

let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
