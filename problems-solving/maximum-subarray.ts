/*
5. Maximum Subarray
Question
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/
function maxSubArray(nums: number[]): number {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      console.log({maxCurrent});
      if (maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
      }
      console.log({maxGlobal});
  }
  return maxGlobal;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
/*
The subarray [4, -1, 2, 1] has the largest sum = 6.

*/