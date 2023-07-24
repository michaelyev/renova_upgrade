'use client';

import { type FC, type ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/redux/store/store';
import { ProductPageCard } from '@/components/ProductPageCard/ProductPageCard';
import { getData } from '@/helpers/getData';
import type { IProduct } from '@/interfaces/productsType';
import { ISelectedCard } from '@/interfaces/selectedCard';

interface ProductProps {
  id: string;
}

export const Product: FC<ProductProps> = ({ id }): ReactElement => {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const selectedCards = useSelector((state: RootState): ISelectedCard[] => state.selectedCards.selectedCards);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('/countertops.json');
      setProductData(data.filter((product: IProduct) => product?.id === +id));
    };

    fetchData();
  }, [id]);

  const filteredProduct = productData.find((product) => product?.id === +id);

  return <ProductPageCard props={filteredProduct} selectedCards={selectedCards} />;
};
