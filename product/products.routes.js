const express = require('express')
const prod = require('../controllers/products.controller')
const router =express.Router();

router.post('/add_product',prod.create)


router.get('/' , (req,res)=>{
    res.send('product one ');
});

router.get('/1' , (req,res)=>{
    res.send('product two');
});

router.get('/2' , (req,res)=>{
    res.send('product three ');
});


module.exports = router;






// routes 




















