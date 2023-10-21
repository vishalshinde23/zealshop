import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import {toast} from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import {
  addShopDetails,
  editShopDetails,
  fetchShopCategories
} from "../../../../../services/operations/ShopDetailsApi"

import {setShop,setStep} from  "../../../../../slices/shopSlice"

import IconBtn from "../../../../common/IconBtn"
import Upload from "../Upload"
// import ChipInput from "./ChipInput"
// import RequirementsField from "./RequirementField"
const ShopInformation = () => {
  const {
    register,handleSubmit,setValue,getValues,formState:{errors},
  }=useForm()

  const dispatch=useDispatch()
  const {token}=useSelector((state)=>state.auth)
  const {shop,editShop}=useSelector((state)=>state.shop)
  const[loading,setLoading]=useState(false)
  const[shopCategories,setShopCategories]=useState([])

  useEffect(()=>{
    const getCategories=async()=>{
      setLoading(true)
      const categories = await fetchShopCategories()
      if (categories.length>0) {
        // // console.log("categories", categories)
        setShopCategories(categories)
      }
      setLoading(false)
    }
    if(editShop){
      setValue("shopTitle",shop.itemName)
      setValue("shopShortDesc",shop.itemDescription)
      setValue("shopCategory",shop.category)
      // setValue("shopTags",shop.tag)
      setValue("shopImage",shop.thumbnail)
    }
    getCategories()
  },[])

  const isformUpdated=()=>{
    const currentValues=getValues()
    if(
      currentValues.shoptitle !==shop.itemName || currentValues.shopShortDesc!==shop.itemDescription ||
      currentValues.shopCategory!==shop.category  ||currentValues.shopImage !== shop.thumbnail
    ){
      return true
    } return false
  }
  

  const onSubmit=async(data)=>{
    if(editShop){
      if(isformUpdated()){
        const currentValues=getValues()
        const formData=new FormData()
        formData.append("shopId",shop._id)
        if(currentValues.shoptitle !==shop.itemName){
          formData.append('itemName',data.shopTitle)
        }
        if(currentValues.shopShortDesc !== shop.itemDescription){
          formData.append("itemDescription",data.shopShortDesc)
        }
        if(currentValues.shopCategory!==shop.category){
          formData.append("category",data.shopCategory)
        }
       
        if(currentValues.shopImage!==shop.thumbnail){
          formData.append("thumbnailImage",data.shopImage)
        }
        setLoading(true)
        const result=await editShopDetails(formData,token)
        setLoading(false)
        if(result){
          dispatch(setStep(2))
          dispatch(setShop(result))
        }}
        else{
          toast.error("No changes made to the form")
        }
        return
      }

      const formData=new FormData()
      formData.append("itemName",data.shopTitle)
      formData.append("itemDescription",data.shopShortDesc)
      formData.append("category",data.shopCategory)
     
      formData.append("thumbnailImage",data.shopImage)
      setLoading(true)
      const result=await addShopDetails(formData,token)
      if(result){
        dispatch(setStep(2))
        dispatch(setShop(result))
      }
      setLoading(false)
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)}
   className="space-y-4 rounded-md border-[1px] border-white bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500  p-6 mb-10">
    <div className="flex flex-col space-y-2">
      <label htmlFor="shopTitle">
        Shop Title <sup>*</sup>

      </label>
      <input type="text"
      id="shopTitle"
      placeholder='enter shop Title'
      {
        ...register("shopTitle",{required:true})
      }
      className='p-2 rounded-md text-black'
    />
    {
      errors.shopTitle && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
       Shop title is required
      </span>
      )
    }
    </div>
    <div className="flex flex-col space-y-2">
      <label htmlFor="shopShortDesc">
        Shop Description <sup>*</sup>

      </label>
      <input type="text"
      id="shopShortDesc"
      placeholder='enter shop Title'
      {
        ...register("shopShortDesc",{required:true})
      }
      className='p-2 rounded-md text-black'
    />
    {
      errors.shopShortDesc &&(
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        Shop Description is required
      </span>
      )
    }
    </div>
    <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseCategory">
          Shop Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("shopCategory", { required: true })}
          defaultValue=""
          id="shopCategory"
          className="form-style w-full p-2 text-black rounded-md"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            shopCategories?.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.shopCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Shop Category is required
          </span>
        )}
      </div>
    {/* <ChipInput
    label="Tags"
    name="ShopTags"
    placeholder="Enter Tags and press Enter"
    register={register}
    errors={errors}
    setValue={setValue}
    getValues={getValues}
    /> */}
  <Upload
  label="Thumbnail"
  name="shopImage"
  register={register}
  errors={errors}
  setValue={setValue}
  editData={editShop ?shop?.thumbnail :null }
  />
  <div className='flex justify-end gap-x-2'>
    {editShop &&(
    <button onClick={()=>{
      dispatch(setStep(2))
    }}
    disabled={loading}
    className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}>
        Continue Without Saving
    </button>
    )}
    <IconBtn disabled={loading}
    text={!editShop ?"Next" :"save Changes"}>
      <MdNavigateNext />
    </IconBtn>
    </div>
  

   </form>
  )
}

export default ShopInformation
