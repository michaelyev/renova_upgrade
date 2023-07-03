import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SelectedCardState = {
  selectedCard: any;  // Replace any with the actual type
};

const initialState: SelectedCardState = {
  selectedCard: null,  // Replace null with the actual initial value
};

const selectedCardSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        setSelectedCard: (state, action: PayloadAction<any>) => {
            state.selectedCard = action.payload;
        },
    },
});

export const { setSelectedCard } = selectedCardSlice.actions;

export default selectedCardSlice.reducer;
