// 5. Time our code
// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
// same down
// function addUpTo(n) {
//   return (n * (n + 1)) / 2
// }
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// 6. Counting operations
// 9. Simplifying Big 0 notation
function logAtLeast5(n) {
  for (var i = 0; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}
console.log(logAtLeast5(100))

// Write a function which takes two numbers and returns their sum.
function sum(number, number2) {
  return number + number2
}
console.log(sum(2 / 3, 2))

// 22. Solve or simplify
//Write a function which takes in a string and returns counts of each character in the string.
function charCount(str) {
  // make object to return at end
  let result = {}
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    //  if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++
    } else {
      //  if the char is number/letter AND not in object, add it to object and set value to 1
      result[char] = 1
    }
  }
  //  if character is somthing else (spacce, period, etc.) don't do anything
  // return object at end
  return result
}
console.log(charCount('hello'))

//charCout Refactor
function charCount(str) {
  let obj = {}
  for (var char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}
console.log(charCount('hello World of worlds'))

// instead of regex, use
function charCount(str) {
  let obj = {}
  for (var char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}
function isAlphanumeric(char) {
  let code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) /**  numeric (0-9) **/ &&
    !(code > 64 && code < 91) /**  upper alpha (A-Z) **/ &&
    !(code > 96 && code < 123) /**  lower alpha (a-z) **/
  ) {
    return false
  }
  return true
}
console.log(charCount('hello World of worlds'))
//------------------------------*------------------------------------------
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}
console.log(same([1, 2, 3, 5], [1, 4, 9, 22]))
//---------------------------------*---------------------------------
/** Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */
function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }
  let obj1 = {}

  for (let char of str1) {
    obj1[char] = ++obj1[char] || 1
  }
  for (let char of str2) {
    if (!obj1[char]) {
      return false
    }
    obj1[char] -= 1
  }
  return true
}
console.log(
  validAnagram('ama', 'maa'),
  validAnagram('', ''), // true
  validAnagram('aaz', 'zza'), // false
  validAnagram('anagram', 'nagaram'), // true
  validAnagram('rat', 'car'), // false) // false
  validAnagram('awesome', 'awesom'), // false
  validAnagram('qwerty', 'qeywrt'), // true
  validAnagram('texttwisttime', 'timetwisttext')
)
// one way to do it
function validAnagram(first, second) {
  if (first.length != second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // cant find letter or letter zero then its not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}
console.log(validAnagram('ferr', 'errf'))

/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 */
// naive solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
// refactor
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    }
    if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

// Pointers
/**Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. */
//** countUniqueValues([1,1,1,1,1,2]) 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])  7
// countUniqueValues([])  0
// countUniqueValues([-2,-1,-1,0,1])  4
// */

function countUniqueValues(arr) {
  if (arr.length === 0) {
    console.log('Zero unique values')
    return 0
  }
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  console.log(i + 1, 'unique Values')
}
countUniqueValues([1, 1, 2, 2, 3])

// Slice Window
//**Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. */
function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

/** Divide and conquer
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
 */
// naive
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
  return -1
}
console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1
// refactor
function search(array, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    console.log(`${min}: min, ${max}: max`)
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle]
    console.log(`${middle}:middle`)
    if (array[middle] < val) {
      min = middle + 1
      console.log(`${min}: min`)
    } else if (array[middle] > val) {
      max = middle - 1
      console.log(`${max}: max`)
    } else {
      console.log(`${middle}: middle`)
      return middle
    }
  }
  return -1
}
console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1

//same frequency
/** Write a function called samFrequency. Given two positive intergers, find out if the two numbers have the same frequency. Your solution MUST have the following complexities: Time: O(n)
 * Sample input:
 *  sameFrequency(182, 281) true
 *  sameFrequency(34, 14) false
 *  sameFrequency(3589578, 5879385) true
 *  sameFrequency(22,222) false
 */
function sameFrequency(num1, num2) {
  const x = num1.toString()
  const y = num2.toString()
  if (x.length != y.length) {
    return false
  }
}
console.log(sameFrequency(182, 281))
