import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BrSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BrSlider = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {data.map((res) => (
          <SwiperSlide key={res._id}>
            <div
              style={{
                background: `url("${res.image}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full min-h-[50vh] grid place-items-center p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-600/75 z-0"
            >
              <div className="text-center flex flex-col justify-center items-center gap-4 relative z-10 text-white ">
                <h2 className="text-3xl font-bold">{res.name}</h2>
                <p>Price: ${res.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

BrSlider.propTypes = {
  data: PropTypes.object,
};

export default BrSlider;
