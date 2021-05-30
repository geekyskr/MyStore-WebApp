const express = require('express');

const app = express();


app.get('/', (req, res)=>{
  res.send("GET request on /");
})

const port = 8080;
app.listen(port, ()=>{
  console.log("Server is up and running at localhost:"+port);
})
