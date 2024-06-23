//3.Express Request handler
// Create a request handler in Express that can handle GET, POST, PUT, and DELETE requests. This functionality is crucial for building web applications that require different actions based on the type of request.


// Objectives:

// i) Implement a route handler for the root route('/') inside "index.js" file.
// Handle GET requests by responding with the message 'get'.
// Handle POST requests by responding with the message 'post'.
// Handle PUT requests by responding with the message 'put'.
// Handle DELETE requests by responding with the message 'delete'.


const express = require("express");
const server = express();
server.get("/", (req, res) => {
  res.send("get");
});
server.post("/", (req, res) => {
  res.send("post");
});
server.put("/", (req, res) => {
  res.send("put");
});
server.delete("/", (req, res) => {
  res.send("delete");
});
module.exports = server;
