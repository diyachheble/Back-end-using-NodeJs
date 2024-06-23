//Problem statement
//7.nodeJs Note taking app with file handling
// Immerse yourself in a practical exercise simulating the development of a note-taking application in Node.js. This real-world scenario emphasizes mastering file handling, a fundamental skill crucial for seamless data management. Elevate your Node.js proficiency and prepare for handling data effectively as an aspiring developer.


// Objectives

// i) Create a file named "notes.txt" and write the phrase "The world has enough coders" to it using the synchronous write method of fs module.
// ii) Retrive the contents of notes.txt file utilising the fs module's synchronous read method to display them on the console.
// iii) Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!" using the fs module's synchronous append method.
// iv) Retrieve the updated contents of the "notes.txt" file and display them on the console.

// Note:

// Use 'utf-8' as the encoding parameter for read operations( fs.readFileSync).


// Expected Output:

// i) The program should display the contents of the "notes.txt" file both before and after appending the additional phrase.
// ii) The output should match the provided screenshot.



// Import the fs module
const fs = require('fs');
const Solution = () => {
// 
// Create a file named "notes.txt" and write the phrase "The world has enough coders" to it using the synchronous write method of fs module
fs.writeFileSync('notes.txt', 'The world has enough coders ');

// Retrieve the contents of notes.txt file utilising the fs module's synchronous read method to display them on the console
let buffer = fs.readFileSync('notes.txt', { encoding: 'utf-8' });

console.log(buffer);

// Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!" using the fs module's synchronous append method
fs.appendFileSync('notes.txt', 'BE A CODING NINJA!');

// Retrieve the updated contents of the "notes.txt" file and display them on the console
buffer = fs.readFileSync('notes.txt', { encoding: 'utf-8' });

console.log(buffer);
};
Solution();
module.exports = Solution;

