const express = require("express");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config')
app.use(bodyParser.json())

// import Routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute);


// Connect to DB
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true, useUnifiedTopology: true },console.log("connected to DB"))

//start listening to server
app.listen(5000, console.log("server started"))
