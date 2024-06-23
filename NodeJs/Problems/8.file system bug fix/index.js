// // Please do not change the prewritten code
// Problem statement
//8.file system bug fix
// Assist a developer in a Node.js application that encounters a bug with non-blocking code, affecting the display of updated information during file system interactions and CRUD operations. Learn troubleshooting techniques to ensure the console consistently shows the most recent data, enhancing application responsiveness.


// Objectives

// i) Fix the bug causing outdated data to be displayed when printing to the console.
// ii) Ensure that the updated data is consistently retrieved and displayed after appending new data to "note.txt".

// Notes:
// To resolve the bug, make sure the read operation is executed only after the update operation is completed.
// Consider using appropriate asynchronous techniques in Node.js to ensure proper sequencing of operations.




// Current process silently updates "note.txt" without displaying the new content on the console, like in the screenshot.




const fs = require('fs');

const Solution = () => {
  fs.writeFile("note.txt", "old data",(err)=>{
    if(err){
      console.log(err);
    }

  }
);
  fs.appendFile("note.txt", " new data", (data, err) => {
    if (err) {
      console.log(err);
    }
    else console.log("file updated successfully ");
  });

  fs.readFile("note.txt", "utf-8", (data, err) => {
    if (err) console.log(err);
    else console.log(data);
  });
};
Solution();
module.exports = Solution;

//output

// old data
// new data 