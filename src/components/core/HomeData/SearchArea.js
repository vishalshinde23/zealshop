import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {ImSearch} from 'react-icons/im';
import ShopSubSection from './SearchSubSection';
// import bg
import{
  setShopSectionData,
  setEntireShopData,
  setTotalNoOfItems,
  setAllpurchase
}from "../../../slices/viewShopSlice"
import { getAllShops } from '../../../services/operations/ShopDetailsApi';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchArea = () => {
  const[tag,setTag]=useState('')
  
  const navigate=useNavigate();
  
  const dispatch=useDispatch();

  



  return (
    <div className='w-full   flex flex-col justify-center items-end min-h-[10vh] ml-[220px] mt-[-50px]  '>
     
   <div className='flex justify-between text-center bg-white w-8/12 p-2 rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  text-xl text-black'>
    
   <input type="text"
    className='text-black outline-none w-full text-2xl'
   onChange={(event)=>setTag(event.target.value)}
   value={tag}

   
   
    />
     <ImSearch  onClick={()=>navigate(`/search/${tag.toLowerCase()}`)} className='text-2xl'/>
   </div>
   
    
   
    </div>
   
  )
}

export default SearchArea

