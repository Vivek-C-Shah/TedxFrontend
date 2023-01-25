import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./HomeCarousel.css";
import Carousel1 from "../Carousel1.jpg";
import Carousel2 from "../Carousel2.jpg";

// import required modules
import { Navigation } from "swiper";

export default function HomeCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={dog} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
