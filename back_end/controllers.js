//request handlers live here:
const models = require("./models");


exports.getAllProducts((res,req)=>{
  models.retrieveProducts()
    .then((data)=>{
      res.send(data).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getAllProducts: ', err);
    })
})

exports.getProductById((res,req)=>{
  models.retrieveProductById()
    .then((data)=>{
      res.send(data).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductById: ', err);
    })
})

exports.getProductStylesById((res,req)=>{
  models.retrieveStylesByProductId()
    .then((data)=>{
      res.send(data).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductStylesById: ', err);
    })
})