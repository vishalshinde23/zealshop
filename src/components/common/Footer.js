import React from 'react'
import { Link } from "react-router-dom";

// Images
import logo from "../../assets/Logo/shopLogo1.png"

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const Resources = [
    "who we are",
    "join our team",
    "Tearms & conditions",
    "We respect your privacy",
    "fees & payment",
    "Refund policy",
    "promotions conditions",
    
  ]; 
  const Plans = ["Track you order", "Frequently asked questions ", "Returns","cancllations","payments","customer care"];
const ShopBy = ["Men", "Women", "Kids"];

const Footer = () => {
  return (
    <div>
       <div className="bg-black w-[100%]">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-[100%] max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14 px-20">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 bg-black">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row  justify-between lg:bg-black pl-3 lg:pr-5 gap-6">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={logo} alt="" className="object-contain" />
              <h1 className="text-white font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["ZealShop", "Help", "Shop-By"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-white transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div></div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-white font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
              Help
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-white transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-white font-semibold text-[16px] mt-7">
              ShopBy
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {ShopBy.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-white transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
         
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-white mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r bg-black cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">Made with ❤️ ZealShop © 2023 </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
