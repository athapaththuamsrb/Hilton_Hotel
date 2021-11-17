const express = require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser')
require("dotenv").config();
const cors=require("cors");
const UserRoute = require('./route/UserRouter');
const ClerkRoute = require('./route/ClerkRouter');
const RoomRoute = require('./route/RoomRouter');
const PORT=process.env.SERVER_PORT;
const app=express();


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/HiltonHotel')
    .then(()=>{
        app.listen(PORT,()=>{console.log(`Hilton hotel service up and running on ${PORT}`)});
    })
    .catch((error)=>{ console.log(error);});

app.use('/api/v1/user',UserRoute);
app.use('/api/v1/clerk', ClerkRoute);
app.use('/api/v1/room', RoomRoute);