

/*

Leetcode 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
    
Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109

Only one valid answer exists.


Solution Link: https://www.youtube.com/watch?v=KLlXCFG5TnA&t=5s&ab_channel=NeetCode

*/

const nums = [2,7,11,15] ;
const target = 9;

const twoSum = function (numbers, target) {
    let map = new Map;
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(numbers[i], i);
    }
};

console.log(twoSum(nums,target))



