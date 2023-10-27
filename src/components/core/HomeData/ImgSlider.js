import React from 'react'
import scroll1 from "../../../assets/scrollImg/scroll1.avif"
import scroll2 from "../../../assets/scrollImg/scroll2.jpg"
import scroll3 from "../../../assets/scrollImg/scroll3.jpg"
import scroll4 from "../../../assets/scrollImg/scroll11.jpg"
import "./poster.css"
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
const ImgSlider = () => {
  return (
    <div className='bg-zinc-800 w-full h-[650px] p-16 py-12 rounded-lg gap-16  flex flex-col shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
       <div className='bg-neutral-200 gap-4   rounded-lg    shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={2}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => // console.log(swiper)}
      // onSlideChange={() => // console.log('slide change')}
      className='flex gap-4 bg-white'
    >
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-1-Mens-Upto80.jpg`} className=' p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-110 duration-200 transition-2s '/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-2-WomenWesternwear-Upto80.jpg`} className='  p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-3-WomenEthnicwear-Starting249.jpg`} className='  p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Yousta-Under999.jpg`} className='p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Yousta-Under999.jpg`} className='p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Yousta-Under999.jpg`} className='p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Avaasa-Siyahi-Fusion-Upto70.jpg`}className=' p-2  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Performax-Leecooper-Menswear-4070.jpg`} className=' p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      <SwiperSlide><img src={`https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Teamspirit-Frendz-Starting99.jpg`} className=' p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]hover:scale-110 duration-200 transition-2s'/></SwiperSlide>
      ...
    </Swiper>
       </div>
       <div className=' w-10/12 bg-sky-200 rounded-lg mx-auto p-6 text-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] '>
        <p className='  btn-pink '>
        You're worth it: shop our collection and feel great about your look. 
        </p>
        {/* <p>Elevate your everyday style with our fashion-forward clothing.</p>
        <p>Redefining the way you look at fashion.</p> */}
       </div>
   
    </div>
  )
}

export default ImgSlider
