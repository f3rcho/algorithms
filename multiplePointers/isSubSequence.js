/** Writh a function called isSubSequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appears in the second string, without their order changing
 * Examples:
 * isSubSequence('hello', 'hello world') true
 * isSubSequence('sing', 'sting') true
 * isSubSequence('abc', 'abracadabra') true
 * isSubSequence('abc', 'acb') false (order matters)
 * your solution MUST have at least the following complexities:
 * Time complexity - O(N + M)
 * Space complexity - O(1)
 */
//iterative
function isSubsequence(str1, str2) {
  let i = 0
  let j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}
console.log(isSubsequence('abc', 'abracadabra'))

//recursive but not O(1)
// function isSubsequence(str1, str2) {
//   if (str1.length === 0) return true
//   if (str2.length === 0) return false
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//   return isSubsequence(str1, str2.slice(1))
// }
// console.log(isSubsequence('abc', 'abracadabra'))
