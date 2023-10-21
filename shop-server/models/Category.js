const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    shops:[{
              type:mongoose.Schema.Types.ObjectId,
              ref:"Shop",
    },],
   
})
module.exports = mongoose.model("Category", categorySchema);