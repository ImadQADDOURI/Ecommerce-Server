const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");


router.get("/getproducts",async(red,res)=>{
try {
    const productsdata = await Products.find();
    console.log("***************************************************** router.get(getproducts) "+productsdata);
    res.status(201).json(productsdata);
} catch (error) {
    console.log(error.message);
}

})




module.exports = router;