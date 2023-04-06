require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const app = express();

require('./DB/conn');


const port = 8005;


app.listen(port,()=>{console.log("server runing on port "+ port ); });