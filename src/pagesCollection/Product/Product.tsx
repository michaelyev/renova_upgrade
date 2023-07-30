'use client';

import { type FC, type ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ProductPageCard } from '@/components/ProductPageCard/ProductPageCard';
import { getData } from '@/helpers/getData';
import type { IProduct } from '@/interfaces/productsType';
import type { ISelectedCard } from '@/interfaces/selectedCard';
import type { RootState } from '@/redux/store/store';

interface ProductProps {
  url: string;
}

export const Product: FC<ProductProps> = ({ url }): ReactElement => {
  const [productData, setProductData] = useState<IProduct>();
  const selectedCards = useSelector((state: RootState): ISelectedCard[] => state.selectedCards.selectedCards);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`http://localhost:5000/products/${url}`);
      setProductData(data);
    };

    fetchData();
  }, [url]);

  return <ProductPageCard props={productData} selectedCards={selectedCards} />;
};
