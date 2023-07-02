'use client';
import React, { FC, JSXElementConstructor, ReactElement, ReactNode, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

type CardType = {
  card: ReactElement;
};

export const Reviews: FC<CardType> = ({ card }): ReactElement => {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} modules={[FreeMode, Pagination]} className="mySwiper">
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
        <SwiperSlide>{card}</SwiperSlide>
      </Swiper>
    </>
  );
};
