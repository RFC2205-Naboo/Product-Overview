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

COPY "products" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview-Service/data/products.csv' DELIMITER ',' CSV HEADER ;



DROP TABLE IF EXISTS features;

--id,product_id,feature,value

CREATE TABLE features (
  id INT NOT NUll,
  product_id INT NOT NULL,
  feaure VARCHAR(250) NOT NULL,
  value VArCHAR(250) NOT NULL
);

COPY "features" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview-Service/data/features.csv' DELIMITER ',' CSV HEADER ;



DROP TABLE IF EXISTS skus;

--id,styleId,size,quantity

CREATE TABLE skus (
  id INT NOT NUll,
  styleId INT NOT NULL,
  size VARCHAR(250) NOT NULL,
  quantity INT NOT NULL
);

COPY "skus" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview-Service/data/skus.csv' DELIMITER ',' CSV HEADER ;



DROP TABLE IF EXISTS styles;

--id,productId,name,sale_price,original_price,default_style

CREATE TABLE styles (
  id INT NOT NUll,
  productId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  sale_price TEXT,
  original_price INT NOT NULL,
  default_price INT NOT NULL
);

COPY "styles" FROM '/Users/joseph_shultz/Desktop/Systems Design Capstone/Product-Overview-Service/data/styles.csv' DELIMITER ',' CSV HEADER ;
