// 5.Static file rendering

// Problem statement
// Picture building a dynamic web server where handling static files is a core necessity. This task mirrors a common real-world situation, preparing you to efficiently serve static content in web applications.



// Objectives:

// i) Implement the provided 'renderStatic' function in 'index.js' to render the 'index.html' file provided inside the 'public' directory in response to the GET request 'localhost:5000/index.html'.

// Notes:
// Use the 'express.static' middleware to serve static files.
// Ensure that the file path is correctly resolved when serving the 'index.html' file.


// Expected Output:

// Upon receiving a GET request to 'localhost:5000/index.html', the server should render and return the contents of the 'index.html' file as the response.

const express = require('express');
const server = express();

const renderStatic = () => {
  // Write your code here
  server.use(express.static('public'));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic();

module.exports = { renderStatic, server };
