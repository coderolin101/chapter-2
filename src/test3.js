/*
Given an array of integers nums and an integer target, return indices of the two numbers such that
they add up to target.
Input: nums = [3,2,4], target = 6
Output: [1,2]
* */
var twoSum = function (nums, target) {
    for (var iter = 0; iter < nums.length; iter++) {
        for (var jter = iter + 1; jter < nums.length; jter++) {
            if (nums[jter] == target - nums[iter]) /*if that current "iterated on number" is the subtraction of the next
             number minus the target var.*/ {
                var retArr = [iter, jter]; //This here is flagged as redundant, just use "return [iter, jter]"
                return retArr;
            }
        }
    }
    // in case there is no solution, we'll just return null.
    return [0, 0];
};
var answer = twoSum([3, 1, 4], 6); //here we are assigning the function call to a variable.
console.log(answer); //here we output to the screen!
