const Mprod = require('../modules/products.models');
exports.create = async (req , res) => {

    // if ( !req.body.ProductID) {

    // }

    const prod = new Mprod ({
        ProductID : req.body.ProductID,
        ProductName : req.body.ProductName,
        ProductQuantity : req.body.ProductQuantity,
        ProductPrice : req.body.ProductPrice,
        ProductImage : req.body.ProductImage,
    });

    // save prod into DB

    await prod 
    .save()
    .then((data) => {
        res.status(201).send({data});
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || 'test error'
        });
    });
};


exports.findAll = (req , res ) => {

    Mprod.find({}, (err, products) => {
        if (err) {
          res.status(500).send({ message: err.message || "Error occurred while retrieving products." });
        } else {
          res.send(products);
        }
      });
}

exports.findOne = (req , res ) => {
    const id = req.params.id;
    Mprod.findById(id, (err, product) => {
      if (err) {
        res.status(500).send({ message: "Error retrieving product with id=" + id });
      } else if (!product) {
        res.status(404).send({ message: "Product not found with id=" + id });
      } else {
        res.send(product);
      }
    });

}

exports.update = (req , res ) => {
    const id = req.params.id;
    if (!req.body) {
      return res.status(400).send({ message: "Data to update can not be empty!" });
    }
    Mprod.findByIdAndUpdate(id, req.body, { useFindAndModify: false }, (err, product) => {
      if (err) {
        res.status(500).send({ message: "Error updating product with id=" + id });
      } else if (!product) {
        res.status(404).send({ message: "Product not found with id=" + id });
      } else {
        res.send({ message: "Product was updated successfully." });
      }
    });
}

exports.delete = (req , res ) => {
    const id = req.query.id;
    Mprod.findByIdAndRemove(id, { useFindAndModify: false }, (err, product) => {
      if (err) {
        res.status(500).send({ message: "Could not delete product with id=" + id });
      } else if (!product) {
        res.status(404).send({ message: "Product not found with id=" + id });
      } else {
        res.send({ message: "Product deleted successfully." });
      }
    });
}


//controller