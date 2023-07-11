import React, { useEffect, useState } from 'react'
import { productData } from '@/app/redux/features/productDataSlice';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import { useAppDispatch } from '@/app/redux/hooks';
import { setSelectedCards } from '@/app/redux/features/selectedCardSlice';
import Image from 'next/image';

export const SelectedIcon = ({id, selectedCards, productName, image, price, discountedPrice}) => {

  console.log(id)
  const dispatch = useAppDispatch();


  const handleSelectionClick = () => {
    const foundCardId = selectedCards.find((card) => card.id === id);
    if (foundCardId) {
      const newSelectedCards = selectedCards.filter(card => card.id !== id )
      dispatch(setSelectedCards(newSelectedCards))
      localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
      return
    }
    const newSelectedCards = [...selectedCards, {id, productName, image, price, discountedPrice}]
    dispatch(setSelectedCards(newSelectedCards));
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
  }

  return (
    <>
      <Image
        onClick={handleSelectionClick}
        alt=""
        src={!!selectedCards?.find((card) => card.id === id) ? '/images/icons/discounts_like.svg' : '/images/icons/right_arrow.svg'}
        width={26}
        height={26}
      />
    </>
  );
}
