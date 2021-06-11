//same frequency
/** Write a function called samFrequency. Given two positive intergers, find out if the two numbers have the same frequency. Your solution MUST have the following complexities: Time: O(n)
 * Sample input:
 *  sameFrequency(182, 281) true
 *  sameFrequency(34, 14) false
 *  sameFrequency(3589578, 5879385) true
 *  sameFrequency(22,222) false
 */
// my solution
function sameFrequency(num1, num2) {
  const x = num1.toString()
  const y = num2.toString()
  if (x.length != y.length) {
    return false
  }
  let obj1 = {}
  for (let char of x) {
    obj1[char] = ++obj1[char] || 1
  }
  for (let char of y) {
    if (!obj1[char]) {
      return false
    }
    obj1[char] -= 1
  }
  return true
}
console.log(sameFrequency(182, 281))
console.log(sameFrequency(22, 222))
console.log(sameFrequency(3589578, 5879385))

// refactor
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  let countNum1 = {}
  let countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false
  }

  return true
}
