const express = require('express')
const prod = require('../controllers/products.controller')
const router =express.Router();

router.post('/add_product',prod.create) ; 
router.get('/:id',prod.findOne) ; 
router.get('/',prod.findAll) ; 
router.patch('/:id',prod.update) ; 
router.delete('/delete',prod.delete) ; 






module.exports = router;






// routes 




















