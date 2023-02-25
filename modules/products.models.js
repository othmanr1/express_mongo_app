const mongoose = require('mongoose');
const MySchema = mongoose.Schema({
    ProductID : {
        type : String ,
        required : true ,
        default : ''
    },
    ProductName : {
        type : String ,
        required : true ,
        default : ''
       
    },  
    ProductQuantity : {
        type : Number,
        required : true ,
        default : 0
    } , 
    ProductPrice : {
        type : Number,
        required : true ,
        default : 0
    }, 
    ProductImage : {
        type : String,
        required : false
    }  
});

const Product = mongoose.model('produits',MySchema)
module.exports = Product;
