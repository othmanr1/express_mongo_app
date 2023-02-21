const Mprod = require('../modules/products.models');
exports.create = async (req , res) => {

    // if ( !req.body.ProductID) {

    // }

    const prod = new Mprod ({
        ProductID : req.body.ProductID,
        ProductName : req.body.ProductName,
    });

    // save prod into DB

    await prod 
    .save()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || 'test error'
        });
    });
};


//controller