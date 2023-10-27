import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import  Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/HomeData/auth/OpenRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import bg from "./assets/Images/bg.jpg"
import VerifyEmail from "./pages/VerifyEmail";
import Error from "./pages/Error"
import PrivateRoute from "./components/core/HomeData/auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/settings";
import AddShop from "./components/core/Dashboard/AddShop"
import Cart from "./components/core/Dashboard/Cart"
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import EditShop from "./components/core/Dashboard/EditShop"
import SearchData from "./components/core/HomeData/SearchData";
import Footer from "./components/common/Footer"
import ShopperData from "./components/core/Dashboard/ShopperShops/ShopperData";
import ViewShop from "./pages/ViewShop"
import ItemData from "./components/core/ShopView/ItemData";
import { setShopSectionData } from "./slices/viewShopSlice";
import shopSection from "./components/core/Dashboard/ShopperCourses/shopSection";
import ShopperCourses from "./components/core/Dashboard/ShopperCourses";
import MyShops from "./components/core/Dashboard/MyShops";
import EditSection from "./components/core/Dashboard/EditSection"
function App() {
  const {user}=useSelector((state)=>state.profile)
  return (
   <div className="w-screen min-h-screen  flex flex-col text-white 
   bg-rose-900  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="catalog/:catalogName" element={<Category/>} />
      <Route path="search/:itemName" element={<SearchData/>} />
      <Route path="/contact" element={<Contact/>}/>
      
      <Route path="cart" element={<Cart/>}/>
       
       <Route
       path="signup"
       element={
        <OpenRoute>
          <Signup/>
        </OpenRoute>
       }>

       </Route>
       <Route
       path="login"
       element={
        <OpenRoute>
          <Login/>
        </OpenRoute>
       }>

       </Route>
       <Route
       path="verify-email"
       element={
        <OpenRoute>
          <VerifyEmail/>
        </OpenRoute>
       }>

       </Route>

       <Route element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile/>} />
      <Route path="dashboard/settings" element={<Settings/>} />
{
  user?.accountType===ACCOUNT_TYPE.SHOPPER && (
    <>
    <Route path="dashboard/add-shop" element={<AddShop/>}/>
    <Route path="dashboard/Shopper" element={<ShopperData/>}/>
    <Route path="dashboard/my-shop" element={<MyShops/>}/>
    <Route path="dashboard/edit-shop/:shopId" element={<EditShop/>}/>
    <Route path="dashboard/full-shop/:shopId" element={<ShopperCourses/>}/>
    <Route path="dashboard/edit-Section/:shopId/section/:sectionId/sectionName/:sectionName" element={<EditSection/>}/>
    
    </>
  )
}
{
  user?.accountType===ACCOUNT_TYPE.CUSTOMER && (
    <>
     
    </>
  )
}



          </Route>

          <Route element={
      <PrivateRoute>
        <ViewShop/>
      </PrivateRoute>
    }>
      {
         user?.accountType===ACCOUNT_TYPE.CUSTOMER && (
          <>
          <Route
          path="view-shop/:shopId/section/:sectionId/sub-section/:subSectionId"
          element={<ItemData/>}
          />
          </>
        )
      }
      

    </Route>   
       <Route path="*" element={<Error/>}/>
    </Routes>
    
    
   </div>
  );
}

export default App;
