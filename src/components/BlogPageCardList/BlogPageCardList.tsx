'use client';

import { type ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BlogCard } from '@/components/BlogCard/BlogCard';
import { useActions } from '@/hooks/useActions';
import { type BlogItem } from '@/interfaces/blogItem';
import { blogData } from '@/redux/features/blogDataSlice';

export const BlogPageCardList = () => {
  const { blog } = useSelector(blogData);
  const { fetchBlogData } = useActions();

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  return (
    <div className="flex flex-wrap gap-[20px] mb-[130px]">
      {blog.map(
        (blogInfo: BlogItem): ReactElement => (
          <BlogCard {...blogInfo} />
        )
      )}
    </div>
  );
};
