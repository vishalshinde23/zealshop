import React from 'react'
import SearchArea from '../components/core/HomeData/SearchArea'
import bg from "../assets/Images/bg.jpg"
import PosterDesign from '../components/core/HomeData/PosterDesign'
import ImgSlides from '../components/core/HomeData/ImgSlides'
import ImgSlider from '../components/core/HomeData/ImgSlider'
import Footer from '../components/common/Footer'
import ViewShop from './ViewShop'

const Home = () => {
  return (
    <div  className='flex flex-col  gap-4'>
      
    {/* <ViewShop/> */}
   
  <div className='p-2'>

  <div className='p-4 '>
  <ImgSlider className="p-2"/>
  </div>

  
 
  <div className='p-4'>
  <ImgSlides className="p-2"/>
  </div>


  </div>
  <Footer/>
   
    </div>
  )
}

export default Home
