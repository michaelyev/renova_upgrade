// counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const productDataSlice = createSlice({
  name: 'productData',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  },
});

export const { setProducts } = productDataSlice.actions;
export default productDataSlice.reducer;
