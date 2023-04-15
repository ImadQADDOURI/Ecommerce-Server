require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const app = express();

require('./DB/conn');

const Products = require("./models/productsSchema");
const Default


const port = 8005;


app.listen(port,()=>{console.log("server runing on port "+ port ); });