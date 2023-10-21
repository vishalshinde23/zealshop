import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchShopperShops } from '../../../../services/operations/ShopDetailsApi'
import { getShopperData } from '../../../../services/operations/profileAPI';
import {FiEdit2} from "react-icons/fi"

import { Link, useNavigate,useParams } from 'react-router-dom';
// import Shoppershops from '../Shoppershops/Shoppershop.jsx';

export default function ShopperData() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    const {shopId}=useParams()
    const [instructorData, setInstructorData] = useState(null)
    const [shops, setshops] = useState([])
  
    useEffect(() => {
      ;(async () => {
        setLoading(true)
        const instructorApiData = await getShopperData(token)
        const result = await fetchShopperShops(token)
        console.log(instructorApiData)
        if (instructorApiData.length) setInstructorData(instructorApiData)
        if (result) {
          setshops(result)
        }
        setLoading(false)
      })()
    }, [shopId])
  
    // const totalAmount = instructorData?.reduce(
    //   (acc, curr) => acc + curr.totalAmountGenerated,
    //   0
    // )
  
    // const totalStudents = instructorData?.reduce(
    //   (acc, curr) => acc + curr.totalStudentsEnrolled,
    //   0
    // )
  
    return (
      <div>
        <div className="space-y-2 mt-[10px]">
          <h1 className="text-4xl font-bold text-richblack-5 ">
            Hi {user?.firstName} 👋
          </h1>
          <p className="font-medium text-richblack-200">
            Let's start something new
          </p>
        </div>
        {loading ? (
          <div className="spinner"></div>
        ) : shops.length > 0 ? (
          <div>
            
              {/* Render chart / graph */}
              
              {/* Total Statistics */}
              <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Statistics</p>
                <div className=" flex items-center gap-8    mt-4 space-y-4">
                 
                    <p className="text-lg text-richblack-200">Total Shops</p>
                    <p className="text-2xl font-semibold text-richblack-50 mt-[-40px]">
                      {shops.length}
                    </p>
                  </div>
                 
                  
                
             
            </div>
            <div className="rounded-md  p-6 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 mb-6 border-[1px] border-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"  >
              {/* Render 3 shops */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-richblack-5">Your Shops</p>
                <Link to="/dashboard/my-shop">
                  <p className="text-xs font-semibold text-yellow-50">View All</p>
                </Link>
              </div>
              <div className="my-4 flex items-start space-x-6  ">
                {shops.slice(0,3).map((shop) => (
                  <div key={shop._id} className="w-1/3">
                    <img
                      src={shop.thumbnail}
                      alt={shop.itemName}
                      className="grid grid-cols-3 h-[201px] w-full rounded-md object-cover"
                    />
                    <div className="mt-3 w-full flex justify-between">
                      <p className="text-sm font-medium text-richblack-50">
                        {shop.itemName}
                      </p>
                      <button
                  disabled={loading}
                  onClick={() => {
                    navigate(`/dashboard/full-shop/${shop._id}`)
                  }}
                  title="Edit"
                  className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                >
                  <FiEdit2 size={20} />
                </button>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
            <p className="text-center text-2xl font-bold text-richblack-5">
              You have not created any shops yet
            </p>
            <Link to="/dashboard/add-shop">
              <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
                Create a shop
              </p>
            </Link>
          </div>
        )}
      </div>
    )
  }