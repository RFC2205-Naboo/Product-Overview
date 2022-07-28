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
app.get('/products', controls.getProducts)

// // GET /products/:product_id
// app.get('/products/:product_id', controls.getProductById)
app.get('/products/*', controls.getProductById)

// // GET /products/:product_id/styles
// app.get('/products/*/style', controls.getProductStylesById)




app.listen(config.port);
console.log(`Listening at ${config.ip}`);