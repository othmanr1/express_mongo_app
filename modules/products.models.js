const mongoose = require('mongoose');
const MySchema = mongoose.Schema({
    ProductID : {
        type : String
    },
    ProductName : {
        type : String
    },
    ProductType : {
        type : String
    },    
    ProductPrice : {
        type : Float
    },
    ProductQuantity : {
        type : Number
    },    
});

module.exports = mongoose.model('products',MySchema)