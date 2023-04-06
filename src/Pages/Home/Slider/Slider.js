import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import SliderBanner1 from "./SliderBanner1";
import SliderBanner2 from "./SliderBanner2";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <SliderBanner1></SliderBanner1>
        </SwiperSlide>
        <SwiperSlide>
          <SliderBanner2></SliderBanner2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
