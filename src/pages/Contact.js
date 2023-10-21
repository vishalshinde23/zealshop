import React from 'react'
import Footer from '../components/common/Footer'

const Contact = () => {
  return (
    <div>
      <div className='w-[80%] flex flex-col align-center justify-center mx-auto    ' >
      <p className='text-4xl font-semibold text-center mt-4  text-black    '>Please chat with us </p>

      <div className='w-[60%] h-[screen-10px] flex flex-col align-center justify-center  mx-auto mt-8 p-4 border-[1px]  border-white   bg-gradient-to-r from-zinc-500 bg-stone-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-black gap-4 mb-6 rounded-md ' >
     <div className='flex  gap-4 w-full '>
     <div className='flex flex-col w-full gap-2' >
       <label className='text-xl font-semibold'>
        FirstName
        </label>
        <input type="text"
        placeholder='enter your firstName'
        className='p-2 rounded-md outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
        required/>
       
      
      </div>
      <div className='flex flex-col ml-6 w-full gap-2' >
       <label className='text-xl font-semibold'>
        LastName
        </label>
        <input type="text"
        placeholder='enter your firstName'
        className='p-2 rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
        required/>
       
      
      </div>
     </div>
     <div  className='flex flex-col w-full gap-2'>
      <label className='text-xl font-semibold'>Contact Number</label>
      <input type="text"
      placeholder='enter your contact number'
      className='p-2 rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
      required/>
     </div>
     <div  className='flex flex-col w-full gap-2'>
      <label className='text-xl font-semibold'>Email Address</label>
      <input type="text"
      placeholder='enter your contact number'
      className='p-2 rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
      required/>
     </div>
    <div  className='flex flex-col gap-2 '>
    <label className='text-xl font-semibold'>
      Message
     </label>
     <textarea
     cols="30"
     rows="7"
     placeholder='write your doubt'
     className='resize-none rounded-md py-2 pl-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'/>
    </div>
    <button className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 text-xl w-[30%] mx-auto p-2 rounded-md font-semibold'>Send Message</button>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
