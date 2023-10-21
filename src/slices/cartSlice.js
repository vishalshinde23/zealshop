import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState={
    cart:localStorage.getItem("cart") 
    ? JSON.parse(localStorage.getItem("cart"))
    :[],
    total:localStorage.getItem("total")
    ?JSON.parse(localStorage.getItem("total"))
    :0,
    totalItems:localStorage.getItem("totalItems")
    ?JSON.parse(localStorage.getItem("totalItems")):0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          const shop=action.payload
          const index=state.cart.findIndex((item)=>item._id===shop._id)

          if(index>=0){
            toast.error("Shop already in cart")
            return
          }
         state.cart.push(shop)
          state.totalItems++
         state.total+=shop.price
         localStorage.setItem("cart",JSON.stringify(state.cart))
         localStorage.setItem("total",JSON.stringify(state.total))
         localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
         // show toast
         toast.success("Shop added to cart")
        },
        removeFromCart:(state,action)=>{
            const shopId=action.payload
            const index=state.cart.findIndex((item)=>item._id===shopId)
            if(index>=0){
                state.totalItems--
                state.total-=state.cart[index].price
                state.cart.splice(index,1)
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
                toast.success("shop removed from cart")
            }
        },
        resetCart:(state)=>{
            state.cart=[]
            state.total=0
            state.totalItems=0
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        },
    },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer