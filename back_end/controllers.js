//request handlers live here:
const models = require("./models");

//TODO: url parameter extraction for all methods
// pass values into model functions
exports.getProducts = (req, res) => {
  console.log(req.query)
    models.retrieveProducts(req.query.count, req.query.page)
      .then((data) => {
        res.send(data[0].rows).status(200).end();
      })
      .catch((err) => {
        console.log('There is an error in controllers getAllProducts: ', err);
      })
}

exports.getProductById = (req,res) => {
  let id = req.params[0];
  const styles = req.params[0].indexOf('/styles');
  if(styles < 0){
    //handles get req that have: products/:product_id endpoint
    models.retrieveProductById(id)
    .then((data)=>{
      res.send(data[0].rows[0].row_to_json).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductById: ', err);
    })
  }else{
    //handles get req that have: products/:product_id/styles endpoint
    console.log(id.slice(0,styles));
    id = id.slice(0,styles);
    models.retrieveStylesByProductId(id)
    .then((data)=>{
      console.log(data.rows)
      res.send(data.rows[0].row_to_json).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductById: ', err);
    })
  }

}

// exports.getProductStylesById = (req,res) => {
//   models.retrieveStylesByProductId()
//     .then((data)=>{
//       res.send(data).status(200).end();
//     })
//     .catch((err)=>{
//       console.log('There is an error in controllers getProductStylesById: ', err);
//     })
// }