/*
Given an array of integers nums and an integer target, return indices of the two numbers such that
they add up to target.
Input: nums = [3,2,4], target = 6
Output: [1,2]
 */
let twoSum = (nums: number[], target: number) => {
    for(let iter=0; iter<nums.length; iter++)
    {
        for(let jter=iter+1; jter<nums.length; jter++)
        {
            if (nums[jter] == target - nums[iter]) /*if that current "iterated on number" is the subtraction of the next
             number minus the target var.*/
            {
                let retArr = [iter, jter]; //This here is flagged as redundant, just use "return [iter, jter]"
                return retArr;
            }
        }
    }
    // in case there is no solution, we'll just return null.
    return [0,0];
}

let answer = twoSum([3,2,4],6) //here we are assigning the "function call" to a variable named answer.

console.log(answer) //here we output to the screen!