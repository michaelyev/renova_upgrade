// counterSlice.js
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { getData } from '@/helpers/getData';

export const fetchData = createAsyncThunk<any, void>('productData/fetchData', async (activeTab) => {
  const productData = await getData(`/${activeTab}.json`);
  return productData;
});

const initialState = {
  products: [],
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
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const productData = (state: RootState) => state.productData.products;

export default productDataSlice.reducer;
