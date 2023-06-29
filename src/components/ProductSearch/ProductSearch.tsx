'use client'
import React from 'react'
import { Input } from '../common'
import { inputConfig } from '@/constants/inputConfig'
import { NavTabsRedux } from '../common/navtabs/NavTabsRedux'

const ProductSearch = () => {
  return (
    <div>
      <div className="mt-[24px] mb-[16px] justify-center">
        <Input id="productSearch" placeholder="Search" />
      </div>
      <NavTabsRedux border='border-none' style="py-[4px] px-[16px] mb-[28px] border-none" tabName={"productSort"}/>
    </div>
  );
}

export default ProductSearch