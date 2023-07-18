import "./SlideShowProducat.css";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import SmallCard from "../SmallCard/SmallCard";


const SlideShowProducat=()=>{
  const [swiperRef, setSwiperRef] = useState(null);

  

  

  return (
    < div className="MainSlideShowPro">
      <div className="TopProducat"><span>TopProducat</span></div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SmallCard/></SwiperSlide>
        <SwiperSlide><SmallCard/></SwiperSlide>
        <SwiperSlide><SmallCard/></SwiperSlide>
        <SwiperSlide><SmallCard/></SwiperSlide>
      </Swiper>

      
    </div>
  );
}

export default SlideShowProducat