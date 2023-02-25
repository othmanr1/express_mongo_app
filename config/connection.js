
require('dotenv/config');
const mongoose = require('mongoose');


mongoose.set('strictQuery', true);



async function connectToDatabase() {
    await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
            useUnifiedTopology: true,
           socketTimeoutMS: 43200000,
    }).then(
        ()=>{console.log('connect to DB') ; },
        err=>{console.log('error to connect to DB ' + err ) ; }
    )
    return mongoose.connection;
  }
  
  module.exports = { connectToDatabase };




