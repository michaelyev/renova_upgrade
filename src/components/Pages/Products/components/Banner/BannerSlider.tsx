"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function BannerSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-[400px] w-full bg-amber-300 mb-[128px] "
      >
        <SwiperSlide >
          <div className="flex justify-around h-[380px] items-center">
            <div className="items-center max-w-[714px]">
              <h2 className="font-inter font-bold text-lg leading-snug mb-[64px]">
                Lorem ipsum, dolor sit amet{" "}
              </h2>
              <h2 className="font-darkGrotesque font-bold text-4xl text-main1 leading-tight mb-[32px]">
                Lorem, ipsum.
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                natus itaque ab corrupti repudiandae distinctio numquam totam
                pariatur adipisci labore fuga voluptate, accusantium dolorum
                ipsa, sit temporibus quod eaque! Ipsa.
              </p>
            </div>

            <div className="max-w-[490px] items-center">
              <h2 className="font-inter font-bold text-lg leading-snug mb-[64px]">Catch a coupon for free installation of kitchen cabinets </h2>
              <button className="flex py-[20px] px-[40px]  justify-center text-main1 text-4xl bg-accent h-[80px]  items-center">Take coupon</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
