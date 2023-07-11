'use client';
import { ProductPageCard } from '@/components/ProductPageCard/ProductPageCard';
import { getData } from '@/helpers/getData';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Product = ({ id }) => {
  const [productData, setProductData] = useState([]);
  const selectedCards = useSelector(state => state.selectedCards.selectedCards)


  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('/countertops.json');
      setProductData(data.filter((product) => product?.id === +id));
    };

    fetchData();
  }, []);

  const filteredProduct = productData.find((product) => product?.id === +id);


  return (
    <>
      <ProductPageCard props={filteredProduct} selectedCards={selectedCards} />
    </>
  );
};

//скинуть массив и ко мне в пропсах приходит productName "Carrara_Marble_Countertop" и сделай _
// и в productData мне найти мой объект чтобы он равен productName
