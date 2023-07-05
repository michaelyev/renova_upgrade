export const selectedCardLocalStorage = () => {
  const selectedCardString = localStorage.getItem('selectedCard') || '';
  const selectedCards = !!selectedCardString.length ? JSON.parse(selectedCardString) : [];
  
  return selectedCards
};
