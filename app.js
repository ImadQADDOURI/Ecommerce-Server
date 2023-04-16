require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const app = express();
const cors = require('cors');

require('./DB/conn');

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");


app.use(express.json());
app.use(cors());



const port = 8005;


app.listen(port,()=>{console.log("server runing on port "+ port ); });


DefaultData;