const mongoose=require("mongoose");

const purchaseSchema=new mongoose.Schema({
    ShopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    },
    Allpurchase:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection",
        },
    ],
})
module.exports=mongoose.model("Purchase",purchaseSchema);