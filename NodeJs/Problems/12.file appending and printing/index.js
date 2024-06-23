// Practice writing a code snippet for handling POST requests, appending the request body to a file (file name unspecified) and printing its contents to the console. Gain hands-on experience applicable in scenarios requiring data storage, retrieval, and processing, such as logging or data persistence.
//12.file appending and printing
// Objectives:

// i) Complete the implementation of index.js to handle a POST request.
// ii) Read the request body and append it to the "data.txt" file.
// iii) Read and print the new content of the text file to the console.
// iv) Handle responses using res.end for complete data reception and non-POST request methods.


// Notes:
// Please make sure to utilize the synchronous functions provided by the file system module in Node.js.
// To successfully make the POST request, pass the following data:
// {
//     "message": "Be yourself; everyone else is already taken."
// }

// as shown below:


// Expected Output:

// Upon execution, the code should append the request body to the "data.txt" file and subsequently display the contents of the file on the console, as shown below.



// export default server;
import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      fs.appendFileSync("data.txt", data);
      console.log(fs.readFileSync("data.txt", "utf-8"));
    });
    res.end("data received");
  }
});

export default server;

// This code snippet creates a Node.js server using the built-in http module that listens on port 3000. When a POST request is made to this server, the server reads the request body data in chunks using events, appends the data to a file named data.txt using the built-in fs module, and then prints the contents of the data.txt file to the console using console.log(). Finally, the server sends a response back to the client with the message "data received".
