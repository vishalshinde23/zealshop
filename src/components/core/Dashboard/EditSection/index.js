import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
 import {updateSection}  from "../../../../services/operations/ShopDetailsApi"

 import {setShop,setEditShop}  from "../../../../slices/shopSlice"
 import AddShop from '../AddShop'
 import RenderSteps from '../AddShop/RenderSteps'

export default function EditShop() {
    const dispatch=useDispatch()
    const {shopId}=useParams()
    const{sectionId}=useParams()
    const {sectionName}=useParams()
    const {shop}=useSelector((state)=>state.shop)
    // console.log("this is shop of edit shop",shop);
    const[loading,setLoading]=useState(false)
     const {token}=useSelector((state)=>state.auth)

     useEffect(()=>{
        ;(async()=>{
            setLoading(true)
            const result=await updateSection({shopId,sectionId,sectionName},token)
            // console.log("this is result of this section ",result)
            if(result){
                dispatch(setEditShop(true))
                dispatch(setShop(result))
            }
            setLoading(false)
        })()
     },[])
     if(loading){
        return (
        <div className="grid flex-1 place-items-center">
            <div className='spinner'></div>

        </div>
        )
     }
  return (
    <div>
        <h1  className="mb-14 text-3xl font-medium text-richblack-5">
            Edit Shop
        </h1>
        <div className="mx-auto max-w-[600px]">
            {shop ?(
                <RenderSteps/>
            ):(<p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
                No shops Found
            </p>)}
        </div>
      
    </div>
  )
}



