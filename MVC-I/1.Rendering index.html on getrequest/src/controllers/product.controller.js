// 1.Rendering index.html on getrequest
// Picture a Node.js MVC project where rendering dynamic views is the heart of the application. These views play a pivotal role in shaping the user interface of the application.



// Objective:

// i) Implement the 'getProducts' controller to render the 'index.html' file when a GET request ('/') is made to port 3000.

// Notes:
// To obtain the path of 'index.html', use path.resolve("src", "views", "index.html").
// To render the 'index.html' file, use res.sendFile('path of index.html file').
// Import the necessary modules here
import path from 'path';

  // Wite your code here
  export const getProducts = (req, res) => {
    console.log(path.resolve());
    return res.sendFile(path.join(path.resolve(), "src", "views", "index.html"));
}

