import React from 'react'
import signup from "../assets/Images/signup.png"
import SignUpform from '../components/core/HomeData/auth/SignUpform'

const Signup = () => {
  return (
    <div className='w-8/12 h-[100%] flex  border-white border-[1px]  mx-auto  mt-10 rounded-md    '>
     <div>
      <img src={signup}
      className='w-[500px] h-full'/>
     </div>
     <div className='w-6/12 h-maxContent  rounded-md  '>
     <SignUpform />
     </div>
    </div>
  )
}

export default Signup
