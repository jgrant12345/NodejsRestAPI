const express = require("express");
const mongoose = require("mongoose")
const app = express();

require('dotenv/config')


// import Routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute);




// routes
app.get('/',(req,res) =>{
    res.send("hello world")
})

// Connect to DB
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true, useUnifiedTopology: true },console.log("connected to DB"))

//start listening to server
app.listen(3000, console.log("server started"))
