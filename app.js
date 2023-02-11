const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');

const myR= require("./product/products.routes");
const app = express();

// app.get('/', (req, res) => {
//   res.send('fs202!')
// })
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/produit' , () => {
    console.log('connected');
})

app.use("/", myR);

app.listen(process.env.PORT);