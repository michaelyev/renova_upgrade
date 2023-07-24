import { createSlice } from '@reduxjs/toolkit';

import { fetchData } from '@/app/redux/features/asyncActions/fetchProductData';
import type { RootState } from '@/app/redux/store/store';
import type { IProduct } from '@/interfaces/productsType';

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
