const mongoose = require('mongoose');
const MySchema = mongoose.Schema({
    ProductID : {
        type : String
    },
    ProductName : {
        type : String
    }  
});

const Product = mongoose.model('produits',MySchema)
module.exports = Product;
