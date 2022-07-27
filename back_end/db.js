//DB connection lives here:
const {Client} = require('pg');
const Promise =  require('bluebird');

//connection options:
const client = new Client({
  host: "localhost",
  user: "joseph_shultz",
  port: "5432",
  database: "prdovr"
})

//turns all connections to db
const db = Promise.promisifyAll(client, {multiArgs: true});

//connects to DB
db.connectAsync()
  .then(()=>{
    console.log('connected to PostgreSQL DB successful')
  })
  .catch((err)=>{
    console.log('failed to connect: ', err)
  });

//exports
module.exports = {
  db
}

