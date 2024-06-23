//Problem 2.Express server Middleware -request logging
// Engage in developing a web application with a focus on implementing middleware for tracking incoming requests. Gain insights into the fundamental aspects of debugging, analysis, and server monitoring, enhancing your skills in dynamic web environments.

// Objectives

// i) Implement the "logRequest" middleware function to achieve the following functionalities:
// Ensure the middleware is executed for every GET request at the root path ("/").
// Log the request method and path to the console.

// Notes:
// Access the request method and path information using the 'req' object's 'method' and 'path' attributes.



const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
};


app.get("/", logRequest, (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
