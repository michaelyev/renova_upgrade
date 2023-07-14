'use client';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { productData } from '@/app/redux/features/productDataSlice';
import { RootState } from '@/app/redux/store/store';

const ProductList = () => {
  const selectedCards = useSelector((state: RootState) => state.selectedCards.selectedCards);
  const products = useSelector(productData);

  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} selectedCards={selectedCards} />;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
