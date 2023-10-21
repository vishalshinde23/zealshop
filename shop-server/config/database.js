const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB conncetion succesful")).catch((error)=>{
        console.log("DB connection Issues");
        console.log(error);
        process.exit(1);
    });
}