import React from 'react'

import {  useSelector } from 'react-redux/es/hooks/useSelector';
import SideBar from '../components/core/Dashboard/SideBar';
import Spinner from '../components/common/Spinner';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
   const {loading:authLoading}=useSelector((state)=>state.auth)
   const {loading:profileLoading}=useSelector((state)=>state.profile);

   if(profileLoading || authLoading){
   <div className='mt-10'>
     <Spinner/>
   </div>
   }
  return (
    <div className=' flex flex-col gap-x-4 '>
   <div className=' flex bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-800 via-indigo-800 to-red-800  text-white gap-x-2   h-[60px] border-t-[1px] w-[100%]  border-t-white'>
   <SideBar />
   </div>
   
      <div className='flex flex-col w-8/12 h-full mx-auto '>            
      <Outlet />
      </div>
    
  </div>
  )
}

export default Dashboard
