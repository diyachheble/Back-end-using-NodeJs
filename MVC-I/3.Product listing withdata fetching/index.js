// 3.Product listing withdata fetching
// Learn to implement methods in a Node.js project following MVC architecture, specifically focusing on fetching data from a file and rendering it using a template. Gain practical experience in creating a product listing page with the retrieved data.


// Objectives

// i) Implement the fetchProducts method in the ProductModel class to fetch an array of products from the src/assets/products.js file. No need to modify the pre-written code in 'src/assets/products.js'.
// ii) Complete the getProducts method in the ProductController class to render the product.ejs template with the fetched product details displayed in a table.

// iii) Complete the "product.ejs" view to display the details of the products in a table.

// Note:
// Design the table layout using HTML and CSS, either with a CSS framework or your own custom styles.
// Ensure the product.ejs template is correctly rendered with the product data in the table

import express from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";
const productController = new ProductController();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.get("/", productController.getProducts);

export default app;
