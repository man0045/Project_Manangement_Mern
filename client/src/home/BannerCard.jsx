import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Bannercard.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="..\src\assets\1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="..\src\assets\2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="..\src\assets\3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="..\src\assets\4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="..\src\assets\5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="..\src\assets\Rackon.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
