import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from '@/helpers/getData';
import type { IProduct } from '@/interfaces/productsType';

export const fetchData = createAsyncThunk<IProduct[], string>(
  'productData/fetchData',
  async (activeTab: string): Promise<IProduct[]> => {
    const productData = await getData(`http://localhost:5000/${activeTab}`);

    return productData;
  }
);
