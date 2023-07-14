import { setSelectedCards } from '@/app/redux/features/selectedCardSlice';
import { ISelectedCard } from '@/interfaces/selectedCard';

export const handleSelectionClick = (
  id: number,
  selectedCards: ISelectedCard[],
  productName: string,
  image: string,
  price: string | number,
  discountedPrice: string | number,
  dispatch: Function
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
