import React, { useEffect, useState } from 'react'
import { productData } from '@/app/redux/features/productDataSlice';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import { useAppDispatch } from '@/app/redux/hooks';
import { setSelectedCards } from '@/app/redux/features/selectedCardSlice';
import Image from 'next/image';
import { handleSelectionClick } from '@/helpers/selectedClick';

export const SelectedIcon = ({id, selectedCards, productName, image, price, discountedPrice}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Image
        onClick={() => handleSelectionClick(id, selectedCards, productName, image, price, discountedPrice , dispatch)}
        alt=""
        src={!!selectedCards?.find((card) => card.id === id) ? '/images/icons/discounts_like.svg' : '/images/icons/right_arrow.svg'}
        width={26}
        height={26}
      />
    </>
  );
}
