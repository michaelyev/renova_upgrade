'use client';
import { RootState } from '@/app/redux/store/store';
import { ProductPageCard } from '@/components/ProductPageCard/ProductPageCard';
import { getData } from '@/helpers/getData';
import { IProduct } from '@/interfaces/productsType';
import React, { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';

interface ProductProps {
  id: string;
}
export const Product: FC<ProductProps> = ({ id }) => {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const selectedCards = useSelector((state: RootState) => state.selectedCards.selectedCards);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('/countertops.json');
      setProductData(data.filter((product: IProduct) => product?.id === +id));
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
