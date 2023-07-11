// helpers/handleSelectionClick.js
import { setSelectedCards } from '@/app/redux/features/selectedCardSlice';

export const handleSelectionClick = (id, selectedCards, productName, image, price, discountedPrice , dispatch) => {
    console.log(image)
  const foundCardId = selectedCards.find((card) => card.id === id);
  if (foundCardId) {
    const newSelectedCards = selectedCards.filter(card => card.id !== id )
    dispatch(setSelectedCards(newSelectedCards))
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
    return;
  }
  const newSelectedCards = [...selectedCards, {id, productName, image, price, discountedPrice}]
  dispatch(setSelectedCards(newSelectedCards));
  localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
}
