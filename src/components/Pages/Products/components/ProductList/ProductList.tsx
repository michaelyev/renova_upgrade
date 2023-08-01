'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '@/components/Pages/Products/components/ProductCard/ProductCard';
import { useActions } from '@/hooks/useActions';
import { productData } from '@/redux/features/productDataSlice';
import type { RootState } from '@/redux/store/store';

const ProductList = () => {
  const activeTab = useSelector((state: RootState): string => state.navtabcategory.activeTab);

  const { fetchData } = useActions();

  useEffect((): void => {
    fetchData(activeTab);
  }, [fetchData, activeTab]);

  const selectedCards = useSelector((state: RootState) => state.selectedCards.selectedCards);
  const products = useSelector(productData);

  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => (
          <ProductCard key={product._id} {...product} selectedCards={selectedCards} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
