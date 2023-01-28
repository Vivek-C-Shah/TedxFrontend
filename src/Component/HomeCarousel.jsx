import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./HomeCarousel.css";
import Carousel1 from "../Carousel1.webp";
import Carousel2 from "../Carousel2.webp";
import Carousel3 from "../Carousel3.webp";
import Carousel4 from "../Carousel4.webp";

// import required modules
import { Navigation } from "swiper";

export default function HomeCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Carousel1} alt="Carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="Carousel 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="Carousel 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel4} alt="Carousel 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
