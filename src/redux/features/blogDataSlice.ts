import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { BlogItem } from '@/interfaces/blogItem';
import { fetchBlogData } from '@/redux/features/asyncActions/fetchBlogData';
import type { RootState } from '@/redux/store/store';

type BlogState = {
  blog: BlogItem[];
  error: string;
  isLoading: boolean;
};

const initialState: BlogState = {
  blog: [],
  error: '',
  isLoading: false,
};

const blogDataSlice = createSlice({
  name: 'blogData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.fulfilled, (state, action: PayloadAction<BlogItem[]>) => {
        state.blog = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBlogData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else {
          state.error = 'An error occurred';
        }
        state.isLoading = false;
      });
  },
});

export const blogData = (state: RootState): BlogState => state.blogData;

export default blogDataSlice.reducer;
