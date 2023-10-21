const RatingAndReviews=require("../models/RatingAndReviews");
const Shop=require("../models/Shop");
const {mongo,default:mongoose}=require("mongoose");

exports.createRating=async(req,res)=>{
    try{
    const userId=req.user.id;
    const {rating ,review,shopId}=req.body;
    const shopDetails=await Shop.findOne({
        _id:shopId,
        customerAdd:{
            $elemMatch:{$eq:userId}
        }

    });

    if(!shopDetails){
        return res.status(400).json({
            success:false,
            message:"customer data is not added  in the store "
        });
    }
   const alreadyReviewed=await RatingAndReviews({
    user:userId,
    shop:shopId,
   },);

   if(alreadyReviewed){
    return res.status(403).json({
        success:false,
        message:"Shop is already is reviewed by the user"
    });
   }
      
   const ratingReview=await RatingAndReviews.create({
    rating,review,shop:shopId,
    user:userId,
       
   });

      const updateShopDetails=await Shop.findByIdAndUpdate({_id:shopId},{
        $push:{
              ratingAndReviews:ratingReview._id,
        }

      },{new:true});
       
      // console.log(updateShopDetails);

      return res.status(200).json({
        success:true,
        message:"Rating and Review created Successfully",
        ratingReview,
      })



    }
    catch(error){
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


exports.getAverageRating=async(req,res)=>{
    try{

       const shopId=req.body;
        const result=await RatingAndReviews.aggregate([
            {
                $match:{
                      shop:new mongoose.Types.ObjectId(shopId),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating:{
                        $avg:"$rating"
                    },
                }
            }
        ])

        if(result.length >0){
            return res.status(200).json({
                success:true,
                averageRating:result[0].averageRating,
            })
        }
        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
        })
    }catch(error){
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.getAllRating=async(req,res)=>{
    try {
        const allReviews=await RatingAndReviews.find({}).sort({rating:"desc"})
        .populate({
            path:"user",
            select:"firstName lastName email image",
        }).populate({
            path:"shop",
            select:"itemName"
        }).exec();
        return res.status(200).json({
            success:true,
            message:"All reviews fetched successfully",
            data:allReviews,
        });
        
        
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
}