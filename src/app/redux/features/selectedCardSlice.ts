import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { selectedCardLocalStorage } from '@/helpers/selectedCardLocalStorage';


type SelectedCardState = {
  selectedCard: number[];  // Replace any with the actual type
};

const initialState: SelectedCardState = {
  selectedCard: selectedCardLocalStorage(),  // Replace null with the actual initial value
};


const selectedCardSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        setSelectedCard: (state, action: PayloadAction<number>) => {
            state.selectedCard = [...state.selectedCard, action.payload];
        },
    },
});

export const { setSelectedCard } = selectedCardSlice.actions;

export default selectedCardSlice.reducer;
