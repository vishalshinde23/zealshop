import React from 'react'
import *  as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { NavLink,matchPath,useLocation } from 'react-router-dom'
import { resetShopState } from '../../../slices/shopSlice'
const SidebarLink = ({link,iconName}) => {
    const Icon=Icons[iconName]
    const location=useLocation();
    const dispatch=useDispatch();
    const matchRoute=(route)=>{
        return matchPath({path:route},
            location.pathname)
    }
  return (
    <NavLink to={link.path}
    onClick={()=>dispatch(resetShopState())}
    className={`relative px-4 py-2 text-sm font-medium  ${
        matchRoute(link.path) ?" bg-yellow-800 text-yellow-50 px-4 py-2 h-full w-full"
        :"bg-opacity-0  text-white"
    } transition-all duration-200`}>
        <span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 rounded-[3px] ${
            matchRoute(link.path) ?
            "opacity-100":"opacity-0"
        }`}>

        </span>
        <div className='flex items-center gap-x-2 w-[100%] h-full '>
        <Icon className='text-lg'/>
        <span className='w-full flex'>{link.name}</span>
        </div>

        </NavLink>
  )
}

export default SidebarLink
