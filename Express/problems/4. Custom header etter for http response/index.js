// Custom header etter for http response
// Explore the customization of HTTP response headers by creating a function within the context of handling requests and responses. Gain practical skills in header manipulation for diverse purposes, advancing your expertise in web development.


// Objectives

// i) Implement the function "setCustomHeader" to set a custom header on the provided HTTP response object.
// ii) The function should take in the response object, along with the name and value of the header.
// iii) Additionally, log a success message with the header name and value after setting the header.

// Note:
// Remember to access the appropriate properties or methods of the HTTP response object to set the custom header. Pay attention to the format of the success message and ensure that it includes the correct header name and value.

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res, headerName, headerValue) => {
  res.set(headerName, headerValue);
  console.log(
    `${headerName} with value ${headerValue} has been set successfully!`
  );
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.send(`get method called!`);
});

module.exports = { setCustomHeader, server };
