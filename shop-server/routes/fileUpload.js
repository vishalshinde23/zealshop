const express=require("express");
const router=express.Router();

const {localfilesUpload,imageUpload}=require("../controllers/fileUpload");

router.post("/localfilesUpload",localfilesUpload);
router.post("/imageUpload",imageUpload);

module.exports=router;