// // Please don't change the pre-written code
// Problem statement
//9.File path Absolute path resolver
// In the world of file management, knowing the absolute path of a file is crucial for various tasks. Implement the given functionality to get the desired path.


// Objective

// i) Complete the getAbsolutePath function inside the "pathResolver.js" file to accurately determine and return the absolute path of the file.txt file in the src directory.
// ii) Your task is to find the absolute path of the parameter passed within "getAbsolutePath" function.


// Expected Output:

// After successfully implementing the provided problem, ensure that your output aligns with the demonstration given in the reference gif.
const path = require("path");
const { getAbsolutePath } = require("./pathResolver.js");

const Solution = () => {
  const path_to_file = path.join("src", "file.txt");
  console.log(getAbsolutePath(path_to_file));
};
Solution();
module.exports = Solution;
