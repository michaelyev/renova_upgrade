import { getData } from '@/helpers/getData';
import { BlogItem } from '@/interfaces/blogItem';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogData = createAsyncThunk<BlogItem[], string>('blogData/fetchBlogData', async (fileName) => {
  const blogData = await getData(`/${fileName}.json`);
  return blogData;
});
