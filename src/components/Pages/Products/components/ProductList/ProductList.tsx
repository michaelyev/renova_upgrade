'use client';

import { useSelector } from 'react-redux';

import ProductCard from '@/components/Pages/Products/components/ProductCard/ProductCard';
import { productData } from '@/redux/features/productDataSlice';
import type { RootState } from '@/redux/store/store';

const ProductList = () => {
  const selectedCards = useSelector((state: RootState) => state.selectedCards.selectedCards);
  const products = useSelector(productData);

  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} selectedCards={selectedCards} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
