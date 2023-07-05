'use client';
import React, { useEffect } from 'react';
import Banner from '../../components/Pages/Products/components/Banner/Banner';
import Selection from './Selection/Selection';
import ProductList from '@/components/Pages/Products/components/ProductList/ProductList';
import SelectionFaq from './Selection/SelectionFaq/SelectionFaq';
import ProductSearch from '@/components/ProductSearch/ProductSearch';

import { NavTabsRedux } from '@/components/common/navtabs/NavTabsRedux';
import { ContactForm } from '@/components';
import { getData } from '@/helpers/getData';
import { useSelector, useDispatch } from 'react-redux';
import { productData, fetchData } from '@/app/redux/features/productDataSlice';
import { useActions } from '@/hook/useActions';

const Products = () => {
  const activeTab = useSelector((state) => state.navtabcategory.activeTab);

  const { fetchData } = useActions();

  useEffect(() => {
    fetchData(activeTab);
  }, [fetchData, activeTab]);
  
  return (
    <main>
      <Banner />
      <NavTabsRedux tabName={'products'} />
      <div className="container flex gap-[20px] ">
        <div>
          <Selection />
          <SelectionFaq />
        </div>
        <div className="flex flex-col">
          <ProductSearch />
          <ProductList />
        </div>
      </div>
      <ContactForm />
    </main>
  );
};

export default Products;
