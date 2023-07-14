export const selectedCardLocalStorage = () => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return []; // Return default value or handle the case where localStorage is not available
  }

  const selectedCardString = localStorage.getItem('selectedCard') || '';
  const selectedCards = !!selectedCardString.length ? JSON.parse(selectedCardString) : [];

  return selectedCards;
};
