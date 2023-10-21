const mongoose=require("mongoose");

const storeSchema=new mongoose.Schema({
  itemName:{
    type:String
  },
  itemDescription:{
      type:String
  },
  shopper:{
       type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
  },
  shopContent:[{
           type:mongoose.Schema.Types.ObjectId,
           ref:"Section"
  },],
  ratingAndReviews:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    },
  ],
  price:{
    type:Number,
    
  },
  thumbnail:{
    type:String,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
  },
  customerAdd:[
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    },

  ],
})
module.exports=mongoose.model("Shop",storeSchema)