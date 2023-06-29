'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CheckBoxState {
    expandedIndexes: number[];
}

const initialState: CheckBoxState = {
    expandedIndexes: [0]
}


const checkBoxSlice = createSlice ({
    name: 'checkbox',
    initialState,
    reducers: {
        setExpandedIndexes: (state, action: PayloadAction<number[]>) => {
            state.expandedIndexes = action.payload;
        },

        toggleIndex: (state, action: PayloadAction<number>) => {
            if(state.expandedIndexes.includes(action.payload)){
                state.expandedIndexes = state.expandedIndexes.filter((item) => item!== action.payload )

            } else {
                state.expandedIndexes = [...state.expandedIndexes, action.payload];
            }
        }
    }
})

export const {setExpandedIndexes, toggleIndex} = checkBoxSlice.actions;
export default checkBoxSlice.reducer;