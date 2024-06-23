// 3.CommonJS Module
//Problem statement
// This coding challenge offers an opportunity to grasp CommonJS module syntax and understand its necessity in structuring and organizing JavaScript code for better maintainability and reusability.

// Guide to upload Coding Problems

// Objectives

// 1. Import the "sum" and "mean" functions from "math.js" into the "app.js" file.
// 2. Use the imported functions to calculate the sum and mean of the provided 'nums' array.
// 3. Console log the computed sum and mean.

// Note:
// Ensure that your solution is implemented within the 'app.js' file
// import the required module here
const { sum, mean } = require('./math');
const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log("Sum is:", sum(nums));
    console.log("Mean is:", mean(nums));
};
Solution();
module.exports = Solution;

//output

// Sum is: 15
// Mean is: 3