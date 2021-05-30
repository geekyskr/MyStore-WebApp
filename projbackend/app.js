require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("database connected");
}).catch(() => {
    console.log("database connection failed");
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
});
