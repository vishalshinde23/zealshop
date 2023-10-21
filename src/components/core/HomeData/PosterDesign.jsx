import React from 'react'
import bigSale from "../../../assets/homeImg/bigsale.jpg"
import  images from "../../../assets/homeImg/images.jpg"
import imgbox from "../../../assets/homeImg/imgbox.jpg"
import poster1 from "../../../assets/homeImg/poster1.jpg"
import poster2 from "../../../assets/homeImg/poster2.jpg"

const PosterDesign = () => {
  return (
    <div className='w-full h-full '>
      <div>
      <img src={images} className='w-full  h-full object-cover
       '/>
      </div>
    </div>
  )
}

export default PosterDesign
