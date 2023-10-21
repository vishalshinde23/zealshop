const mongoose=require('mongoose');
const subSectionSchema=new mongoose.Schema({
  title:{
       type:String,
  },
  description:{
      type:String,
  },
  price:{
    type:String,
  },
  imageUrl:{
    type:String,
  }
})
module.exports = mongoose.model("SubSection", subSectionSchema);
