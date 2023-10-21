const User = require("../models/User");
const Shop=require("../models/Shop");
const Profile=require("../models/Profile");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
exports.updateDisplayPicture=async(req,res)=>{
    try {
        const displayPicture=req.files.displayPicture;
        const userId=req.user.id;
        const image=await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        // console.log(image);
        const updateProfile=await User.findByIdAndUpdate({_id:userId},{
            image:image.secure_url
        },{new:true})
        res.send({
            success:true,
            message:`Image Updated Successfully`,
            data:updateProfile
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
          })
    }
}

exports.updateProfile = async (req, res) => {
	try {
		const { dateOfBirth = "", about = "", contactNumber } = req.body;
		const id = req.user.id;

		// Find the profile by id
		const userDetails = await User.findById(id);
		const profile = await Profile.findById(userDetails.additionalDetails);

		// Update the profile fields
		profile.dateOfBirth = dateOfBirth;
		profile.about = about;
		profile.contactNumber = contactNumber;

		// Save the updated profile
		await profile.save();

		return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});
	} catch (error) {
		// console.log(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.deleteAccount = async (req, res) => {
	try {
		
		// console.log("Printing ID: ", req.user.id);
		const id = req.user.id;
		
		const user = await User.findById({ _id: id });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		// Delete Assosiated Profile with the User
		await Profile.findByIdAndDelete({ _id: user.additionalDetails });
		// TODO: Unenroll User From All the Enrolled Courses
		// Now Delete User
		await User.findByIdAndDelete({ _id: id });
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});
	} catch (error) {
		// console.log(error);
		res
			.status(500)
			.json({ success: false, message: "User Cannot be deleted successfully" });
	}
};

exports.getAllUserDetails=async(req,res)=>{
    try{
      const id=req.user.id;
      const getUserDetails=await User.findById(id).populate(additionalDetails).exec();
      // console.log(getUserDetails);
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: getUserDetails,
    });
    }catch(error){
        return res.status(500).json({
			success: false,
			message: error.message,
		});
    }
}

exports.ShopperDashboard=async(req,res)=>{
    try {
    const shopDetails=await Shop.find({shopper:req.user.id});

    const shopData=shopDetails.map((shop)=>{
         const totalCustomerAdd=shop.customerAdd.length

 

         const shopDataWithStats={
            _id:shop._id,
            itemName:shop.itemName,
            itemDescription:shop.itemDescription,
            totalCustomerAdd,
           
        }
        return shopDataWithStats
    })
     res.json({
        shops:shopData
     })
   
    } catch (error) {
        // console.error(error);
		res.status(500).json({message:"Internal Server Error"});
    }
}