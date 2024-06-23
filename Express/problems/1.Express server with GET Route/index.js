// Problem 1
//Express server with GET Route
// Learn to build a robust web server using Express, a popular Node.js framework. Gain practical experience in creating distinctive GET routes for delivering impactful messages, enhancing your skills in crafting expressive and powerful web applications.

// Objectives:

// i) Create an Express server instance and store it in a variable named 'server' inside "index.js" file.
// ii) Implement a GET route at the root ('/') endpoint.
// iii) Configure the GET route to respond with the motivational message "Be a Coding Ninja."

// Notes:
// You have the flexibility to run the server at any port.
// Ensure to install the necessary dependencies and start the server to test the implementation.
// Adhere to the correct syntax and follow Express conventions for creating the server and defining routes.

// Write your code here
const express = require('express');
const server = express();
server.get("/",(req,res)=>{
    res.end("Be a Coding Ninja.");
});

module.exports = { server };
