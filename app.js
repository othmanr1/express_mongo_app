const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');

const myR= require("./product/products.routes");
const app = express();
const Mprod = require('./modules/products.models');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 43200000,
}).then(
    ()=>{console.log('connect to DB') ; },
    err=>{console.log('error to connect to DB ' + err ) ; }
)




async function add() {
    try{
    const prod = await Mprod.create(
        {
            ProductID : 'ID-02',
            ProductName : 'Apple'
         
        })
        await prod.save();
            console.log('added' , prod) ;
    }catch(err){
        console.log(err.message)
    } 
}
async function find(){
    const prod = await Mprod.findById('63f09a1d34cb87436cb8ebec')
    console.log('found' , prod);
}
async function del(){
    const prod = await Mprod.deleteOne({ProductID: 'ID-02'})
    console.log('deleted' , prod);
}

async function update(){
    const prod = await Mprod.find({ProductID: 'ID-05'})
    prod.ProductID='ID-06'
    prod.ProductName='Smart-Tv'
    console.log('updated' , prod);
}

// add()
// find()
// del()
// update()


app.use("/", myR);

app.listen(process.env.PORT);