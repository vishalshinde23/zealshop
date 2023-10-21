import { toast } from "react-hot-toast"

import { updateAllPurchase } from "../../slices/viewShopSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector"
import { shopEndpoints } from "../apis"
import {categories} from "../apis"

const {
  SHOP_DETAILS_API,
  SHOP_CATEGORIES_API,
  GET_ALL_SHOP_API,
  CREATE_SHOP_API,
  EDIT_SHOP_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_SHOPPER_SHOPS_API,
  DELETE_SHOP_API,
  GET_FULL_SHOP_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  SHOP_STORE_API,
  CATEGORIES_API
} = shopEndpoints




export const getAllShops=async()=>{
  const toastId=toast.loading("Loading....")
  let result=[]

  try {
    const response=await apiConnector("GET",GET_ALL_SHOP_API)
    if(!response?.data?.success){
      throw new Error("could not fetch Shop Categories")
    }
    result=response?.data?.data
  } catch (error) {
    // console.log("GET_ALL_SHOP_API API ERROR............", error)
    toast.error(error.message)
  }
toast.dismiss(toastId)
return result
}

export const fetchShopDetails = async (shopId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", SHOP_DETAILS_API, {
      shopId,
    })
    // console.log("SHOP_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    // console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const fetchShopCategories=async()=>{
  let result=[]
  try {
     const response=await apiConnector("GET",SHOP_CATEGORIES_API)

     // console.log("SHOP_CATEGORIES_API API RESPONSE",response)
     if(!response?.data?.success){
      throw new Error(
      "could not fetch Shop categories"
      )
     }
     result=response.data.data
  } catch (error) {
    // console.log("SHOP_CATEGORIES_API API ERROR............", error)
    toast.error(error.message)
  }
  return result
}

export const addShopDetails=async(data,token)=>{
  let result=null
  let toastId=toast.loading("Loading....")
  try {
    let response=await apiConnector("POST",CREATE_SHOP_API,data,{
      "Content-Type":"multipart/form-data",
      Authorization:`Bearer ${token}`,
    })
    // console.log('CREATE_SHOP_API RESPONSE',response)
    if(!response?.data?.success){
      throw new Error("Could Not Add Shop Details")
    }
    toast.success("Shop Details Added SuccessFully");

    result=response?.data?.data
  } catch (error) {
    // console.log("CREATE SHOP API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId);
   return result
}

export const editShopDetails=async(data,token)=>{
  let result=null
  let toastId=toast.loading("...Loading")
  try {
    let response=await apiConnector("POST",EDIT_SHOP_API,data,{
      "Content-type":"multipart/form-data",
      Authorization:`Bearer${token}`
    })
    // console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update SHOP Details")
    }
    toast.success("SHOP Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    // console.log("EDIT SHOP API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
export const createSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("CREATE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Section")
    }
    toast.success("Course Section Created")
    result = response?.data?.updatedShop
  } catch (error) {
    // console.log("CREATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
export const createSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("CREATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add shop")
    }
    toast.success("shop Added")
    result = response?.data?.data
  } catch (error) {
    // console.log("CREATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const updateSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("UPDATE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Section")
    }
    toast.success("Shop Section Updated")
    result = response?.data?.data
  } catch (error) {
    // console.log("UPDATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const updateSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("UPDATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update shop")
    }
    toast.success("shop Updated")
    result = response?.data?.data
  } catch (error) {
    // console.log("UPDATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("DELETE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section")
    }
    toast.success("Course Section Deleted")
    result = response?.data?.data
  } catch (error) {
    // console.log("DELETE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const deleteSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("DELETE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete shop")
    }
    toast.success("shop Deleted")
    result = response?.data?.data
  } catch (error) {
    // console.log("DELETE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchShopperShops = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_SHOPPER_SHOPS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    // console.log("SHOPPER COURSES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses")
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("SHOPPER COURSES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteShop=async(data,token)=>{
  const toastId=toast.loading("Loading.....")
  try {
    const response=await apiConnector("DELETE",DELETE_SHOP_API,data,{
      Authorization:`Bearer ${token}`
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Delete shop")
    }
    toast.success("Shop Deleted")
  } catch (error) {
    // console.log("DELETE SHOP API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export const getFullDetailsOfShop = async (shopId,token) => {
  let result=[]
  const toastId=toast.loading("Loading...")
  try {
    const response=await apiConnector("POST",GET_FULL_SHOP_DETAILS_AUTHENTICATED,{
      shopId
    },{
   Authorization:`Bearer ${token}`,
    })
    // console.log("COURSE_FULL_DETAILS_API API RESPONSE this is the full shop ............", response)

  if(!response.data.success){
    throw new Error("could not fetch Shop categories")
    
  }
  result=response?.data?.data
  } catch (error) {
    // console.log("Some error occured in shop api ",error)
    // console.log(error.message);
  }
  toast.dismiss(toastId)
  return result
}

export const updateShopStore=async(data,token)=>{
let result=null
let toastId=toast.loading("Loading.....")
try {
  const response = await apiConnector("POST", SHOP_STORE_API, data, {
    Authorization: `Bearer ${token}`,
  })
  // // console.log(
  //   "SHOP_STORE_API API RESPONSE............",
  //   response
  // )

  if (!response.data.message) {
    throw new Error(response.data.error)
  }
  toast.success("shop Completed")
  result = true
} catch (error) {
  // console.log("SHOP_STORE_API API ERROR............", error)
    toast.error(error.message)
    result = false
}
toast.dismiss(toastId)
  return result
}

export const createRating=async(data,token)=>{
  const toastId=toast.loading("Loading....")
   let success=false
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    // console.log("CREATE RATING API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return success
}
export const ShowAllCategories=async()=>{
  const toastId=toast.loading("Loading....")
  let result=[]

  try {
    const response=await apiConnector("GET",CATEGORIES_API)
    // console.log("this is response of navbar api",response)
    if(!response?.data?.success){
      throw new Error("could not fetch Shop Categories")
    }
    result=response
  } catch (error) {
    // console.log("GET_ALL_SHOP_API API ERROR............", error)
    toast.error(error.message)
  }
toast.dismiss(toastId)
return result
}
