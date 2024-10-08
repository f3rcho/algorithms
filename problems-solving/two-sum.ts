/*
1. Two Sum
Question
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/
function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numMap) {
          return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
  }
  return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

