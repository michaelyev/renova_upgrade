'use client';
import React, { FC, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

export const Reviews: FC ({ card }) {
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
