//DB connection lives here:
const {Client} = require('pg');
const Promise =  require('bluebird');
const config = require('../config.js');


//connection options:
const client = new Client({
  host: config.host,
  user: config.user,
  port: config.dBport,
  database: config.database
})

//turns all connections to db
const db = Promise.promisifyAll(client, {multiArgs: true});

//connects to DB
db.connectAsync()
  .then(()=>{
    console.log('connection to PostgreSQL DB successful')
  })
  .catch((err)=>{
    console.log('failed to connect to DB: ', err)
  });

//exports
module.exports = db;


