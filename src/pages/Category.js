import React, { useEffect, useState } from 'react'
import { getCatalogaPageData } from '../services/operations/pageAndComponentData'
import { apiConnector } from '../services/apiconnector'
import { useParams } from 'react-router-dom'
import { ShowAllCategories } from '../services/operations/ShopDetailsApi'
import { categories } from '../services/apis'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import ShopSubDataCard from '../components/core/categoryData/ShopSubDataCard'
import Error from "./Error"
import Footer from '../components/common/Footer'

const Category = () => {
  const {loading}=useSelector((state)=>state.profile)
  const{catalogName}=useParams();
  // // // console.log(catalogName)
  const [active,setActive]=useState(1)
  const [catalogPageData,setCatalogPageData]=useState(null)
  const [categoryId,setCategoryId]=useState("")
  const[subData,setSubData]=useState([]);
  const[category, setCategory]=useState([])
  const[subSecData,setsubSecData]=useState([])

  useEffect(()=>{
    const getCategories=async()=>{
      const res=await ShowAllCategories()
      // // // console.log("this is res from category",res);
      
      const category_id = 
      res?.data?.data?.filter((ct) => ct.name.split(" ").join("-") === catalogName)[0]._id;
      setCategoryId(category_id);
      // // console.log("this is the category of this navbar data",categoryId)
      
    }
  getCategories();
  },[catalogName])
 
  useEffect(()=>{
    const getCategoriesDetails=async()=>{
      try {
        const res=await getCatalogaPageData(categoryId);
        // // // console.log("Printing res",res);
        setCatalogPageData(res);
      


         
        

          if(res?.data?.selectedCategory?.name === catalogName){
        res?.data?.selectedCategory?.shops?.map((info)=>{
           
           

          info?.shopContent?.map((card)=>{
            let data=0
            data=+card.sectionName
            setCategory(data)
            // // console.log("this is sectionName",category)

            setSubData(card)
            // setsubSecData(subData?.subSection)
            // // console.log("this is subSecData",card)
          })
        })
        
      }
      else{
        setsubSecData(null)
      }
        
     
       
        
      } catch (error) {
        // // console.log(error)
      }
    }
    if(categoryId){
      getCategoriesDetails()
    }
  },[categoryId])

  if(loading || !catalogPageData){
    return(
      <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
       <div className='spinner'>

       </div>
      </div>
    )
  }
 if(!loading && !catalogPageData){
  return <Error/>
 }
  


  return (
    <div className='box-content bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600 px-4 '>
  <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg-max-w-maxContent">
    <p className='text-sm '>{`Home/Category`}
    <span className='text-yellow-200'>
      {
        catalogPageData?.data?.selectedCategory?.name
      }
    </span>
    </p>
    <p className='text-3xl text-black-5'>{
      catalogPageData?.data?.selectedCategory?.name
    }

    </p>
    <p className='text-3xl text-richblack-5'> {catalogPageData?.data?.selectedCategory?.name} </p>
    <p className='max-w-[870px] text-richblack-200'> {catalogPageData?.data?.selectedCategory?.description}</p>
   
    </div>     
    <div>
      <p className="text-black font-bold text-3xl">
        {
          subData?.sectionName
        }
        
      </p>
        
      <div className="text-textHead   px-7 py-6 font-semibold grid grid-cols-3 place-items-center gap-4">
          {subData?.subSection?.map((subSec, i) => {
            return <ShopSubDataCard subSec={subSec} key={i} />
          })}
        </div>
      </div> 
  
  {/* <Footer/> */}
    </div>
  )
}

export default Category

