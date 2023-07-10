import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';


type SelectedCardState = {
  selectedCards: number[];  
};

const initialState: SelectedCardState = {
  selectedCards: selectedCardLocalStorage()
};


const selectedCardSlice = createSlice({
    name: 'selectedCards',
    initialState,
    reducers: {
        setSelectedCards: (state, action: PayloadAction<number>) => {
            state.selectedCards = [...state.selectedCards, action.payload];
        },
    },
});

export const { setSelectedCards } = selectedCardSlice.actions;

export default selectedCardSlice.reducer;
