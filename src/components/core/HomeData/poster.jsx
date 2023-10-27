import React from 'react'
import img1 from "../../../assets/Images/twomwnbg.png"
import img2 from "../../../assets/Images/menbg.png"
import girlr1 from "../../../assets/Images/girlr1.png"
import girl1 from "../../../assets/Images/girl1.jpg"
import girl2 from "../../../assets/Images/girl2.jpg"
import men1 from "../../../assets/Images/men1.jpg"
import "./poster.css"

const poster = () => {
  return (
    <div className="bg-rose-900   w-full h-[650px] p-4">
      <div className=' w-11/12 h-full mx-auto flex  bg-gradient-to-r from-fuchsia-800  via-blue-200  to-sky-400 glass  gap-10 justify-center    rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] '>
       
        <div className='translate-x-[-70px] relative  '>
        <div>
        <img src={men1} className='w-[120px] user-image  h-[120px] object-cover
        rounded-full ml-[-125px] translate-x-[-80px] mt-12 shadow-[inset_-12px_-8px_40px_#46464620] translate-z-64   hover:scale-110 transition-0.1s border-[4px] border-white '/>
        </div>
        <div> <img src={girlr1} className=' w-[420px]  user-image z-10 rounded-xl  h-[470px] object-cover  ml-[-125px] translate-x-[-100px] mt-[-115px] translate-z-64  shadow-[inset_-12px_-8px_40px_#46464620] hover:scale-110 transition-0.1s  border-white '/></div>
        {/* <div> <img src={''} className=' user-image  w-[90px]    h-[90px] object-cover  rounded-full translate-x-[-135px]   ml-[150px] mt-[-100px] translate-z-64  shadow-[inset_-12px_-8px_40px_#46464620] hover:scale-110 transition-0.1s border-[4px] border-white '/></div> */}
        <div className='user-image  p-2 rounded-md flex flex-col translate-x-[-190px] gap-2  mt-[-10px] ml-[-100px] z-10 translate-y-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
            <p className='w-full   text-4xl text-bold text-lime-400'>
                The ZealShop Inc. 
             
                
            </p>
            <span className='text-lime-300 text-center font-mono'>  This is best online shop for cloths </span> 
        </div>
        </div>
        <div className='absolute icon-zigzag w-[440px] h-[440px]  translate-x-[500px] translate-y-12 translate-z-64  bg-gradient-to-r from-pink-200 to-red-800 flex items-center justify-center rounded-full shadow-[inset_-12px_-8px_40px_#46464620] '>
         
           
            
        </div>
        <img src={img1} className="absolute   translate-y-[0px] translate-x-32 translate-z-64   w-[480px] h-full   "/>
        <div className='flex flex-col gap-14 mb-5 translate-y-[170px] translate-x-44  '>
            <p className='w-[170px] btn-post  bg-cyan-400 px-6 rounded-md flex flex-col  gap-2  text-2xl text-bold font-extralight text-yellow-900  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
              Get higher discounts
            </p>
            <p className='w-[190px] btn-post  bg-lime-400 px-6 rounded-md flex flex-col gap-2  text-2xl text-bold text-yellow-900 font-semibold  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
              Always a new fashion 
            </p>
        </div>
      </div>
    </div>
  )
}

export default poster
