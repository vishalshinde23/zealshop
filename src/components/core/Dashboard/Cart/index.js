import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
// import ReactStars from "react-rating-stars-component"
 import {removeFromCart} from "../../../../slices/cartSlice"
const Cart = () => {
  const {cart,totalItems,total} =useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  // // console.log("this is cart",cart)
  return (
    <div className=" w-full min-h-[100vh] bg-gradient-to-r from-yellow-400 via-pink-800 to-yellow-400 ">
      <div className="flex flex-1 flex-col gap-4 p-4  ">
      {cart.map((item, indx) => (
        <div
          key={item._id}
          className={`flex flex-1 bg-gradient-to-r from-yellow-400 via-pink-800 to-yellow-400  rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-10/12 mx-auto  p-2 gap-4 ${
            indx !== cart.length - 1 && "border-b border-black "
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={item?.imageUrl}
              alt={item?.title}
              className="h-[300px] w-[220px] rounded-lg object-cover bg-yellow-200 p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-3xl  mt-10 text-center font-medium text-green-500">
                {item?.title}
              </p>
              <p className="text-xl text-red-400">
                {item?.description}
              </p>
             
            </div>
          </div>
          <div className="flex flex-col  mr-[300px] mt-[140px] space-y-2">
            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="flex items-center gap-x-1 rounded-md border border-black bg-yellow-500 py-3 px-[12px] text-pink-200 hover:bg-red-500"
            >
              <RiDeleteBin6Line className='text-zinc-900 font-bold' />
              <span className='text-zinc-900 font-bold '>Remove</span>
            </button>
            <p className="mb-6 text-3xl font-medium text-black">
              ₹ {item?.price}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cart
