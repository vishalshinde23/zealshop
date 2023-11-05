import React, { useEffect } from 'react'
import logo from "../../assets/Logo/shopLogo1.png";
import { NavbarLinks } from "../../data/navbar-links"
import { useState } from 'react';
import {Link,matchPath,useLocation} from  "react-router-dom";
import { BsChevronDown } from "react-icons/bs"
import { ShowAllCategories } from '../../services/operations/ShopDetailsApi';
import { categories } from '../../services/apis';
import { ACCOUNT_TYPE } from "../../utils/constants"
import {BsSearch} from "react-icons/bs";
import ProfileDropDown from '../core/HomeData/auth/ProfileDropDown';
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux';
import { apiConnector } from '../../services/apiconnector';
import SearchArea from "../core/HomeData/SearchArea"
import "../core/HomeData/poster.css"
const Navbar = () => {
  const {user}=useSelector((state)=>state.profile)
  const{token}=useSelector((state)=>state.auth)
  const {totalItems}=useSelector((state)=>state.cart)
  const location=useLocation();

  const[subLinks,setSubLinks]=useState([])
  const[loading,setLoading]=useState(false)

 
    
  useEffect(()=>{
    const getCategories=async()=>{
      setLoading(true)
      try{
      const res=await apiConnector("GET",categories.CATEGORIES_API)
      // console.log("this is navbar api",res);
      setSubLinks(res?.data?.data)
      // console.log("this is the category data",subLinks)
      }
      catch(error){
        // console.log("could not fetch Catgories",error)
      }
      setLoading(false);
    }
    getCategories();
  },[])
    

    const matchRoute=(route)=>{
        return matchPath({path:route},
        location.pathname)
    }

  return (
    <div>
        <div className='flex justify-between bg-stone-700 text-center w-full align-center  h-[70px]   pl-4'>
            <div className='mt-[-10px]'>
                <Link to="/">
                    <img src={logo} className='h-[100px] w-[100px] '/>
                </Link>
            </div>
            <nav className="hidden md:block">
          <ul className="flex gap-x-12 text-black mt-6 ">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
               <>
              <div
           className={`group relative flex cursor-pointer items-center gap-1 text-2xl ${
           matchRoute("/catalog/:catalogName")
                   ? "text-yellow-300"
                : "text-black"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000]   w-[300px] translate-x-[-50%]  translate-y-[3em] flex  gap-4 text-center rounded-lg bg-gray-900  text-black opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[400px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-100 "></div>
                        { loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                             
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                   }`}
                                  className="  rounded-lg  text-center bg-transparent px-6 py-4 hover:bg-gray-700"
                                  key={i}
                                >
                                  <p className='text-white text-xl  text-center w-full'>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Categories Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-200 text-2xl"
                          : "text-gray-200 text-2xl"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <SearchArea/>
        </nav>
          <div className="hidden items-center ml-8 pr-8 gap-x-6 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.SHOPPER && (
            <Link to="/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null  && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
         
        </div>
        
    </div>
  )
}

export default Navbar
