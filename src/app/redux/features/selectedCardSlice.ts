import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';
import type { ISelectedCard } from '@/interfaces/selectedCard';

type SelectedCardState = {
  selectedCards: ISelectedCard[];
};

const initialState: SelectedCardState = {
  selectedCards: selectedCardLocalStorage(),
};

const selectedCardSlice = createSlice({
  name: 'selectedCards',
  initialState,
  reducers: {
    setSelectedCards: (state, action: PayloadAction<any>) => {
      state.selectedCards = action.payload;
    },
  },
});

export const { setSelectedCards } = selectedCardSlice.actions;

export default selectedCardSlice.reducer;
