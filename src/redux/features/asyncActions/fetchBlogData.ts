/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from '@/helpers/getData';
import type { BlogItem } from '@/interfaces/blogItem';

export const fetchBlogData = createAsyncThunk<BlogItem[], void>(
  'blogData/fetchBlogData',
  async (): Promise<BlogItem[]> => {
    const blogData = await getData(`http://localhost:5000/blog`);
    console.log('fetch' + blogData); // eslint-disable-line
    return blogData;
  }
);
