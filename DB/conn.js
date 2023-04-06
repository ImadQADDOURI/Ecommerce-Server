const mongoose =require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("DB Connected")).catch((error)=>console.log(error.message));