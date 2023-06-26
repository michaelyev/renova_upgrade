import { Blog } from '@/components/Blog/Blog';
import { ContactsMain } from '@/components/ContactsMain/ContactsMain';
import { Discounts } from '@/components/Discounts/DIscounts';
import { Faq } from '@/components/FAQ/Faq';
import { Hero } from '@/components/Hero/Hero';
import { Manufacturers } from '@/components/Manufacturers/Manufacturers';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import Products from '@/components/ProductsMain/ProductsMain';
import { Ratings } from '@/components/Ratings/Ratings';
import { Reviews } from '@/components/Reviews/Reviews';
import Video from '@/components/VideoMain/VideoMain';
import React from 'react';

export const MainPage = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Discounts />
      <Video />
      <Manufacturers />
      <Portfolio />
      {/* <Reviews /> */}
      <Ratings />
      <Blog />
      <Faq />
      <ContactsMain />
    </main>
  );
};
