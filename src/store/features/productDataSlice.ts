import { createSlice } from '@reduxjs/toolkit';

import type { IProduct } from '@/interfaces/productsType';
import { fetchData } from '@/store/features/asyncActions/fetchProductData';
import type { RootState } from '@/store/store/store';

const initialState = {
  products: [] as IProduct[],
  error: '',
  loading: false,
};

const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const productData = (state: RootState) => state.productData.products;

export default productDataSlice.reducer;
