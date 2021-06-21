// gertDigit counting from back
/**
 * 1234, 1 // 3
 * 2341, 2 // 3
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(1233, 1));

// digitCount
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(1234000));

// most digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([23, 567, 89, 1232233, 90]));

module.exports = {
  getDigit,
  mostDigits,
};
