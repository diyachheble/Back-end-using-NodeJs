//1.Create server// 
//Problem statement
// Let's create a basic Node.js HTTP server on port 8080, a foundational step in web service development for handling interactions between clients and servers.


// Objectives:

// i) Create a server using the HTTP module and store the server instance in a variable named "server" within "index.js" file.
// ii) Configure the server to listen on port 8080.
// iii) The server should respond with the message, "Response received at port 8080."

// Notes:
// Please review the 'Guide to Upload Coding Problems' section for efficient instructions on submitting your uploads.
// The default code module.exports = server; provided in "index.js" is for evaluation purposes. Ignore this line and put your code above it.
// Write your code here



const http = require('http');
const server = http.createServer((req , res) =>{
    res.end("Response received at port 8080");
});
server.listen(8080,()=>{
    console.log(" Server is Listening at port 8080");
});

module.exports = server;
