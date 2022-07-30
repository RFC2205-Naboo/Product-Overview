//request handlers live here:
const models = require("./models");

//TODO: url parameter extraction for all methods
// pass values into model functions
exports.getProducts = (req, res) => {
    models.retrieveProducts()
      .then((data) => {
        //console.log(data[0].rows);
        res.send(data[0].rows).status(200).end();
      })
      .catch((err) => {
        console.log('There is an error in controllers getAllProducts: ', err);
      })
}

exports.getProductById = (req,res) => {
  console.log(req.params[0].indexOf('/styles'))

  let id = req.params[0];
  const styles = req.params[0].indexOf('/styles');
  if(styles < 0){
    models.retrieveProductById(id)
    .then((data)=>{
      res.send(data[0].rows[0].row_to_json).status(200).end();
    })
    .catch((err)=>{
      console.log('There is an error in controllers getProductById: ', err);
    })
  }else{
    //get product id out of param by splitting the slicing the string
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