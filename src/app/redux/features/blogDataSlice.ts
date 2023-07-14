import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { fetchBlogData } from './asyncActions/fetchBlogData';
import { BlogItem } from '@/interfaces/blogItem';

type BlogState = {
  blog: BlogItem[];
  error: string;
  loading: boolean;
};

const initialState: BlogState = {
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
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else {
          state.error = 'An error occurred';
        }
        state.loading = false;
      });
  },
});

export const blogData = (state: RootState) => state.blogData;

export default blogDataSlice.reducer;
