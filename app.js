const express = require('express');
require('dotenv/config');
const port = process.env.PORT
const app = express();



app.get('/', (req, res) => {
  res.send('fs202!!')
})



app.listen(port,()=>{
  console.log(`Im working on  ${port}`);
});