import { productData } from '@/app/redux/features/productDataSlice';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

interface Card {
  id: number;
  productName: string;
  image: string;
  price: number;
  discountedPrice: number;
}



export const SelectedIcon = () => {
  
  const handleSelectionClick = () => {
    if (selectedCards.find(card => card.id === id)) {
      const newSelectedCards = selectedCards.filter(card => card.id !== id )
      setSelectedCards(newSelectedCards)
      localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
      setIsLiked(false)
      return
    }
    const newSelectedCards = [...selectedCards, {id, productName, image, price, discountedPrice}]
    setSelectedCards(newSelectedCards);
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
     setIsLiked(true)
  }

  return (
    <>
      
    </>
  );
}
