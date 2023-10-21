import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import {ImSearch} from 'react-icons/im';
// import bg
import{
  setShopSectionData,
  setEntireShopData,
  setTotalNoOfItems,
  setAllpurchase
}from "../slices/viewShopSlice"
import { getFullDetailsOfShop,fetchShopCategories,getAllShops } from '../services/operations/ShopDetailsApi';
import ShopReModel from "../components/core/ShopView/ShopReModel"
import ItemDetailsSide from "../components/core/ShopView/ItemDetailsSide"





export default function ViewShop(){
  const { shopId } = useParams()
  const { token } = useSelector((state) => state.auth)
 
  const dispatch = useDispatch()
  const [reviewModal, setReviewModal] = useState(false)
  
  useEffect(()=>{
    ;(async()=>{
      const shopData=await getAllShops()
      // // console.log("this is shop data of viewShop",shopData?.)
      dispatch(setShopSectionData(shopData.shopDetails.shopContent))
      dispatch(setEntireShopData(shopData.shopDetails))
      let items=0;
      shopData?.shopDetails?.ShopContent?.forEach((item)=>{
        items+=item.subSection.length
      })
      dispatch(setTotalNoOfItems(items))
    })()
  },[])
return (
  <div>
     <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <ItemDetailsSide setReviewModal={setReviewModal} />
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6 mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <ShopReModel setReviewModal={setReviewModal} />}
  </div>
)
}