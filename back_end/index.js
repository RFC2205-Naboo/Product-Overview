//routes and server setup live here:

//imports:
const express = require("express");
const path = require("path");
const config = require("../config.js");
const controls = require("./controllers");



//import: DB connection
const db = require("./db");

const app = express();

// Serves up all static and generated assets in ../client/dist.
// app.use(express.static(path.join(__dirname, "../client/dist")));

//parser:
app.use(express.json());



//ROUTES:

// get handling for: /products
app.get('/products', controls.getProducts)

// get handling for:  /products/:product_id & GET: /products/:product_id/styles
app.get('/products/*', controls.getProductById)


//server is listening at this port:
app.listen(config.port);
console.log(`Listening at ${config.ip}`);