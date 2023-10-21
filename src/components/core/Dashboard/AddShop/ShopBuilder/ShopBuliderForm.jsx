import React from 'react'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import {createSection,updateSection} from "../../../../../services/operations/ShopDetailsApi"
import {setShop,setEditShop,setStep} from "../../../../../slices/shopSlice"
import IconBtn from "../../../../common/IconBtn"
import NestedView from './NestedView'
import { useNavigate } from 'react-router-dom'


const ShopBuliderForm = () => {
  const
{
  register,handleSubmit,setValue,formState:{errors},
}=useForm()
const navigate=useNavigate()
 const {shop}=useSelector((state)=>state.shop)
 const {token}=useSelector((state)=>state.auth)
 const[editSectionName,setEditSectionName]=useState(null)
 const [loading,setLoading]=useState(null)
 const dispatch=useDispatch()


 const onSubmit=async(data)=>{
   setLoading(true)
   let result

   if(editSectionName){

    result=await updateSection({
      sectionName:data.sectionName,
      sectionId:editSectionName,
      shopId:shop._id,
    },token)
   }else{
      result=await createSection({
        sectionName:data.sectionName,
        shopId:shop._id,
      },token)
   }
   if(result){
    dispatch(setShop(result))
    setEditSectionName(null)
    setValue("sectionName","")
   }
   setLoading(false)
 }

 const cancelEdit=()=>{
  setEditSectionName(null)
  setValue("sectionName","")
 }
 
 const handleChangeEditSectionName=(sectionId,sectionName)=>{
  if(editSectionName===sectionId){
    cancelEdit()
    return
  }
  setEditSectionName(sectionId)
  setValue("sectionName",sectionName)
 }

 const goToNext=()=>{
      if(shop.shopContent.length===0){
        toast.error("please add at least on section")
        return
      }
      if(shop.shopContent.some((section)=>section.subSection.length===0)){
        toast.error("please add atleast  one shop in each section")
        return 
      }
      dispatch(setStep(3))
 }
 const goBack=()=>{
     dispatch(setStep(1))
     dispatch(setEditShop(true))
 }
  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Shop Builder</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="sectionName">
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            disabled={loading}
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="form-style w-full"
          />
          {errors.sectionName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Section name is required
            </span>
          )}
        </div>
        <div className="flex items-end gap-x-4">
          <IconBtn
            type="submit"
            disabled={loading}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <IoAddCircleOutline size={20} className="text-yellow-50" />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
     
      <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
        
      
      {/* Next Prev Button */}
      <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onclick={goToNext}>
          <MdNavigateNext />
        </IconBtn>
        
      </div>
    </div>
  )
}

export default ShopBuliderForm
