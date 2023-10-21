import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import {setShop,setEditShop} from "../../../../slices/shopSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

 
  import ConfirmationModal from "../../../common/ConfirmationModal"
import { deleteShop,fetchShopperShops } from '../../../../services/operations/ShopDetailsApi'
import { useDispatch, useSelector } from 'react-redux'
const ShopperTable = ({shops,setShops}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>state.auth)
    const[loading,setLoading]=useState(false)
    const[confirmationModal,setConfirmationModal]=useState(null)
    const TRUNCATE_LENGTH=30
    const handleShopDelete=async(shopId)=>{
        setLoading(true)
        await deleteShop({shopId:shopId},token)
        const result=await fetchShopperShops (token)
        if(result){
            setShops(result)
        }
        setConfirmationModal(null)
        setLoading(false)
    }
  return (
    <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 rounded-md'>
    <Table className="rounded-xl border  h-10/12 mt-12 mb-10   ">
      <Thead>
        <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
          <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
            Shops
          </Th>
          <Th className="text-left text-sm font-medium uppercase text-richblack-100">
            Duration
          </Th>
          <Th className="text-left text-sm font-medium uppercase text-richblack-100">
            Price
          </Th>
          <Th className="text-left text-sm font-medium uppercase text-richblack-100">
            Actions
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {shops?.length === 0 ? (
          <Tr>
            <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
              No Shops found
              {/* TODO: Need to change this state */}
            </Td>
          </Tr>
        ) : (
          shops?.map((shop) => (
            <Tr
              key={shop._id}
              className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
            >
              <Td className="flex flex-1 gap-x-4">
                <img
                  src={shop?.thumbnail}
                  alt={shop?.itemName}
                  className="h-[148px] w-[220px] rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-semibold text-richblack-5">
                    {shop.itemName}
                  </p>
                  <p className="text-xs text-richblack-300">
                    {shop.itemDescription.split(" ").length >
                    TRUNCATE_LENGTH
                      ? shop.itemDescription
                          .split(" ")
                          .slice(0, TRUNCATE_LENGTH)
                          .join(" ") + "..."
                      : shop.itemDescription}
                  </p>
                 
                 
                </div>
              </Td>
              <Td className="text-sm font-medium text-richblack-100">
                2hr 30min
              </Td>
             
              <Td className="text-sm font-medium text-richblack-100 ">
                <button
                  disabled={loading}
                  onClick={() => {
                    navigate(`/dashboard/edit-shop/${shop._id}`)
                  }}
                  title="Edit"
                  className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                >
                  <FiEdit2 size={20} />
                </button>
                <button
                  disabled={loading}
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Do you want to delete this shop?",
                      text2:
                        "All the data related to this shop will be deleted",
                      btn1Text: !loading ? "Delete" : "Loading...  ",
                      btn2Text: "Cancel",
                      btn1Handler: !loading
                        ? () => handleShopDelete(shop._id)
                        : () => {},
                      btn2Handler: !loading
                        ? () => setConfirmationModal(null)
                        : () => {},
                    })
                  }}
                  title="Delete"
                  className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
  </div>
  )
}

export default ShopperTable
