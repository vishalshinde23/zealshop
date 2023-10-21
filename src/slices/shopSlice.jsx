import { createSlice } from "@reduxjs/toolkit";

const initialState={
    step:1,
    shop:null,
    editShop:false,

}

  const shopSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
    setStep:(state,action)=>{
        state.step=action.payload
    },
    setShop:(state,action)=>{
        state.shop=action.payload
    },
    setEditShop:(state,action)=>{
        state.editShop=action.payload
    },
    resetShopState: (state) => {
      state.step = 1
      state.shop = null
      state.editShop = false
    },
  },
    
  

  })

  export const{
    setStep,
    setShop,
    setEditShop,
    resetShopState,
  }=shopSlice.actions

  export default shopSlice.reducer