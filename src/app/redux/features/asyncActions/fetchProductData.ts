import { getData } from '@/helpers/getData';
import { IProduct } from '@/interfaces/productsType';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk<IProduct[], string>('productData/fetchData', async (activeTab) => {
  const productData = await getData(`http://localhost:5000/${activeTab}`);
  return productData;
  
});
