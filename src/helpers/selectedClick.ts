import type { Dispatch } from 'redux';

import type { ISelectedCard } from '@/interfaces/selectedCard';
import { setSelectedCards } from '@/store/features/selectedCardSlice';

export const handleSelectionClick = (
  id: number,
  selectedCards: ISelectedCard[],
  productName: string,
  image: string,
  price: string | number,
  discountedPrice: string | number,
  dispatch: Dispatch
) => {
  const foundCardId = selectedCards.find((card) => card.id === Number(id));

  if (foundCardId) {
    const newSelectedCards = selectedCards.filter((card) => card.id !== Number(id));
    dispatch(setSelectedCards(newSelectedCards));
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));

    return;
  }
  const newSelectedCards = [...selectedCards, { id, productName, image, price, discountedPrice }];
  dispatch(setSelectedCards(newSelectedCards));
  localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
};
