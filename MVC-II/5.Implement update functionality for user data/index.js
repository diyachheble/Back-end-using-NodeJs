/*
Implement update functionality for user data
Problem statement
You are tasked with enhancing the existing Node.js application's functionality by implementing an update feature for user data.


Objectives:

i) The application provides a POST route at ('/') that utilizes the 'updateUser' controller to update an existing user in the 'users' array, as specified in the user model. The user interface for this update functionality is facilitated through the 'update-form.ejs' view.
ii) Implement the 'updateUsers' model, which is utilized by the 'updateUser' controller to update existing user data. This function should be designed to efficiently update a user's details within the 'users' array based on their unique identifier ('id').
iii) Upon successful update, the function should return the updated user details to the controller. If the specified user is not present in the 'users' array, the function should gracefully return false to the controller.
*/




import express from "express";
import { renderUpdateForm, updateUser } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUpdateForm);
app.post("/", updateUser);

export default app;
