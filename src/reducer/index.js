import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import shopReducer from "../slices/shopSlice";
import viewShopReducer from "../slices/viewShopSlice";
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";
const  rootReducer=combineReducers({
    auth:authReducer,
    shop:shopReducer,
    viewShop:viewShopReducer,
    profile:profileReducer,
    cart:cartReducer

});
export default rootReducer




