const {Mongoose}=require("mongoose");
const Category=require("../models/Category");

function getRandomInt(max){
    return Math.floor(Math.random()*max)
}

exports.createCategory=async(req,res)=>{
    try{
     const {name,description}=req.body;
     if(!name){
        return res.status(400).json({
            success: false, message: "All fields are required"
        })
     }
     const CategoryDetails=await Category.create({
        name: name,
			description: description,
     })
     // console.log(CategoryDetails);
     return res.status(200).json({
         success: true,
         message: "Categorys Created Successfully",
     });
    }
    catch(error)
    {
        return res.status(500).json({
			success: true,
			message: error.message,
		});
    }
}
exports.showAllCategory = async (req, res) => {
	try {
        // console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};


exports.categoryPageDetails=async(req,res)=>
{
    try {
        const {categoryId}=req.body;
        // console.log("printing catgory ID:",categoryId);

        const selectedCategory=await Category.findById(categoryId)
        .populate({
            path:"shops",
           populate:{
            path:"shopContent",
            populate:{
                path:"subSection"
            }
           }
          
            
        })
        
          
        .exec()
      if(!selectedCategory){
        // console.log("Category not found.")
        return res
          .status(404)
          .json({ success: false, message: "Category not found" })
      }

    //  if(selectedCategory.shops.length===0){
    //     // console.log("No Shops found for the selected category.")
    //     return res.status(404).json({
    //       success: false,
    //       message: "No Shops found for the selected category.",
    //     })
    //  }

    

    const allCategories = await Category.find()
    .populate({
      path: "shops",
      
      populate: {
        path: "shopper",
    },
    })
     
     .exec()

    

     res.status(200).json({
        success:true,
        data:{
            selectedCategory,allCategories
           
        },
     })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
          })
    }
}