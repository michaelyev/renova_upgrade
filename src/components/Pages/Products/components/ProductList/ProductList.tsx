'use client';
import React from 'react';
import Image from 'next/image';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
/* import axios from 'axios'; */
import { getData } from '@/helpers/getData';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '@/app/redux/features/productDataSlice';

const ProductList = () => {
  const activeTab = useSelector((state) => state.navtabcategory.activeTab);
  // const [products, setProducts] = useState([])
  const products = useSelector((state) => state.productData);
  const dispatch = useDispatch();
//localstorage and save id
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`/${activeTab}.json`);
      dispatch(setProducts(data));
    };

    fetchData();
  }, [activeTab, dispatch]);

  console.log(products);

  return (
    <section>
      <ul className="flex flex-wrap justify-between gap-[16px] m-width-[] ">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
