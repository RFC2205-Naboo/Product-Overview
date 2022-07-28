//query's and transactions with DB live here:
const db = require("./db");





//query to find first 5 products
exports.retrieveProducts = (count, page) => {
  //set default values for count and page
  page = page || 1;
  count = count || 5;
  //write query for returning products with defaults
  return db.queryAsync(`SELECT * FROM products WHERE id <= $1`, [count])
}

//query's to find a product by id
exports.retrieveProductById = (id) => {
  id = id || 1;
  return db.queryAsync(`SELECT * FROM products WHERE id = $1`, [id])
}

//query's to find a products styles by id
exports.retrieveStylesByProductId = (id) => {
  return db.query(`SELECT * FROM styles WHERE productId = $1`, [id])
}

