const express=require("express");
const router=express.Router();
const { auth,isShopper } = require("../middlewares/auth");

const {
    deleteAccount,
    getAllUserDetails,
    ShopperDashboard,updateDisplayPicture,updateProfile
}=require("../controllers/Profile");

router.delete("/deleteProfile", deleteAccount)
router.get("/getUserDetails", auth,getAllUserDetails);
router.get("/ShopperDashboard", auth, isShopper, ShopperDashboard)
router.put("/updateDisplayPicture",auth,updateDisplayPicture)
router.put("/updateProfile", auth, updateProfile)

module.exports=router