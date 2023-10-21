const Section=require("../models/Section");

const SubSection=require("../models/SubSection");

const {uploadImageToCloudinary}=require("../utils/imageUploader");

exports.createSubSection=async(req,res)=>{
    try{
       const{sectionId,title,description,price}=req.body;
       const image=req.files.image

       if(!sectionId  ){
          return res.status(404).json({
            success:false,
            message:"sectionId Fields are Required"
          })
       }
       if(!title){
          return res.status(404).json({
            success:false,
            message:"title Fields are Required"
          })
       }
       if(!description   ){
          return res.status(404).json({
            success:false,
            message:"description Fields are Required"
          })
       }
       if(!price   ){
          return res.status(404).json({
            success:false,
            message:"price Fields are Required"
          })
       }
       if( !image  ){
          return res.status(404).json({
            success:false,
            message:"image Fields are Required"
          })
       }
       
       console.log(image)

       const uploadDetails=await uploadImageToCloudinary(
        image,
        process.env.FOLDER_NAME
       )
       console.log(uploadDetails)

       const SubSectionDetails=await SubSection.create({
        title:title,
        description:description,
        price:price,
        imageUrl:uploadDetails.secure_url,
       })

       const updatedSection=await Section.findByIdAndUpdate(
          {_id:sectionId},
          {$push:{
            subSection:SubSectionDetails._id
          }},
          {new:true}
       ).populate("subSection")

       return res.status(200).json({
         success:true,
         data:updatedSection
       })

    }
    catch(error){
 console.error("Error creating new sub-section:", error)
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
}

exports.updateSubSection=async(req,res)=>{
    try {
        const {sectionId,title,description,price}=req.body;
        const subSection=await SubSection.findById(sectionId);

        if(!subSection){
            return res.status(404).json({
                success:false,
                message:"SubSection not found",
            })
        }

        if(title !==undefined){
            subSection.title=title
        }
        if(price !==undefined){
            subSection.price=title
        }
        if(description !==undefined){
            subSection.description=description
        }
        if(req.files && req.files.image !== undefined){
            const image=req.files.image
            const uploadDetails=await uploadImageToCloudinary(image,process.env.FOLDER_NAME)
            subSection.imageUrl=uploadDetails.secure_url
            
        }
        await subSection.save();
    } catch (error) {
        console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
    }
}

exports.deleteSubSection=async(req,res)=>{
    try {
        const {subSectionId,sectionId}=req.body;
         await Section.findByIdAndUpdate(
            {_id:sectionId},
            {
                $pull:{
                    subSection:subSectionId
                },
            }
         )
         const subSection=await SubSection.findByIdAndDelete({_id:subSectionId})

         if(!subSection){
            return res.status(404).json({
                success:false,
                message:"SubSection not found"
            })
         }

         return res.json({
            success:true,
            message:"Subsection deleted successFully",
         })
    } catch (error) {
        console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
}