import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '@/helpers/getData';

export const fetchBlogData = createAsyncThunk('blogData/fetchBlogData', async () => {
  const blogData = await getData('/blogData.json');
  return blogData;
});

const blogDataSlice = createSlice({
  name: 'blogData',
  initialState: [],
  reducers: {
    setBlog: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        return action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export default blogDataSlice.reducer;
export const { setBlog } = blogDataSlice.actions;
