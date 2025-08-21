import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = ({ images }) => {
  return (
    <div className="relative w-full h-full group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={image.img}
              alt={image.imgAlt}
              className="w-full h-full object-fill object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <div className="swiper-button-next">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Slider;
