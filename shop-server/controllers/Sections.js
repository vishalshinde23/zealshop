const Section=require("../models/Section");
const Shop=require("../models/Shop");
const SubSection=require("../models/SubSection");

exports.createSection=async(req,res)=>{
    try{
      const {sectionName,shopId}=req.body;

      if(!sectionName || !shopId){
        return res.status(400).json({
            success:false,
            message:"Missing Required Properties",
        });
      }

      const newSection=await Section.create({sectionName});


      const updatedShop=await Shop.findByIdAndUpdate(shopId,{
        $push:{
            shopContent:newSection._id,
        },
      },{
        new:true
      })
      .populate({
        path:"shopContent",
        populate:{
            path:"subSection",
        },
      },)
      .exec();
     
      res.status(200).json({
        success: true,
			message: "Section created successfully",
			updatedShop,
      });

    }catch(error){
res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
    }
}

exports.updateSection=async(req,res)=>{
    try {
        const {sectionName,sectionId,shopId}=req.body;
        const section=await Section.findByIdAndUpdate(sectionId,{
            sectionName
        },{new:true});

        const shop=await Shop.findById(shopId).populate({
            path:"shopContent",
             populate:{
                path:"subSection",
             },
        },)
        .exec()
        res.status(200).json({
            success:true,
            message:section,
            data:shop
        })
    } catch (error) {
        // console.log("Error updating section:",error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
        });
    }
};

exports.deleteSection=async(req,res)=>{
    try {
        const{sectionId,shopId}=req.body;
        await Shop.findByIdAndUpdate(shopId,{
            $pull:{
                shopContent:sectionId
            }
        })
        const section=await Section.findById(sectionId);
        // console.log(sectionId,shopId);
        if(!section){
            return res.status(404).json({
                success:false,
                message:"Section not Found",
            })
        }

        await SubSection.deleteMany({
            _id:
            {
              $in:section.subSection
            }
        });

    

        await Section.findByIdAndDelete(sectionId);

        const shop=await Shop.findById(shopId).populate({
            path:"shopContent",
             populate:{
                path:"subSection"
             }
        })
        .exec();


        res.status(200).json({
               success:true,
               message:"Section deleted",
               data:shop
        });

    } catch (error) {
        // console.log("Error deleting section:",error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
        });
    }
};