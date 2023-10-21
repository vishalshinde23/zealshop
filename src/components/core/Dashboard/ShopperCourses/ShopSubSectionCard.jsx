import React from 'react'
import BsFillFileImageFill from "react-icons/bs"
import LiaRupeeSignSolid from "react-icons/lia"

const ShopSubSectionCard = ({subSec}) => {
  // // console.log("this is ShopSubSectionCard",subSec?.imageUrl)
  return (
    <div className='  bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-8 px-12 rounded-md border-[1px] border-white
     '>
      <div className='w-full mx-auto p-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>
        
           
            
            <img
            src={subSec?.imageUrl}
            alt={subSec?.title}
            className='w-[400px] h-[250px] rounded-md object-cover'
            
            />
            <div className='flex justify-between'>
            <p className='bg-white rounded-md text-black m-2 p-2'>{subSec?.title}</p>
            <p className='bg-white rounded-md text-black m-2 p-2'>{subSec?.price}</p>
            
            </div>
            
        
      </div>
    </div>
  )
}

export default ShopSubSectionCard
