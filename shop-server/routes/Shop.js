const express=require("express");
const router=express.Router();
const {auth,isShopper,isCustomer,isAdmin}=require("../middlewares/auth");


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const {
    createShop,
    getAllShops,
    getShopDetails,
    getFullShopDetails,
    editShop,
    getShopperShops,
    deleteShop,
}=require("../controllers/Shop");


router.post("/createShop",auth,isShopper,createShop);
router.get("/getAllShops", getAllShops)
router.delete("/deleteShop", deleteShop)
router.post("/editShop", auth, isShopper, editShop)
// Get Details for a Specific Courses
router.post("/getShopDetails", getShopDetails)
// Get Details for a Specific Courses
router.post("/getFullShopDetails", auth,getFullShopDetails)
router.get("/getShopperShops", auth, isShopper, getShopperShops)



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



const {
    showAllCategory,
    createCategory,
    categoryPageDetails,
}=require("../controllers/Category");

router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategory)
router.post("/getCategoryPageDetails", categoryPageDetails)

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const {
    createSection,
    updateSection,
    deleteSection,
}=require("../controllers/Sections");




router.post("/addSection",auth,isShopper,createSection);

router.post("/updateSection",auth,isShopper,updateSection);

router.post("/deleteSection", auth, isShopper, deleteSection)

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const{
    createSubSection,
    updateSubSection,
    deleteSubSection,
}=require("../controllers/SubSections");

router.post("/updateSubSection", auth, isShopper, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isShopper, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isShopper, createSubSection)


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const {
    createRating,
    getAverageRating,
    getAllRating

}=require("../controllers/RatingAndReviews");



router.post("/createRating", auth, isCustomer, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const {
    updateShopStore
}=require("../controllers/ShopStore");
router.post("/updateShopStore",auth,isCustomer,updateShopStore);







// Get all Registered Courses


// Edit Course routes

// Get all Courses Under a Specific Instructor

// Delete a Course



// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************


module.exports = router