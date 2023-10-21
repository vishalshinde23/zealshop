import React from 'react'
import signup from "../assets/Images/signup.png"
import LoginForm from '../components/core/HomeData/auth/LoginForm'

const Login = () => {
  return (
    <div className='w-7/12 h-full  flex  border-white border-[1px]    mx-auto  mt-10 rounded-md    '>
     <div>
      <img src={signup}
      className='w-[400px] h-full'/>
     </div>
     <div className='w-6/12 h-maxContent  rounded-md '>
     <LoginForm />
     </div>
    </div>
  )
}

export default Login
