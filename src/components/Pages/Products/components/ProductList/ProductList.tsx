'use client';

import { useSelector } from 'react-redux';

import { productData } from '@/app/redux/features/productDataSlice';
import type { RootState } from '@/app/redux/store/store';
import ProductCard from '@/components/Pages/Products/components/ProductCard/ProductCard';

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
