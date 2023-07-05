'use client';
import React from 'react';
import Image from 'next/image';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { getData } from '@/helpers/getData';
import { useSelector, useDispatch } from 'react-redux';
import { productData, fetchData } from '@/app/redux/features/productDataSlice';
import { useActions } from '@/hook/useActions';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';

const ProductList = () => {

  const[selectedCards, setSelectedCards] = useState<number[]>([])
  
  useEffect(()=> {
    setSelectedCards(selectedCardLocalStorage())
  },[])
  
  const products = useSelector(productData);


  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => {
          return <ProductCard key={product.id} {...product} 
          selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
