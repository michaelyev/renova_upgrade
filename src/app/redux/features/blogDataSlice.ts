import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '@/helpers/getData';
import { RootState } from '../store/store';

export const fetchBlogData = createAsyncThunk<any, void>('blogData/fetchBlogData', async (fileName) => {
  const blogData = await getData(`/${fileName}.json`);
  return blogData;
});

const initialState = {
  blog: [],
  error: '',
  loading: false,
};

const blogDataSlice = createSlice({
  name: 'blogData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const blogData = (state: RootState) => state.blogData;

export default blogDataSlice.reducer;
