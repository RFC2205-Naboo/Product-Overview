//request handlers live here:
const models = require("./models");


exports.getAllProducts = (req,res) => {
  models.retrieveProducts()
    .then((data)=>{
      console.log(data[0].rows);
      res.send(data[0].rows).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getAllProducts: ', err);
    })
}

exports.getProductById = (req,res) => {
  models.retrieveProductById()
    .then((data)=>{
      res.send(data).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductById: ', err);
    })
}

exports.getProductStylesById = (req,res) => {
  models.retrieveStylesByProductId()
    .then((data)=>{
      res.send(data).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductStylesById: ', err);
    })
}