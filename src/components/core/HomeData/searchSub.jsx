// import React from 'react'
// import { useState ,useEffect} from 'react';
// import { useSelector,useDispatch } from 'react-redux';
//   import { getAllShops } from '../../../services/operations/ShopDetailsApi';
// import { useParams } from 'react-router-dom';
// import copy from "copy-to-clipboard"
// import { toast } from "react-hot-toast"
// import { addToCart } from '../../../slices/cartSlice'
// import { ACCOUNT_TYPE } from '../../../utils/constants'
// import { useNavigate } from 'react-router-dom'
// import ShopSubSection from './SearchSubSection';
// const SearchSub = () => {
//     const{token}=useSelector((state)=>state.auth)
//    const {user}=useSelector((state)=>state.profile)
//     const[img,setImg]=useState();
//     const {itemName}=useParams()
//     // console.log("this is itemNAme",itemName)
// //   const[data,setData]=useState([]);
//   const[subData,setSubData]=useState([]);
//   const[searchData,setSearchData]=useState([])
//   const[loading,setLoading]=useState(false);
//   const navigate=useNavigate()


  

   

//   const showContent=async()=>{;
//     setLoading(true)
//      const shopData=await getAllShops();
//       // console.log("this is all Shops",shopData);

//       shopData.map((info)=>{
//         info?.shopContent?.map((item)=>{
//         // console.log(item?.sectionName);
//         // // console.log("this is the subSection",item?.subSection)
//         if(item?.sectionName?.toLowerCase()===itemName){
//           setSubData(item?.subSection)
//           let result=[]
//          subData.forEach((card)=>(
//           setSearchData(card)
//          ))
//         //  setSubData(result)
//        // console.log("this is subData",result)

//         // 
//         //    item?.subSection.map((card)=>{
//         //    setSubData(card)
//         //    
//         //    })
        
//         }
//         else{
//             <p>No items found</p>
//         }
//       })
//       })
    
    
    
//   setLoading(false);

//   }
//   useEffect(()=>{
//     showContent();
//   },[])
  
//   return (
//     <div className="text-textHead px-7 py-6 font-semibold grid grid-cols-3 place-items-center gap-4">
//     {subData?.map((subSec, i) => {
//       return <ShopSubSection subSec={subSec} key={i} />
//     })}
//   </div>
     
//   )
// }

// export default SearchSub
