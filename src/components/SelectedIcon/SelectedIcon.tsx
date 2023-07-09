import { productData } from '@/app/redux/features/productDataSlice';
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const SelectedIcon = () => {

    interface Card {
        id: number;
        productName: string;
        image: string;
        price: number;
        discountedPrice: number;
      }
      
      const[selectedCards, setSelectedCards] = useState<Card[]>([])
  
    
    

  useEffect(() => {
    setSelectedCards(selectedCardLocalStorage());
  }, []);

    const handleSelectionClick = () => {
        console.log(selectedCards);
        if (selectedCards.find(card => card.id === id)) return;
        const newSelectedCards = [...selectedCards, {id, productName, image, price, discountedPrice}]
        setSelectedCards(newSelectedCards)
        localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
      };


  return (
    <>
    {(selectedCards?.find(card => card.id === id)) ? (
              'selected'
            ) : (
              <Image
                onClick={handleSelectionClick}
                alt=""
                src="/images/icons/discounts_like.svg"
                width={26}
                height={26}
              />
            )}
    </>
  )
}
