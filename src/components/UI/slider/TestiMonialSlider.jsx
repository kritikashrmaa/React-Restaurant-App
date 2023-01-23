import React from 'react'
import Slider from "react-slick";
import '../../../styles/slider.css';

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

const TestiMonialSlider = () => {

   const settings={
      dots:true,
      autoplay:true,
      infinite:true,
      speed:1000,
      autoplaySpeed:3000,
      swipeToSlide:true,
      slidesToShow:1,
      slidesToScroll:1


   }
  return (
   <Slider {...settings}>

          {/* test-1 */}
          <div >
           <p className="review__text">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit aut porro asperiores
            recusandae ipsam fuga veniam nesciunt excepturi tempora magni.
           </p>
           <div className='slider__content d-flex align-items-center gap-3'>
            <img src={ava01} alt="avatar" className='w-25 rounded'/>
            <h6>John Doe</h6>
           </div>
          </div>

           {/* test-2 */}
          <div>
          <p className="slider__content review__text">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit aut porro asperiores
            recusandae ipsam fuga veniam nesciunt excepturi tempora magni.
           </p>
           <div className='slider__content d-flex align-items-center gap-3'>
            <img src={ava02} alt="avatar" className='w-25 rounded'/>
            <h6>Lara Soe </h6>
           </div>
          </div>

           {/* test-3 */}
          <div>
          <p className="review__text">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit aut porro asperiores
            recusandae ipsam fuga veniam nesciunt excepturi tempora magni.
           </p>
           <div className='d-flex align-items-center gap-3'>
            <img src={ava03} alt="avatar" className='w-25 rounded' />
            <h6>Michael williams</h6>
           </div>
          </div>
   </Slider>
  )
}

export default TestiMonialSlider
