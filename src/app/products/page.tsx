import React, { type ReactElement } from 'react';

import SelectionFaq from '@/app/products/Selection/SelectionFaq/page';
import Selection from '@/app/products/Selection/page';
import { ContactForm } from '@/components';
import Banner from '@/components/Pages/Products/components/Banner/Banner';
import ProductList from '@/components/Pages/Products/components/ProductList/ProductList';
import ProductSearch from '@/components/ProductSearch/ProductSearch';
import { NavTabsRedux } from '@/components/common/navtabs/NavTabsRedux';

export default function Products(): ReactElement {
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
}
