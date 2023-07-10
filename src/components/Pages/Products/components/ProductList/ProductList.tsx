'use client';
import React from 'react';
import Image from 'next/image';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { getData } from '@/helpers/getData';
import { useSelector, useDispatch } from 'react-redux';
import { productData, fetchData } from '@/app/redux/features/productDataSlice';
import { useActions } from '@/hooks/useActions';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import { useAppDispatch } from '@/app/redux/hooks';

const ProductList = () => {

  const selectedCards = useSelector(state => state.selectedCards.selectedCards)
  const products = useSelector(productData);


  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product}
          selectedCards={selectedCards} 
          />;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
