const Shop=require("../models/Shop");
const Category=require("../models/Category");
const Section=require("../models/Section");
const SubSection=require("../models/SubSection");
const User=require("../models/User");
const {uploadImageToCloudinary}=require("../utils/imageUploader");
const ShopStore=require("../models/ShopStore");
const {mongo,default:mongoose}=require("mongoose");

exports.createShop=async(req,res)=>{
try {
    const userId=req.user.id;

    let {
        itemName,
        itemDescription,
        
        category }=req.body;
    const thumbnail = req.files.thumbnailImage

    if(!itemName || !itemDescription  || !category || !thumbnail){
        return res.status(400).json({
            success:false,
            message:'All Fields are mandatory',
        })
    }
    const shopperDetails=await User.findById(userId,{
        accountType:"Shopper"
    })

    if(!shopperDetails){
        return res.status(400).json({
            success:false,
            message:"Shopper Details Not Found",
        })
    }
    const categoryDetails=await Category.findById(category);
    if(!categoryDetails){
        return res.status(404).json({
            success: false,
            message: "Category Details Not Found",
          })
    }
    const thumbnailImage=await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
    )
    // console.log(thumbnailImage);

    const newShop=await Shop.create({
        itemName,
        itemDescription,
        shopper:shopperDetails._id,
       
        thumbnail:thumbnailImage.secure_url,
        category:categoryDetails._id,
    })

     await User.findByIdAndUpdate({
        _id:shopperDetails._id,
     },{
        $push:{
           shops:newShop._id
        },
     },{
        new:true
     })

     const categoryDetails2=await Category.findByIdAndUpdate({_id:category},{
        $push:{
           shops:newShop._id,
        },
     },{new:true});

     // console.log("HERERuefgkdfb",categoryDetails2);
     res.status(200).json({
        success: true,
        data: newShop,
        message: "Shop Created Successfully",
      })
} catch (error) {
    // console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create Shop",
      error: error.message,
    })
}
}

exports.editShop=async(req,res)=>{
    try {
          const{shopId}=req.body;
          // const updates=req.body;
          const shop=await Shop.findById(shopId);
          if(!shop){
            return res.status(404).json({ error: "Course not found" })
          }
          if(req.files){
            // console.log("Thumbnail update")
            const thumbnail=req.files.thumbnailImage
            const thumbnailImage=await uploadImageToCloudinary(
                thumbnail,
                process.env.FOLDER_NAME
            )
            shop.thumbnail=thumbnailImage.secure_url
          }
         

          const updatedShop=await Shop.findOne({
            _id:shopId,
          })
          .populate({
            path:"shopper",
            populate:{
                path:"additionalDetails",
            },
          }).populate("category").populate("ratingAndReviews").populate({
            path:"shopContent",
            populate:{
                path:"SubSection",
            },
           
          }).exec()
          res.json({
            success: true,
            message: "Shop updated successfully",
            data: updatedShop,
          })

    } catch (error) {
        // console.error(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
    }
}

exports.getAllShops=async(req,res)=>{
  try {
    const allShops = await Shop.find(
      {})
      .populate("shopper")
      .populate({
        path: "shopContent",
        populate: {
          path: "subSection",
          
        },
      })
      .exec();

    return res.status(200).json({
      success: true,
      data: allShops,
    })
  } catch (error) {
    // console.log(error)
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Shop Data`,
      error: error.message,
    })
  }
}

exports.getShopDetails = async (req, res) => {
  try {
    const { shopId } = req.body
    const shopDetails = await Shop.findOne({
      _id: shopId,
    })
      .populate({
        path: "shopper",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "shopContent",
        populate: {
          path: "subSection",
          
        },
      })
      .exec()

    if (!shopDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not findshop with id: ${shopId}`,
      })
    }

 
    return res.status(200).json({
      success: true,
      data:
        shopDetails
        
      
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getFullShopDetails=async(req,res)=>{
    try {
      const {shopId}=req.body;
      const userId=req.user.id
       
    const shopDetails=await Shop.findOne({
        _id:shopId,
    })
    .populate({
      path:"shopper",
      populate:{
        path:"additionalDetails",
      },
    })
    .populate("category")
    .populate("ratingAndReviews").
    populate({
      path:"shopContent",
     
        populate:{
          path:"subSection",
         
     
      },
    })
    .exec()
    if (!shopDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find shop  ${shopId}` 
        })
      }
    return res.status(200).json({
        success: true,
        data: 
        shopDetails,
          
      })
    } catch (error) {
        return res.status(500).json({
          success: false,
          message: error.message,
        })
    }
}

exports.getShopperShops=async(req,res)=>{
    try {
        const shopperId=req.user.id;

        const shopperShops=await Shop.find({
            shopper:shopperId,
        }).sort({createdAt:-1})
        res.status(200).json({
            success: true,
            data: shopperShops,
          })
    } catch (error) {
        // console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve shopper courses",
      error: error.message,
    })
    }
}

exports.deleteShop=async(req,res)=>{
   try {
     const{shopId}=req.body;
     const shop=await Shop.findById(shopId);

     if(!shop){
        return res.status(404).json({ message: "shops not found" })
     }

     const customerAdd=shop.customerAdd 
     for(const customerId of customerAdd){
        await User.findByIdAndUpdate(customerId ,{
            $pull:{
            shops:shopId,
            },
        },)
     }

     const shopSections=shop.shopContent
     for(const sectionId of shopSections){
        const section=await Section.findById(sectionId)
        if(section){
            const subSections=section.subSection
            for(const SubSectionId of  subSections){
                await SubSection.findByIdAndDelete(SubSectionId)
            }
        }
        await Section.findByIdAndDelete(sectionId)
     }
    await Shop.findByIdAndDelete(shopId)

    
    return res.status(200).json({
        success: true,
        message: "Shop deleted successfully",
      })
   } catch (error) {
    // console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
   }
}