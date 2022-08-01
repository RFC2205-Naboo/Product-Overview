--create tables in our DB

DROP TABLE IF EXISTS products;

--id,name,slogan,description,category,default_price

CREATE TABLE products (
  id INT NOT NUll,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(250) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  category VARCHAR(250) NOT NULL,
  default_price INT NOT NULL
);

COPY "products" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview/data/product.csv' DELIMITER ',' CSV HEADER ;

--CREATE INDEX name ON table

CREATE INDEX id ON products (id);




DROP TABLE IF EXISTS features;

--id,product_id,feature,value

CREATE TABLE features (
  id INT NOT NUll,
  product_id INT NOT NULL,
  feature VARCHAR(250) NOT NULL,
  value VArCHAR(250) NOT NULL
);

COPY "features" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview/data/features.csv' DELIMITER ',' CSV HEADER ;

CREATE INDEX product_id ON features (product_id);



DROP TABLE IF EXISTS skus;

--id,styleId,size,quantity

CREATE TABLE skus (
  id INT NOT NUll,
  styleId INT NOT NULL,
  size VARCHAR(250) NOT NULL,
  quantity INT NOT NULL
);

COPY "skus" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview/data/skus.csv' DELIMITER ',' CSV HEADER ;

CREATE INDEX styleId ON skus (styleId);


DROP TABLE IF EXISTS styles;

--id,productId,name,sale_price,original_price,default_style

CREATE TABLE styles (
  id INT NOT NUll,
  productId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  sale_price TEXT,
  original_price INT NOT NULL,
  default_price BOOLEAN
);

COPY "styles" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview/data/styles.csv' DELIMITER ',' CSV HEADER ;

CREATE INDEX productId ON styles (productId);


DROP TABLE IF EXISTS photos;

--id,styleId,url,thumbnail_url

CREATE TABLE photos (
  id INT NOT NUll,
  styleId INT NOT NULL,
  url text,
  thumbnail_url text
);

-- SELECT * FROM photos;

COPY "photos" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview/data/photos.csv' DELIMITER ',' CSV HEADER ;

CREATE INDEX style_id ON photos (styleId);