import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { addToCart } from '../../../slices/cartSlice'
import { ACCOUNT_TYPE } from '../../../utils/constants'
import { useNavigate } from 'react-router-dom'
const ShopSubSection = ({subSec}) => {
   const{token}=useSelector((state)=>state.auth)
   const {user}=useSelector((state)=>state.profile)
   const navigate=useNavigate()
   const dispatch=useDispatch()
    const handleShare=()=>
    {
        copy(window.location.href)
        toast.success("Link copied to clipboard")
    }

    const handleAddToCart=()=>{
        if(user && user?.accountType===ACCOUNT_TYPE.SHOPPER){
            toast.error("You are an ShopOwner. you Can't by this item")
            return
        }
        if(token){
            dispatch(addToCart(subSec))
        }
        navigate("/login")
    }
     
//  // console.log("this is subSectionCard",subSec)
  return (
    <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-6 px-8 rounded-md border-[1px] border-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
    '>
     <div className='w-full mx-auto p-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md  border-[1px] border-white'>
     <img src={subSec?.imageUrl}
     />
     </div>
     <div className='flex justify-between  mt-4 text-black '>
        <p className='font-bold text-xl'>{subSec?.title}</p>
        <p className=''>{subSec?.price}.Rs</p>
     </div>
     <div>
        <p className='text-black text-center mt-4'>
            {
               subSec?.description
            }
        </p>
        <p onClick={handleAddToCart}
        className='bg-yellow-400 text-black p-2 mx-auto mt-4 text-center rounded-md border-[1px] border-white '>
        Add To Cart
        </p>
     </div>
    </div>
  )
}

export default ShopSubSection
