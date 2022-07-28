//imports:
const express = require("express");
const path = require("path");
const config = require("../config.js");
const controls = require("./controllers");

//routes and server setup live here:

//import: DB connection
const db = require("./db");

const app = express();

// Serves up all static and generated assets in ../client/dist.
// app.use(express.static(path.join(__dirname, "../client/dist")));

//parser:
app.use(express.json());



//ROUTES:

//GET /products
app.get('/products', controls.getAllProducts)

// // GET /products/:product_id
// app.get('/products/:product_id', controls.getProductById)

// // GET /products/:product_id/styles
// app.get('/products/:products_id/style', contorls.getProductStylesById)




app.listen(config.port);
console.log(`Listening at ${config.ip}`);