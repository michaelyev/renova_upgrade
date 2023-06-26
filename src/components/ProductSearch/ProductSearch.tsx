'use client';
import React from 'react';
import { inputConfig } from '../common/input/inputconfig';
import { NavTabsRedux } from '../common/navtabs/NavTabs';
import { Input } from '../common';

const ProductSearch = () => {
  return (
    <div>
      <div className="mt-[24px] mb-[16px] justify-center">
        <Input id="productSearch" placeholder="Search" />
      </div>
      <NavTabsState border="border-none" style="py-[4px] px-[16px] mb-[28px] border-none" tabName={'productSort'} />
    </div>
  );
};

export default ProductSearch;
