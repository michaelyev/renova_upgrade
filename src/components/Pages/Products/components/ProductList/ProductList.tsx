'use client';
import React from 'react';
import Image from 'next/image';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { getData } from '@/helpers/getData';
import { useSelector, useDispatch } from 'react-redux';
import { productData, fetchData } from '@/app/redux/features/productDataSlice';
import { useActions } from '@/hook/useActions';

const ProductList = () => {
  const activeTab = useSelector((state) => state.navtabcategory.activeTab);

  const { fetchData } = useActions();
  const products = useSelector(productData);

  useEffect(() => {
    fetchData(activeTab);
  }, [fetchData, activeTab]);

  //localstorage and save id


  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
