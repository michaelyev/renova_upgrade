'use client';

import React, { type ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Selection from '@/app/products/Selection/Selection';
import SelectionFaq from '@/app/products/Selection/SelectionFaq/SelectionFaq';
import type { RootState } from '@/app/redux/store/store';
import { ContactForm } from '@/components';
import Banner from '@/components/Pages/Products/components/Banner/Banner';
import ProductList from '@/components/Pages/Products/components/ProductList/ProductList';
import ProductSearch from '@/components/ProductSearch/ProductSearch';
import { NavTabsRedux } from '@/components/common/navtabs/NavTabsRedux';
import { useActions } from '@/hooks/useActions';

const Products = (): ReactElement => {
  const activeTab = useSelector((state: RootState): string => state.navtabcategory.activeTab);

  const { fetchData } = useActions();

  useEffect((): void => {
    fetchData(activeTab);
  }, [fetchData, activeTab]);

  return (
    <main>
      <Banner />
      <NavTabsRedux tabName="products" />
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
