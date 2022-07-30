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
  //return db.queryAsync(`SELECT * FROM products WHERE id = $1`, [id])
  return db.queryAsync(`SELECT row_to_json(products)
  FROM(
    SELECT
        products.*,
    (
      SELECT jsonb_agg(nested_feature)
            FROM(
        SELECT
          features.feature,
        features.value
              FROM features
              WHERE features.product_id = products.id
      ) AS nested_feature
  ) AS features
      FROM products WHERE id = $1
  ) AS products`, [id]);
}

//query's to find a products styles by id
exports.retrieveStylesByProductId = (id) => {
  id = id || 1;
  //return db.query(`SELECT * FROM styles WHERE productId = $1`, [id])
  return db.query(`SELECT row_to_json(products)
  FROM(
    SELECT
    	products.id AS product_id,
    (
      SELECT jsonb_agg(nested_result)
        	FROM(
        SELECT
				styles.id,
        styles.name,
        styles.sale_price,
        styles.original_price,
        styles.default_price AS default$,
        (
          SELECT json_agg(nested_photo)
				    FROM(
            SELECT
						photos.url,
            photos.thumbnail_url
						FROM photos
						WHERE photos.styleId = styles.productId
          ) AS nested_photo
      ) As photos,
    (
      SELECT json_object_agg(nested_skus)
				    FROM(
        SELECT json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size))
						FROM skus
						WHERE skus.styleId = styles.id
      ) AS nested_skus
  ) AS skus
		        FROM styles
		        WHERE styles.productId = products.id
        	) AS nested_result
        ) AS results
    FROM products WHERE id = $1
) AS products`, [id]);
}






// SELECT row_to_json(products)
// FROM (
//     SELECT
//     	products.id,
//         (
//         	SELECT jsonb_agg(nested_result)
//         	FROM (
// 	        	SELECT
// 				styles.id,
// 				styles.name,
// 				styles.sale_price,
// 				styles.original_price,
// 				styles.default_price,
// 				(
// 					SELECT json_agg(nested_photo)
// 				    FROM (
// 				        SELECT
// 						photos.url,
// 						photos.thumbnail_url
// 						FROM photos
// 						WHERE photos.styleId = styles.productId
// 					) AS nested_photo
// 				) As photos,
// 				(
// 					SELECT json_object_agg(nested_skus)
// 				    FROM (
// 				        SELECT json_object_agg(skus.id, skus.size)
// 						FROM skus
// 						WHERE skus.styleId = styles.id
// 					) AS nested_skus
// 				) AS skus
// 		        FROM styles
// 		        WHERE styles.productId = products.id
//         	) AS nested_result
//         ) AS results
//     FROM products WHERE id=5
// ) AS products;