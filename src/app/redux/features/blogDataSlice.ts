import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchBlogData } from '@/app/redux/features/asyncActions/fetchBlogData';
import type { RootState } from '@/app/redux/store/store';
import type { BlogItem } from '@/interfaces/blogItem';

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
      .addCase(fetchBlogData.fulfilled, (state, action: PayloadAction<BlogItem[]>) => {
        state.blog = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogData.pending, (state) => {
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

export const blogData = (state: RootState): BlogState => state.blogData;

export default blogDataSlice.reducer;
