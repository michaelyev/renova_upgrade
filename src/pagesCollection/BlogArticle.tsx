'use client';
import { useSelector } from 'react-redux';
import { blogData } from '@/app/redux/features/blogDataSlice';
import { useActions } from '@/hooks/useActions';
import { FC, ReactElement } from 'react';

interface BlogArticlePageProps {
  blogId: number;
}
export const BlogArticlePage: FC<BlogArticlePageProps> = ({ blogId }): ReactElement => {
  const { blog, loading } = useSelector(blogData);
  const { fetchBlogData } = useActions();

  if (!blog.length) {
    fetchBlogData('blogData');
  }

  const article = blog.find((item) => item.id === blogId);

  return (
    <section>
      <div className="container pt-[80px]">
        {article && !loading ? (
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
