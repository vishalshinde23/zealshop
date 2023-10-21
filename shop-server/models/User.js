const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
type:String,
enum:["Admin","Shopper","Customer"],
    },
    token:{
        type:String,

    },
    resetPasswordExpires:{
        type:Date,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
   },
   shops:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
    },
   ],
    image:{
        type:String,
        required:true,
    },

}
);
module.exports = mongoose.model("user", userSchema);