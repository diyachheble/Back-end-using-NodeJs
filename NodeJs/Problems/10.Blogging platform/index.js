// Problem statement
//10.Blogging platform
// In the digital age, blogging has become an essential medium for expressing thoughts, sharing knowledge, and connecting with a global audience.



// Objectives

// Given the file "blogActions.js" which contains two functions, 'writeBlog' and 'publishBlog':
// Implement the writeBlog function to accept a file path and the user's blog (string content) as parameters.This function should save the blog to the specified file using the synchronous append method of the fs module.
// Implement the publishBlog function to accept a file path as a parameter. This function should read and return the content of the file present at the specified path using the synchronous read method of the fs module.

// Notes:
// Implement the module using ES6 syntax, without requiring a change in the file extension(.mjs).
// The use of the keyword interface is not permitted, as it may function correctly on a local machine but will result in test failures on the backend.


// Expected Output:

// After successfully implementing the provided problem, ensure that your output aligns with the demonstration given in the reference gif.


import readline from "readline";
import { publishBlog, writeBlog } from "./blogActions.js";

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

iface.question("Enter your blog: ", (input) => {
  writeBlog("myblog.txt", input);
  iface.close();
  console.log(publishBlog("myblog.txt"));
});
