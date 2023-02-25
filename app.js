const express = require('express');
require('dotenv/config');
const cors = require('cors');


const myR= require("./routes/products.routes");

const Mprod = require('./modules/products.models');
const connect = require('./config/connection');

const { connectToDatabase } = require('./config/connection');
const app = express();
const db =  connectToDatabase();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3500/', 'http://localhost:3000']
  }));





// async function add() {
//     try{
//     const prod = await Mprod.create(
//         {
//             ProductID : 'ID-02',
//             ProductName : 'Apple'
         
//         })
//         await prod.save();
//             console.log('added' , prod) ;
//     }catch(err){
//         console.log(err.message)
//     } 
// }
// async function find(){
//     const prod = await Mprod.findById('63f09a1d34cb87436cb8ebec')
//     console.log('found' , prod);
// }
// async function del(){
//     const prod = await Mprod.deleteOne({ProductID: 'ID-02'})
//     console.log('deleted' , prod);
// }

// async function update(){
//     const prod = await Mprod.find({ProductID: 'ID-05'})
//     prod.ProductID='ID-06'
//     prod.ProductName='Smart-Tv'
//     console.log('updated' , prod);
// }

// add()
// find()
// del()
// update()


app.use("/", myR);

app.listen(process.env.PORT);