// 2.NodeJs server using the http module
// Problem statement
// Enhance your troubleshooting skills with this debugging exercise, addressing a common challenge in server setup. Your task is to fix the provided Node.js server code, providing valuable experience in problem resolution.
// Objectives
// i) Modify the code in 'index.js' to make the Node.js server respond correctly.
// ii) Ensure that the server sends the expected response of 'I am a Ninja' when accessed via http://localhost:3000.

// Notes:
// Debugging tools like console.log can be helpful in understanding the code's behavior.
// 


const http = require("http");

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  res.end(resMessage);
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;

//output
// server is listening at port 3000