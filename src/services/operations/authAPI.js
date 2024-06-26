import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
const url="http://localhost:4000/api/v2/auth/login"
const signupurl="http://localhost:4000/api/v2/auth/signup"
const otpurl="http://localhost:4000/api/v2/auth/sendotp"
const{
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API
}=endpoints

export function sendOtp(email,navigate){
  return async(dispatch)=>{
    const toastId=toast.loading("Loading....")
    dispatch(setLoading(true))
    try {
      const response=await apiConnector("POST",SENDOTP_API,{
        email,
        checkUserPresent:true,
      })

      // // console.log("SENDOTP API RESPONSE....",response);

      // // console.log(response.data.success)

      if(!response.data.success){
        throw new Error(response.data.message)
      }
      toast.success("OTP Sent SuccessFully");
      navigate("/verify-email");
    } catch (error) {
      // // console.log("SENDOTP API ERROR",error)
      toast.error("could not Send OTP");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function signUp(
  accountType,firstName,lastName,email,password,confirmPassword,otp,navigate
){
  return async(dispatch)=>{
    const toastId=toast.loading("Loading....")


    dispatch(setLoading(true))
    try{
      const response=await apiConnector("POST", SIGNUP_API,{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })
      // // console.log("SIGNUP API RESPONSE............",response)

      if(!response.data.success){
        throw new Error(response.data.message)
      }
      toast.success("Signup Successfull");
      navigate("/login");
    } catch(error){
      // // console.log("SIGNUP  API  ERROR......",error)
      toast.error("signup Failed");
      navigate("/signup")
    }
   dispatch(setLoading(false))
   toast.dismiss(toastId);

  }
}


export function login(email,password,navigate){
  return async (dispatch)=>{
    const toastId=toast.loading("Loading....")
    dispatch(setLoading(true))

    try {
      const response=await apiConnector("POST",LOGIN_API,{
        email,
        password,
      })

      // // console.log("LOGIN API RESPONSE.......",response)
      if(!response.data.success){  
        throw new Error(response.data.message)
      }
      toast.success("Login SuccessFul")
      dispatch(setToken(response.data.token))
      const userImage=response.data?.user?.image
      ?response.data.user.image
      :`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

      dispatch(setUser({...response.data.user,image:userImage}))

      localStorage.setItem("token",JSON.stringify(response.data.token))
      localStorage.setItem("user",JSON.stringify(response.data.user))
      navigate("/dashboard/my-profile")
    } catch (error) {
      // // console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate){
  return(dispatch)=>{
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

