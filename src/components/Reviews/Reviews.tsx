'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from 'swiper';

export function Reviews({ card }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        /* pagination={{
          clickable: true,
        }} */
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
      </Swiper>
    </>
  );
}
