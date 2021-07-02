const { getDigit, mostDigits } = require('../helpers/helpers');
function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (k = 0; k < maxDigitsCount; k++) {
    // create the buckets
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
