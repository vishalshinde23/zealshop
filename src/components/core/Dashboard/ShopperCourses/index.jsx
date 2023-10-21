import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
// import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../../../common/ConfirmationModal"

import ShopSection from "./shopSection"
import ShopperSectionCard from "./ShopperSectionCard"
// import { formatDate } from "../services/formatDate"
import { fetchShopDetails,getFullDetailsOfShop } from "../../../../services/operations/ShopDetailsApi"
// import { buyCourse } from "../services/operations/studentFeaturesAPI"
// import GetAvgRating from "../utils/avgRating"
// import Error from "./Error"
 

function ShopperCourses() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  // const { paymentLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {shopId}=useParams()
  // // console.log("this is shopId",shopId);

  // Getting courseId from url parameter
 
  // // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null)
  const[image,setImage]=useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        const res = await fetchShopDetails(shopId)
        // // console.log("course details res: ", res)
        setImage(res?.data)
        
        setResponse(res?.data)
        // console.log("this is response of full shop data",response.thumbnail)
      } catch (error) {
        // console.log("Could not fetch ShopDetails")
      }
    })()
  },[shopId] )

  // // console.log("response: ", response)

  // Calculating Avg Review count
  // const [avgReviewCount, setAvgReviewCount] = useState(0)
  // useEffect(() => {
  //   const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
  //   setAvgReviewCount(count)
  // }, [response])
  // // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e != id)
    )
  }

  // Total number of shops
  // const [totalNoOfshops, setTotalNoOfshops] = useState(0)
  // useEffect(() => {
  //   let shops = 0
  //   response?.data?.courseDetails?.courseContent?.forEach((sec) => {
  //     shops += sec.subSection.length || 0
  //   })
  //   setTotalNoOfshops(shops)
  // }, [response])

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  // if (!response.success) {
  //   return <Error />
  // }

  // const {
  //   _id:shop_Id,
  //   itemName,
  //   itemDescription,
  //   thumbnail,
    
  //   shopContent,
  //   ratingAndReviews,
  //   shopper,
   
  // } = response.data?.shopDetails

  const handleBuyCourse = () => {
    // if (token) {
    //   buyCourse(token, [courseId], user, navigate, dispatch)
    //   return
    // }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  // if (paymentLoading) {
  //   // // console.log("payment loading")
  //   return (
  //     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
  //       <div className="spinner"></div>
  //     </div>
  //   )
  // }

  return (
    <>
      <div className="relative w-full mt-9 px-6 py-4 pt-[-20px] mx-auto bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 rounded-md border-[1px]  border-white  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
        
        {/* Hero Section */}
        <div className=" flex w-8/12  gap-10    lg:w-[1260px] 2xl:relative  
        ">
         
            <div className="relative block max-h-[30rem]   mt-8">
              
              <img src={response.thumbnail}
              alt="this is shopper image"
              className="w-[500px]  h-[350px] rounded-md border-[1px] border-white"/>
            </div>
            <div
              className={`z-30 my-5 flex flex-col justify-center gap-4 py-5  text-richblack-5`}
            >
              <div>
                <p className="text-xl font-bold text-richblack-5 sm:text-[42px]">
                  {response.itemName}
                </p>
              </div>
              <p className={`text-richblack-200`}>{response.itemDescription}</p>
              <div className="text-md flex flex-wrap items-center gap-2">
                {/* <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} reviews)`}</span>
                <span>{`${studentsEnrolled.length} students enrolled`}</span> */}
              </div>
              <div>
                <p className="">
                  Created By {`${response.shopper.firstName} ${response.shopper.lastName}`}
                </p>
              
              
            </div>
            
          </div>
          {/* Courses Card */}
         
        </div>
      </div>
      <div className="mx-auto box-content px-4 text-start mt-12 text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
         
          {/* Course Content Section */}
          <div className="max-w-[830px] ">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Shop Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2">
                  <span>
                    {response.shopContent.length} {`section(s)`}
                  </span>
                  
                  
                </div>
                
              </div>
            </div>
            
            {/* Shop Details Accordion */}
            <div className="py-4">
              {response.shopContent?.map((shop, index) => (
                <ShopperSectionCard
                  shop={shop}
                  key={index}
                  shopId={response._id}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={
                    response.shopper.image
                      ?response.shopper.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.shopper.firstName} ${response.shopper.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                /> 
                 <p className="text-lg">{`${response.shopper.firstName} ${response.shopper.lastName}`}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default ShopperCourses