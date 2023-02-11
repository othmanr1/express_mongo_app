const express = require('express')
const router =express.Router();


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