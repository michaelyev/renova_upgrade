'use client';

import type { FC, ReactElement } from 'react';
import { FreeMode, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductsCard } from '@/components/common/cards/products/products';

export const Reviews: FC = (): ReactElement => (
  <Swiper slidesPerView={3} spaceBetween={30} freeMode modules={[FreeMode, Pagination]} className="mySwiper">
    {Array.from(Array(6).keys()).map(() => (
      <SwiperSlide>
        <ProductsCard />
      </SwiperSlide>
    ))}
  </Swiper>
);
