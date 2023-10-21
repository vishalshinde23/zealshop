const jwt=require("jsonwebtoken");
require("dotenv").config();
const user=require("../models/User");

exports.auth = async (req, res, next) => {
    try{

        console.log("BEFORE ToKEN EXTRACTION");
        //extract token
        const token = req.cookies.token 
                        || req.body.token 
                        || req.header("Authorization").replace("Bearer ", "");
        console.log("AFTER ToKEN EXTRACTION");

        //if token missing, then return response
        if(!token) {
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }

        
        //verify the token
        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err) {
            //verification - issue
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(error) {  
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}

exports.isShopper = async (req, res, next) => {
    try{

        console.log("Printing AccountType ", req.user.accountType);
           if(req.user.accountType !== "Shopper") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Shopper only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }

exports.isCustomer = (req,res,next) => {
    try{
            if(req.user.accountType !== "Customer") {
                return res.status(401).json({
                    success:false,
                    message:'THis is a protected route for Customer',
                });
            }
            next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User Role is not matching',
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try{

        console.log("Printing AccountType ", req.user.accountType);
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message:'THis is a protected route for admin',
            });
        }
        next();
}
catch(error) {
    return res.status(500).json({
        success:false,
        message:'User Role is not matching',
    })
}
}