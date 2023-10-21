const ShopStore=require("../models/ShopStore");
const SubSection = require("../models/SubSection");

exports.updateShopStore=async(req,res)=>{
    
        const{shopId,subSectionId}=req.body;
        const userId=req.user.id;
try{
  const subSection=await SubSection.findById(subSectionId);
     
   if(!subSection){
    
        return res.status(404).json({error:"Invalid SUbSection"});

   }

   // // // console.log("SubSection validation done");
   let shopStore=await ShopStore.findOne({
    shopID:shopId,
      userID:userId,

   },)
   if(!shopStore){
    return res.status(404).json({
        success:false,
        message:"ShopStore Does not exist",
    });
   }
   ShopStore.Allpurchase.push(subSectionId);
   // // // console.log("Course  Progress Push Done");
    
   await shopStore.save();


   return res.status(200).json({
    success:true,
    message:"shopStore Updated successfully",
   })
      
    }catch(error){
        // // // console.error(error);
        return res.status(400).json({error:"Internal Server Error"});
    }
}