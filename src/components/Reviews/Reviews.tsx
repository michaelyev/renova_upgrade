'use client';

import type { FC, ReactElement } from 'react';
import { FreeMode, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

type CardType = {
  card: ReactElement;
};

export const Reviews: FC<CardType> = ({ card }): ReactElement => (
  <Swiper slidesPerView={3} spaceBetween={30} freeMode modules={[FreeMode, Pagination]} className="mySwiper">
    <SwiperSlide>{card}</SwiperSlide>
    <SwiperSlide>{card}</SwiperSlide>
    <SwiperSlide>{card}</SwiperSlide>
    <SwiperSlide>{card}</SwiperSlide>
    <SwiperSlide>{card}</SwiperSlide>
    <SwiperSlide>{card}</SwiperSlide>
  </Swiper>
);
