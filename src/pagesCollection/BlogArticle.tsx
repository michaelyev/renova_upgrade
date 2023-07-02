'use client';
import { getData } from '@/helpers/getData';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBlog } from '@/app/redux/features/blogDataSlice';


export const BlogArticlePage = ({ blogId }) => {
  const blog = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

  const [article, setArticle] = useState(null);
  const ref = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData('/blogData.json');
      dispatch(setBlog(result));
    };

    if (!ref.current) {
      ref.current = fetchData();
    }
  }, [blog, dispatch]);

  useEffect(() => {
    if (blog) {
      const foundArticle = blog.find((item) => item.id === blogId);
      setArticle(foundArticle);
    }
  }, [blog, blogId]);

  return (
    <section>
      <div className="container pt-[80px]">
        {article ? (
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
