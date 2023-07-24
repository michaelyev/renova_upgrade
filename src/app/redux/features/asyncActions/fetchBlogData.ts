import { createAsyncThunk } from '@reduxjs/toolkit';

import { getData } from '@/helpers/getData';
import type { BlogItem } from '@/interfaces/blogItem';

export const fetchBlogData = createAsyncThunk<BlogItem[], string>(
  'blogData/fetchBlogData',
  async (fileName: string): Promise<BlogItem[]> => {
    const blogData = await getData(`/${fileName}.json`);

    return blogData;
  }
);
