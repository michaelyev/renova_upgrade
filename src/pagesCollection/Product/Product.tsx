'use client'
import { ProductPageCard } from '@/components/ProductPageCard/ProductPageCard';
import { getData } from '@/helpers/getData';
import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react'



export const Product = ({id}) => {
    const[productData, setProductData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getData('/countertops.json');
        setProductData(data);
      };

      fetchData();
    }, []);

    const filteredProduct = productData.find((product) => product?.id === +id);

    
  return (
    <>
      <ProductPageCard props={filteredProduct} />
      
    </>
  );
}


//скинуть массив и ко мне в пропсах приходит productName "Carrara_Marble_Countertop" и сделай _ 
// и в productData мне найти мой объект чтобы он равен productName
