import React from 'react'
import SearchArea from '../components/core/HomeData/SearchArea'
import bg from "../assets/Images/bg.jpg"
import PosterDesign from '../components/core/HomeData/PosterDesign'
import ImgSlides from '../components/core/HomeData/ImgSlides'
import ImgSlider from '../components/core/HomeData/ImgSlider'
import Footer from '../components/common/Footer'
import ViewShop from './ViewShop'
import Poster from '../components/core/HomeData/poster'

const Home = () => {
  return (
    <div  className=''>
      <Poster/>
      
    {/* <ViewShop/> */}
    
   
  
  <ImgSlider />
 

  
 
  
  <ImgSlides />
  


  
  <Footer/>
   
    </div>
  )
}

export default Home
