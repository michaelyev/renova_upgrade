import React, { type ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '@/hooks/useActions';
import { BlogArticlePage } from '@/pagesCollection/BlogArticle';
import { blogData } from '@/redux/features/blogDataSlice';

const { blog } = useSelector(blogData);
const { fetchBlogData } = useActions();

if (!blog.length) {
  fetchBlogData();
}

export async function generateStaticParams() {
  return blog.map((article) => {
    blogId: article.url;
  });
}

export default function Page(): ReactElement {
  return <BlogArticlePage />;
}
