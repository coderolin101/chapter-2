/*This is a practice Typescript file for Leetcode conversions
*
* */


function twoSum(nums: number[], target: number)
{
    return nums;
}

/*Function below will be showing how a regular function is to be declared. */
function funcName (nums: 1, nums2: 2)
{
    return nums+nums2;
}

/*function below is going to show how a function expression works. this function can also have no name. These functions
* cannot be used before they are defined. That is mostly why these anonymous functions objects are being set equal to
* a variable.*/
let expressionFuncNamed = function (nums: number)
{
    console.log(nums);
    return 0;
}

/*This is a function using the arrow function expression. which is a short syntax for writing function expressions.
* The ARROW FUNCTION EXPRESSION does not create its own THIS values.*/
let expressionFuncNaming = (nums: number) => //use CTRL + F6 in order to rename using REFACTOR renaming vars.
{
    console.log(nums);
    return 0;
}

//console.log(twoSum([1, 2, 3, 4], 4)) //practice with some variables.
console.log(funcName(1,2)) //regular function call here.
expressionFuncNamed(2) //This here is to call the function expression set to variable.
expressionFuncNaming(3) //here is to call the arrow function which is just like calling the above function expression var.
