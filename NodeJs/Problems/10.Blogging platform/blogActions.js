// Do not change the pre-written code.
// Make the necessary imports here.
import * as fs from 'fs';

export const writeBlog = (filePath, name) => {
  try {
    fs.writeFileSync(filePath, name, { flag: 'a' });
    console.log(`Blog saved to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file: ${error}`);
  }
}



export const publishBlog = (filePath) => {
// Write your code here.
try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return fileContent;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
}