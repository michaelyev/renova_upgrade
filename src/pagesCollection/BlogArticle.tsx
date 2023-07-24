'use client';

import type { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '@/hooks/useActions';
import { blogData } from '@/store/features/blogDataSlice';

interface BlogArticlePageProps {
  blogId: number;
}

export const BlogArticlePage: FC<BlogArticlePageProps> = ({ blogId }): ReactElement => {
  const { blog, isLoading } = useSelector(blogData);
  const { fetchBlogData } = useActions();

  if (!blog.length) {
    fetchBlogData('blogData');
  }

  const article = blog.find((item) => item.id === blogId);

  return (
    <section>
      <div className="container pt-[80px]">
        {article && !isLoading ? (
          <div>
            <h1 className="h2 pb-[48px]">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </section>
  );
};
