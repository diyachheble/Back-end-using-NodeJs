// User data rendering
// Enhance your Node.js MVC skills by developing an admin dashboard for an e-commerce platform. Gain skills in efficiently fetching and displaying essential user details, enhancing decision-making and overall management efficiency for an e-commerce platform.

// Objectives

// i) You have been provided an API 'https://dummyjson.com/users' that contains a users array. The array comprises objects, each detailing user information (e.g., [User Details]).

// ii) Implement the 'userModel' function inside users.model.js to fetch users' details from the provided API using axios.

// Ensure that the function returns only the array of users obtained from the API response, excluding the entire response object.

// iii) Implement the 'userController' to render the details of users fetched using userModel using the 'index.ejs' view.

// Render the data in a table format, utilizing your own styling.
// Display only user's name, email, mobile number, gender, city, pincode, and profile image.
// The route provided for rendering the details is app.get("/users", userController).


// Notes:
// Follow the folder structure and file locations mentioned in the problem statement.
// Refer to the starter code in 'index.ejs' to implement the table rendering.



import express from "express";
import path from "path";
import { userController } from "./src/controllers/users.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get("/users", userController);

export default app;
