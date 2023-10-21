import { createSlice } from "@reduxjs/toolkit"

const initialState={
   shopSectionData:[],
   shopEntireData:[],
   AllPurchase:[],
   totalNoOfItems:0,

}

const viewShopSlice=createSlice({
    name:"viewSlice",
    initialState,
    reducers:{
        setShopSectionData:(state,action)=>{
            state.shopSectionData=action.payload
        },
        setEntireShopData:(state,action)=>{
            state.shopEntireData=action.payload
        },
        setTotalNoOfItems:(state,action)=>{
            state.totalNoOfItems=action.payload
        },
        setAllpurchase:(state,action)=>{
            state.AllPurchase=action.payload
        },
        updateAllPurchase:(state,action)=>{
             state.AllPurchase=[...state.AllPurchase,action.payload]
        },
    },
})

export const {
    setShopSectionData,
    setEntireShopData,
    setAllpurchase,
    setTotalNoOfItems,
    updateAllPurchase
    




} = viewShopSlice.actions

export default viewShopSlice.reducer