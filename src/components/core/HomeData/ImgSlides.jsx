import React from 'react'
import scroll1 from "../../../assets/scrollImg/scroll1.avif"
import scroll2 from "../../../assets/scrollImg/scroll2.jpg"
import scroll3 from "../../../assets/scrollImg/scroll3.jpg"
import scroll4 from "../../../assets/scrollImg/scroll11.jpg"
// import scroll5 from "../../../assets/scrollImg/scroll12.jpg"
// import scroll6 from "../../../assets/scrollImg/scroll13.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img_Card from './Img_Card'
// import {Autoplay ,FreeMode,Pagination} from "swiper
const ImgSlides = () => {
  return (
    <>
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => // console.log(swiper)}
      // onSlideChange={() => // console.log('slide change')}
      className='flex gap-2'
    >
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-SponsorCarouselBanner-Z3-P2-Snitch-min60-1.jpg`} className='rounded-md hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-SponsorCarouselBanner-Z3-P1-Mns-min30-1.jpg`} className='rounded-md hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-TopBrandBanner-Z3-P8-campussutratomhiddle-min65.jpg`} className='rounded-md hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-TopBrandBanner-Z3-P9-UCBUSPA-flat45.jpg`} className=' rounded-md hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      ...
    </Swiper>

   
    </>
  )
}

export default ImgSlides
