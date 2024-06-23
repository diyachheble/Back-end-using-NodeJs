// app.js - our main application file
// Problem statement
// 3.ES6 Module
// Update the codebase from CommonJS to ES6 module syntax for improved encapsulation and enhanced compatibility with modern JavaScript frameworks, reflecting the importance of adopting up-to-date coding practices.


// Objectives:

// i) Refactor the codebase to use the ES6 module syntax.
// ii) Ensure that "app.js" imports and utilizes the exported functions from "math.js" correctly using ES6 syntax.

// Note: Write ES6 syntax without changing the file extensions to .mjs


// Expected Output:

// The solution should produce the following output:

// "The sum is 15"
// "The mean is 3"


import * as math  from './math.js';

const nums = [1, 2, 3, 4, 5];
console.log(`The sum is ${math.sum(nums)}`);
console.log(`The mean is ${math.mean(nums)}`);
